const initialState = {
    bats:30,
    value: ""
}

function batReducer(state=initialState,action){
    switch(action.type){
        case  'BUY_BAT':
                return{
                    bats: state.bats + Number(state.value),
                    value: ""
                }
        case  'SELL_BAT':
                if(state.bats - state.value < 0){
                    alert("You Don't hava sufficient Stocks");
                    return{
                        bats:state.bats,
                        value:""
                    }
                }
                else{
                    return{
                        bats: state.bats - Number(state.value),
                        value: ""
                    }
                }
        case  'SET_VALUE':
                return{
                    bats: state.bats,
                    value: action.payload
                }
        default :
                return state;
    }
}

export default batReducer;