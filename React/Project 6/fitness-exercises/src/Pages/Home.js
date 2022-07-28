import {Box} from '@mui/material';
import {useState} from 'react';
import HeroBanner from '../Components/HeroBanner'
import SearchExercises from '../Components/SearchExercises'
import Exercises from '../Components/Exercises'



function Home(){
    console.log("Re-rendered Home");

    const [searchText, setSearchText] = useState("");
    const [bodyParts,setBodyParts] = useState([]); // categories
    
    const [exercisesList, setExercisesList] = useState([]);
    const [selectedBodyPart,setSelectedBodyPart] = useState('back');
    console.log(exercisesList);
    
    console.log(exercisesList);
    console.log(bodyParts);

    return(
        <Box>
            <HeroBanner/>
            <SearchExercises 
                searchText = {searchText} 
                setSearchText={setSearchText}
                exercisesList = {exercisesList}
                setExercisesList={setExercisesList}
                bodyParts={bodyParts}
                setBodyParts={setBodyParts}

                selectedBodyPart={selectedBodyPart}
                setSelectedBodyPart={setSelectedBodyPart}
            />
            <Exercises
                exercisesList={exercisesList}
                bodyParts = {bodyParts}
                setExercisesList={setExercisesList}
                selectedBodyPart={selectedBodyPart}
            />
        </Box>
    ) 
}
export default Home;