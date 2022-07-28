import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material'

import Home from './Pages/Home'
import ExerciseDetails from './Pages/ExerciseDetails'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'

function App(){
    return(
        <Box width="400px" sx={ {width: {xl: '1488px'}} } >
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/exercise/:id' element={<ExerciseDetails/>} />
        </Routes>
        <Footer/>
        </Box>
    )
}

export default App;