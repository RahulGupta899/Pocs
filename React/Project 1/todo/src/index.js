import React from 'react';
import ReactDom from 'react-dom';
import './index.css';               //*Note1: To - link custom CSS


class AddTask extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            taskDesc: ''
        };
    }

    handleTextWhileAddTask(e){
        this.setState({
            taskDesc:e.target.value // when user enters text that gets stored here
        });
    }
    handleButtonWhileAddTask(e){
        if(!!this.state.taskDesc == false) return;
        this.props.handlerToCollectTaskInfo(this.state.taskDesc);  // Call in the parent - App
        this.setState({
            taskDesc:''
        });
    }

    render(){
        return(
            <form> 
                <input type="text" value={this.state.taskDesc} onChange={(e) => this.handleTextWhileAddTask(e)} ></input>
                <input type="button" value="Add Task" onClick={()=> this.handleButtonWhileAddTask()} ></input>
            </form>            
        )
    }
}

class TaskList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            taskDesc:''
        }
    }

    handleIconClick(taskDesc){
        console.log("Task Desc:"+taskDesc);
        this.props.handleTaskOnUpdate(taskDesc);
    }

    render(){
        // console.log(this.props.taskType);
        // console.log(this.props.task);

        let list = [];
        for(let i=0; i<this.props.task.length; i++){
            let listItem = (
                <li key={i}>
                    <span>{this.props.task[i].desc}</span>
                    <span onClick={()=> this.handleIconClick(this.props.task[i].desc)} className="material-icons"> {this.props.task[i].isFinished==false ? "done" : "remove_circle_outline" } </span>
                </li>
            );
            list.push(listItem);
        }

        return(
            <div className={this.props.forStyling}>
                <div className="list-container">
                    <div className="title"> {this.props.taskType} </div>
                    <ul> {list} </ul>
                </div>
            </div>          
        )
    }
}

class App extends React.Component{  //* Note2: This is class Based component: App is main Parent
    constructor(props){
        super(props);

        this.state = {              // *Note3: In state we keep apps data
            tasks:[
                {
                    desc: "Prepare Schedule for upcomming classes",
                    isFinished: false
                },
                {
                    desc: "Go For a walk",
                    isFinished: true
                },
                {
                    desc: "Make Dinner",
                    isFinished: true
                },
                {
                    desc: "Spend Time with Mom and Dad",
                    isFinished: false
                }
            ]
        }
    }

    handleNewTask(task){
        let oldTask = this.state.tasks.slice();
        oldTask.push({
            desc:task,
            isFinished:false
        });
        this.setState({
            tasks:oldTask
        });
    }

    handleTaskStatusUpdate(task){
        let oldTask = this.state.tasks.slice();
        oldTask.forEach((e)=>{
            console.log(e.desc,task);
            if(e.desc === task){
                console.log("triggered",e.taskDesc);
                e.isFinished = !e.isFinished;
            }
        });
        console.log(oldTask);
        this.setState({
            tasks:oldTask            
        });
    }

    render(){
        let tasks = this.state.tasks;
        let finishedTasks = tasks.filter( v=> v.isFinished==true);
        let pendingTasks = tasks.filter( v=> v.isFinished==false);
        return(
            <>
                <div className="add-task">
                    <AddTask handlerToCollectTaskInfo={(task)=>this.handleNewTask(task)} />
                </div>
                <div className="task-lists">
                    <TaskList handleTaskOnUpdate={(taskDesc)=> this.handleTaskStatusUpdate(taskDesc)} taskType="Pending" forStyling="pending" task={pendingTasks}/>
                    <TaskList handleTaskOnUpdate={(taskDesc)=> this.handleTaskStatusUpdate(taskDesc)} taskType="Finished" forStyling="finished" task={finishedTasks}/>
                </div>                
            </>
        )
    }
}

ReactDom.render(<App/>, document.querySelector("#root")); 
