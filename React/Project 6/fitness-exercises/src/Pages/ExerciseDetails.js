import Detail from '../Components/Detail';
import ExerciseVideos from '../Components/ExerciseVideos';
import SimilarExercises from '../Components/SimilarExercises';

import {Box} from '@mui/material';
import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {fetchData, exerciseOptions, YoutubeSearchOptions} from '../utils/fetchData';

function Exercises(){
    console.log("Rendered Exercises Component");
    const [exerciseDetails, setExerciseDetails] = useState('');
    const {id} = useParams();   // get the id from url
    
    const[ytVideos,setYtVideos] = useState([]);

    useEffect(()=>{
        const getDataFromAPI = async function(){
            console.log("use effect executed")
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com/exercises';
            // const exerciseDetailsByID = exerciseDbUrl+"/exercise/"+id;
            // or
            const urlById =  `${exerciseDbUrl}/exercise/${id}`
            console.log(urlById);
            let exeDetails = await fetchData(urlById,exerciseOptions);
            console.log(exeDetails);
            setExerciseDetails(exeDetails);


            // youtube videos
            const youtubeSearchAndDwldURL = 'https://rapidapi.com/h0p3rwe/api/youtube-search-and-download';
            const ytURL = `${youtubeSearchAndDwldURL}/search?query=${exeDetails.name}`
            console.log("LINK: ",ytURL );
            const ytData = await fetchData(ytURL,YoutubeSearchOptions);
            console.log(ytData);
            setYtVideos(ytData);
        }
        getDataFromAPI();
    },[id])



    return(
        <Box>
            <Detail exerciseDetails={exerciseDetails}></Detail>
            <ExerciseVideos ytVideos={ytVideos}></ExerciseVideos>
            <SimilarExercises></SimilarExercises>
        </Box>
    )
}
export default Exercises;