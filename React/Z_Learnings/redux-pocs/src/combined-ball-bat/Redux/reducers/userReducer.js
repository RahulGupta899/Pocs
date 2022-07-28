let initialState={
    users:"",
    loader:true
}

function userReducer(state=initialState,action){
    switch(action.type){
        case 'users_received':            
            return {
                users: action.payload,
                loader:false
            }
        default:
            return state;
    }
}

export default userReducer;