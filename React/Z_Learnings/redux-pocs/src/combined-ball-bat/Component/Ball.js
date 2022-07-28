
import {connect} from 'react-redux'

function Ball(props){
    console.log(props);
    return(
        <>
            <h1>Ball App</h1>
            <h2>Number of Balls: {props.balls} </h2>
            <button onClick={props.increment}>INC</button>
            <button onClick={props.decrement}>DEC</button>
        </>
    )
}

const mapStateToProps = (store)=>{
    console.log("STORE",store.Ball);
    return store.Ball;
}

const mapDispatchToProps = (dispatch)=>{
    return{
        increment: ()=>{
            dispatch({type: 'increment'})
        },
        decrement: ()=>{
            dispatch({type: 'decrement'})
        }
    }
}


// export default connect(mapStateToProps,mapDispatchToProps)(Ball);

    // Other way of exporting
const connectedWithProps = connect(mapStateToProps,mapDispatchToProps);
const connectedWithBalls = connectedWithProps(Ball);
export default connectedWithBalls;