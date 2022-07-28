import {Route,Switch,Redirect} from 'react-router-dom'
import HomePage from './Routes/HomePage';
import Login from './Routes/Login';
import PageNotFound from './Routes/PageNotFound';
import NewMovies from './Routes/NewMovie';
import Navbar from './components/Navbar';

function App(){
    console.log(process.env.REACT_APP_API_KEY);
    console.log(process.env.REACT_APP_HOME_KEY);
    return(
        <>
            <Navbar/>
            
            <Switch>
                <Route path="/home">
                    <HomePage/>
                </Route>

                <Route path="/login">
                    <Login/>
                </Route>

                <Route path='/new'>
                    <NewMovies/>
                </Route>

                <Redirect from='/' exact to='/home'>

                </Redirect>

                <Route>
                    <PageNotFound/>
                </Route>

            </Switch>
        </>
    )
}

export default App;