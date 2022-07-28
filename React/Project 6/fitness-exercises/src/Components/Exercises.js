import React, {useEffect, useState} from 'react';
import Pagination from '@mui/material/Pagination';
import {Box,Stack,Typography} from '@mui/material';
import ExerciseCard from './ExerciseCard';

import {fetchData,exerciseOptions} from '../utils/fetchData'


function Exercises({exercisesList,bodyParts,setExercisesList, selectedBodyPart}){

    const [currentPage,setCurrentPage] = useState(1)
    const exercisesPerPage = 9;

    const si = (currentPage-1)*exercisesPerPage;
    const ei = si+exercisesPerPage;

    const exercisesListOnPage = exercisesList.slice(si,ei);


    const handlePagination = function(e,value){ // by default we get e and value through Pagination
        setCurrentPage(value);
        window.scrollTo({top:1800, behaviour:'smooth'})
    }

    useEffect(()=>{
        const fetchExercisesData = async()=>{
            let exercisesList = [];
            
            exercisesList = await fetchData('https://exercisedb.p.rapidapi.com/exercises' ,exerciseOptions);
            if(selectedBodyPart !== 'all'){
               exercisesList = exercisesList.filter((ex)=>ex.bodyPart==selectedBodyPart)
                // console.log("Selected all body Parts");
                // console.log(exercisesList);
            }
            // else{
            //     console.log("USEEFFECT:"+selectedBodyPart)
            // }
            console.log(exercisesList);
            setExercisesList(exercisesList);
        }
        fetchExercisesData();
    },[selectedBodyPart])

    return(
        <Box id="exercises"
            sx={{mt: {lg:'110px'}}}
            mt='50px'
            p='20px'
        >
            <Typography variant="h3" mb='46px'>
            Showing Results
            </Typography>

            <Stack direction='row' sx={{gap: {lg:'110px', xs: '50px'}}} flexWrap='wrap' justifyContent='center'>
                {exercisesListOnPage.map((exercise,idx)=>{
                    return( 
                        <ExerciseCard key={idx} exercise={exercise}/>

                                     
                    )
                })}
            </Stack>

            <Stack mt='100px' alignItems='center'> 
                {exercisesList.length > 9 && (
                    <Pagination
                        color='standard'
                        shape='rounded'
                        defaultPage={1}
                        count={Math.ceil(exercisesList.length/exercisesPerPage)}
                        onChange={handlePagination}
                        page={currentPage}
                        size='large'
                    />

                )}
            </Stack>

        </Box>
    )
}
export default Exercises;