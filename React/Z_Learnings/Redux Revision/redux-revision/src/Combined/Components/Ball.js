import {connect} from 'react-redux';

function Ball(props){
    console.log(props);
    return (
        <div>
            <h1>Track Balls </h1>
            <h2>Number of Balls: {props.balls}</h2>
            <button onClick={props.increaseBalls}>INC</button>
            <button onClick={props.decreaseBalls}>DEC</button>
        </div>
    )
}

const mapStatesToProps = function(state){
    return state.Ball;
}

const mapDispatchToProps = function(dispatch){
    return{
        increaseBalls: ()=>{dispatch({type:'INCREASE_BALLS'})},
        decreaseBalls: ()=>{dispatch({type:'DECREASE_BALLS'})}
    }
}


export default connect(mapStatesToProps,mapDispatchToProps)(Ball);