import {connect} from 'react-redux';
function Bat(props){
    console.log(props);
    return(
        <>
            <h1>Bat App</h1>
            <h2>Number of Bats: {props.bats} </h2>
            <input type="number" value={props.inputValue} onChange={props.set_Input_Value} />
            <button onClick={props.buy_bat} >Buy</button>
            <button onClick={props.sell_bat} >Sell</button>
        </>
    )
}

const mapStatesToPropsOfBat = function(store){
    return store;
}

const mapDispatchToPropsOfBats = function(dispatch){
    return{
        buy_bat:            ()=>{ dispatch({type:'buy_bat'}) },
        sell_bat:           ()=>{ dispatch({type:'sell_bat'})},
        set_Input_Value:    (e)=>{ dispatch({type:'set_Input_Value',
                                             payload:e.target.value})}
    }
}

export default connect(mapStatesToPropsOfBat, mapDispatchToPropsOfBats )(Bat);