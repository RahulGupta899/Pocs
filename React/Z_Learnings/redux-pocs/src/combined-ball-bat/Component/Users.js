// Purpose is to learn how to use : How to UPDATE the STATE when Async is used
import React from 'react';
import {connect} from 'react-redux'
import userMiddleware from '../Redux/reducers/Middleware/UserMiddleware';

function Users(props){
    console.log("Users",props)
    React.useEffect(function(){
        props.fetchUsersFromAPI();
    },[])


    return(
        <>
            <h1>Users</h1>
            {
                (props.loader==true)
                    ? <h2>Loading...</h2>
                    : <div>{props.users}</div>
            }
        </>
    )
}


const mapStatesToPropsOfUsers = function(store){
    return store.User;
}

const mapDispatchToPropsOfUsers = function(dispatch){
    return {
        fetchUsersFromAPI: ()=>{dispatch(userMiddleware)} 
    }
}



export default connect(mapStatesToPropsOfUsers, mapDispatchToPropsOfUsers)(Users);