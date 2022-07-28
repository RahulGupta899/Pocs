import React from 'react';
import ReactDom from 'react-dom';
import './styles.css';

function checkGameStatus(arr){
    console.log("called");
    let gameStatus = "";
    let winComb = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i=0;i<winComb.length;i++){
        let c1 = winComb[i][0];
        let c2 = winComb[i][1];
        let c3 = winComb[i][2];
        
        if(arr[c1]!=null && arr[c1]==arr[c2] && arr[c2]==arr[c3]) {
            console.log(arr[c1],arr[c2],arr[c3]);
            gameStatus = arr[c1]+" Wins";
        }
            
    }
    return gameStatus;
}

class GameBoard extends React.Component{

    tellParent(cellIdx){
        this.props.handleCellClicked(cellIdx);
    }

    displayCell(cellIdx, cellValue){
        return(
            <button onClick={()=> this.tellParent(cellIdx)}>
                {cellValue!=null? cellValue: ""}
            </button>
        )
    }
    render(){
        let updatedBoard = this.props.updatedBoard;
        return(
            <div className="board">
                <div className='title'>Game Board</div>
                <div className="content">
                    <div className="game">
                        <div className="row">
                            {this.displayCell(0,updatedBoard[0])}
                            {this.displayCell(1,updatedBoard[1])}
                            {this.displayCell(2,updatedBoard[2])}
                        </div>
                        <div className="row">
                            {this.displayCell(3,updatedBoard[3])}
                            {this.displayCell(4,updatedBoard[4])}
                            {this.displayCell(5,updatedBoard[5])}
                        </div>
                        <div className="row">
                            {this.displayCell(6,updatedBoard[6])}
                            {this.displayCell(7,updatedBoard[7])}
                            {this.displayCell(8,updatedBoard[8])}
                        </div>
                    </div>
                </div>
            </div>
        )}
}

class HistoryBoard extends React.Component{
    handleHistoryClick(step){
        this.props.callParent(step);
    }
    render(){
        let gameStatus = this.props.gameStatus;
        let stepNo = this.props.stepno;
        let buttons = [];
        for(let i=0; i<=stepNo; i++){
            let btn;
            if(i==0){
                btn = (<button onClick={()=>this.handleHistoryClick(i)} key={i}>Restart Game</button>)
            }
            else{
                btn = (<button onClick={()=>this.handleHistoryClick(i)} key={i}>Go To #step {i}</button>)
            }
            buttons.push(btn);
        }

        return(
            <div className="history">
                <div className='title'>{gameStatus}</div>
                <div className="content">
                    <div className="historyLogs">
                        {buttons}                        
                    </div>
                </div>
            </div>
        )
    }
}

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            history:[
                [null,null,null,null,null,null,null,null,null]
            ],
            stepno:0,
            gameStatus:"Move X"            
        }
    }

    cellClicked(cellIdx){  // This method we use to receive data from child
        let oldHistory = this.state.history.slice(); // Makes copy of history array
        let lastUpdatedBoard = oldHistory[oldHistory.length-1].slice(); 

        if (lastUpdatedBoard[cellIdx] != null || this.state.gameStatus=="X Wins" || this.state.gameStatus=="O Wins")    return; // Clicked on Alredy used cell
        
        lastUpdatedBoard[cellIdx] = (this.state.stepno%2==0)? "X" : "O";  // If step is even the X plays Otherwise O plays
        oldHistory.push(lastUpdatedBoard); // Add a new History in History Array

        this.setState({
            gameStatus: (this.state.stepno%2==0)? "Move O" : "Move X",
            stepno: this.state.stepno+1,
            history: oldHistory
        })

        let gstatus = checkGameStatus(lastUpdatedBoard);

        if(gstatus=="X Wins" || gstatus=="O Wins" || this.state.stepno==8){
            if(gstatus!="X Wins" && gstatus!="O Wins"){
                gstatus = "Match Tied";
            } 
            this.setState({
                gameStatus:gstatus
            });
        }
    } 
    
    handleHistoryClicked(step){
        let updateHistory = [];
        console.log(this.state.history);
        for(let i=0;i<=step; i++){
            updateHistory.push(this.state.history[i]);
        }
        this.setState({
            history:updateHistory,
            gameStatus: ((this.state.stepno)%2==0)? "Move O" : "Move X",
            stepno:step
        });
    }

    render(){
        let boardStatus = this.state.history[this.state.history.length-1]; // Last array will be the updated one
        return(
            <>  
                <GameBoard  handleCellClicked={(cellIdx)=>this.cellClicked(cellIdx)} updatedBoard={boardStatus} />
                <HistoryBoard stepno={this.state.stepno} gameStatus={this.state.gameStatus} callParent={(step)=>this.handleHistoryClicked(step)}/>
            </>
        )
    }
}

ReactDom.render(<App/>, document.querySelector("#root"));

