import React, {useEffect, useState} from 'react';
import {Box,Button,Stack,TextField,Typography} from '@mui/material';

import {exerciseOptions,fetchData} from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';



function SearchExercises({selectedBodyPart, exercisesList, setSelectedBodyPart, searchText,setSearchText,setExercisesList,bodyParts,setBodyParts}){

    useEffect(function(){
        (async function(){
            let data = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
            setBodyParts(data);
        })();
    },[])

    const handleSearchInput = function(e){
        setSearchText(e.target.value.toLowerCase());
    }

    const handleSearch = async function(){
        if(searchText){
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);

            const filteredExercises = exercisesData.filter((exercise)=>{
                    let bodyPart = exercise.bodyPart.toLowerCase();
                    let equipment = exercise.equipment.toLowerCase();
                    let name = exercise.name.toLowerCase();
                    let target = exercise.target.toLowerCase();
                return (     
                    bodyPart.includes(searchText) || equipment.includes(searchText) ||
                    name.includes(searchText) || target.includes(searchText)
                )
            })
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });  // window will scroll to the search Reasults Automatically
            setExercisesList(filteredExercises);
            setSearchText("");     
        }
    }


    return(
        <Stack 
            alignItems="center" mt="37px"
            justifyContent="center" p="20px"
        >
            <Typography 
                fontWeight={70}
                sx={{
                    fontSize: {lg:'44px', xs:'30px'}
                }}
                mb="50px" textAlign="center"
            >
            Awesome Exercises you <br/>
            Should Know
            </Typography>
            
            <Box position='relative' mb='72px'>
                <TextField
                    type="text"
                    value={searchText}
                    onChange={handleSearchInput}
                    placeholder = "Search Exercises..."
                    height="76px"
                    sx={{
                        input: {fontWeight: '700',
                                border:'none', 
                                borderRadius: '4px',
                                
                                },
                        width: {lg: '800px', xs:'350px'},
                        backgroundColor: '#fff',
                        borderRadius: '40px'
                    }}
                />
                <Button
                    onClick={handleSearch}
                    sx={{
                        bgcolor: '#FF2625',
                        color: '#fff',
                        textTransform:'none',
                        width: {lg: '175px', xs: '80px'},
                        fontSize: {lg:'20px', xs:'14px'},
                        height:'56px',
                        position:'absolute',
                        right:0                        
                    }}
                    className="search-btn"
                    
                >
                Search
                </Button>
            </Box>

            <Box sx={{position:'relative', width:'100%', p:'20px'}}>
                    <HorizontalScrollBar data={bodyParts} exercisesList = {exercisesList} setExercisesList={setExercisesList} selectedBodyPart={selectedBodyPart} setSelectedBodyPart={setSelectedBodyPart} />
            </Box>

        </Stack>
    )
}
export default SearchExercises;