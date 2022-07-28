const initialState = {
    balls:60
}

function ballReducer(state=initialState,action){
    switch(action.type){
        case 'INCREASE_BALLS':
                return{
                    balls:state.balls+1
                }

        case 'DECREASE_BALLS':
                return{
                    balls: state.balls-1
                }

        default :
            return state;
    }
}
export default ballReducer;