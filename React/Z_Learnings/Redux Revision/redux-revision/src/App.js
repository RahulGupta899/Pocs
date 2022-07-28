
import Bat from './Combined/Components/Bat'
import Ball from './Combined/Components/Ball'
import Users from './Combined/Components/Users'
import {Provider} from 'react-redux'
import Store from './Combined/Store'


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