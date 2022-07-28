let initialState = {
    balls:10
}

// state=initialState means when state not passed, initial state will be passed
function ballReducer(state=initialState,action){
    switch(action.type){
        case 'increment':
                return {balls: state.balls + 1};
                break;
        case 'decrement':
                return {balls: state.balls - 1};
                break;
        default:
                return state;
    }
}

export default ballReducer;