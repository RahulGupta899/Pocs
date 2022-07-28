
import {Provider} from 'react-redux'
import store from './store'
import Ball from './Components/Ball.js'

function App(){
    return(
        <>
            <Provider store={store}>
                <Ball/>
            </Provider>
        </>
    )
}

export default App;