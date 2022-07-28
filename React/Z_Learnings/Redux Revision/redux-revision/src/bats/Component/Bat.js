import {connect} from 'react-redux';

function Bat(props){
    console.log(props)
    return(
        <div>
            <h1>Bat App</h1>
            <h2>Number of Bats: {props.bats}</h2>
            <input type='number' value={props.value} onChange={props.set_value} />
            <button onClick={props.buy_bat}>Buy</button>
            <button onClick={props.sell_bat}>Sell</button>
        </div>
    )
}

const mapStatesToProps = (state)=>{
    return state;
}

const mapDispatchToProps = (dispatch)=>{
    return{
        buy_bat: ()=>{dispatch({type:'BUY_BAT'})},
        sell_bat: ()=>{dispatch({type:'SELL_BAT'})},
        set_value: (e)=>{dispatch({type: 'SET_VALUE',
                                  payload: e.target.value })}
    }
}

export default connect(mapStatesToProps,mapDispatchToProps)(Bat);