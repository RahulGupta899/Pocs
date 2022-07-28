import React from 'react'
import {connect} from 'react-redux'
import userMiddleware from '../Redux/Reducers/middleware/userMiddleware'



function Users(props){
    
    console.log(props)
    React.useEffect(function(){
        props.user_middleWare();
    },[])


    return(
        <div>
            <h1>Users</h1>
            {   
                (props.loader==true)
                    ? <h2>Loading...</h2>
                    : <h5>{props.users} </h5>
            }
        </div>
    )
}


const mapStatesToProps = function(state){
    return state.Users;
}

const mapDispatchToProps = function(dispatch){
    return{
        user_middleWare: ()=>{dispatch(userMiddleware)}
    }
}

export default connect(mapStatesToProps,mapDispatchToProps)(Users);