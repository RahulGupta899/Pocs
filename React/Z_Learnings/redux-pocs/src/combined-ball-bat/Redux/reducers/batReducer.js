let initialState = {
    bats:10,
    inputValue:""
}

function batReducer(state=initialState,action){
    switch(action.type){
        case 'buy_bat':
            console.log("you are buying Bats...");
            return{
                bats: state.bats + state.inputValue,
                inputValue: ""
            }
            break;

        case 'sell_bat':
            console.log("you are selling Bats...");
            if(state.bats - state.inputValue < 0){
                alert("Quantity not available in the inventory...");
                return state;
            }
            else
                return{
                    bats: state.bats - state.inputValue,
                    inputValue: ""
                }
            break;
        case 'set_Input_Value':
            console.log("Input is Changed...");
            return{
                bats: state.bats,
                inputValue: Number(action.payload)
            }
            
        default:
            console.log("Empty Operation...")
            return state;
    }
}

export default batReducer;