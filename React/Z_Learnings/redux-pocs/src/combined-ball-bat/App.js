import Bat   from './Component/Bat';
import Ball  from './Component/Ball'
import Users from './Component/Users';

import {Provider} from 'react-redux';
import Store from './Store';

function App(){
    return(
        <Provider store={Store}>
            <Ball/>
            <Bat/>
            <Users/>
        </Provider>
    )
}
export default App;