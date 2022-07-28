import React from 'react'
import {Route,Redirect,Switch} from 'react-router-dom'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Feed from './Components/Feed'
import Profile from './Components/Profile'
import PageNotFound from './Components/PageNotFound'
import AuthContextProvider from './Context/AuthContext'
import { AuthContext } from './Context/AuthContext'

function App(){

    return(
       <AuthContextProvider>
            <Switch>

                <RedirectToFeed path="/login" comp={Login}>
                </RedirectToFeed>

                <RedirectToFeed path='/signup' comp={SignUp}>
                </RedirectToFeed>

                
                <PrivateRoute path="/feed" comp={Feed}>
                </PrivateRoute>

                <PrivateRoute path="/profile" comp={Profile} >
                </PrivateRoute>

                <Redirect from='/' to='/login'></Redirect>

                <Route>
                    <PageNotFound/>
                </Route>

            </Switch>
        </AuthContextProvider>
        
    )
}



function PrivateRoute(props){
    let Component = props.comp;
    let currUser = React.useContext(AuthContext);
    currUser = currUser.cUser;

    return(
        <Route 
            {...props}
            render = {
                (props) => {
                    // ALL LOGIC
                    return (currUser == null) 
                                ? <Redirect {...props} to='/login'></Redirect>
                                : <Component {...props} ></Component>
                    
                }
            }
        >

        </Route>
    )
}


// If user already logged in then for routes '/login' and '/signup' Redirect to FEED PAGE
function RedirectToFeed(props){
    let Component = props.comp;
    let currUser = React.useContext(AuthContext);
    currUser = currUser.cUser;

    return(
        <Route
            {...props}
            render = {
                (props)=>{
                    return (currUser==null)
                            ? <Component {...props}></Component>
                            : <Redirect  {...props} to="/feed"></Redirect>
                }
            }
        >

        </Route>
    )
}







export default App;