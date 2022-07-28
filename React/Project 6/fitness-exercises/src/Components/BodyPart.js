import Icon from '../assets/icons/gym.png'
import {Stack,Typography} from '@mui/material';

function BodyPart({item, exercisesList, setExercisesList, selectedBodyPart,setSelectedBodyPart}){
    return(
        <Stack
            type="button"
            className='bodyPart-card'
            alignItems= 'center'
            justifyContent='center'
            sx={
                {  
                    borderTop: (selectedBodyPart == item)? '4px solid #ff2625' : '' ,
                    backgroundColor:'#FFF',
                    borderBottomLeftRadius: '20px',
                    height:'280px',
                    width:'270px',
                    cursor:'pointer',
                    gap:'47px'
                }
                
            }
            onClick={()=>{
                setSelectedBodyPart(item);
                window.scrollTo({top:1800, left: 100, behaviour:'smooth'}) // window will scroll to the search Reasults Automatically
            }}
        >
            <img src={Icon} alt="logo" style={{height:'40px', width:'40px'}}/>
            <Typography
                fontSize='24px' fontWeight='bold' color='#3A1212'
                textTransform='capitalize'
            >{item}</Typography>
        </Stack>
    )
}

export default BodyPart;