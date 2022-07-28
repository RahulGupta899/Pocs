import Bat from './Component/bat';
import {Provider} from 'react-redux';
import Store from './Store';

function App(){
    return(
        <Provider store={Store}>
            <Bat/>
        </Provider>
    )
}
export default App;