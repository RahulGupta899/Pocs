import {useContext} from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import {Box, Typography} from '@mui/material'
import BodyPart from './BodyPart'

import LeftArrowIcon from '../assets/icons/left-arrow.png';
import RightArrowIcon from '../assets/icons/right-arrow.png';

const LeftArrow = () => {

    const { scrollPrev } = useContext(VisibilityContext);
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };


const RightArrow = () => {

  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};






const HorizontalScrollBar = ({data, exercisesList, setExercisesList, selectedBodyPart,setSelectedBodyPart}) =>{
    let category= ['all', ...data];
    return(
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {category.map((item,idx)=>{
            return (<Box key={idx} m="0 40px" >
                <BodyPart item={item} exercisesList = {exercisesList} setExercisesList={setExercisesList} selectedBodyPart={selectedBodyPart} setSelectedBodyPart={setSelectedBodyPart}/>
            </Box> )
        })}
        </ScrollMenu>
    )
}
export default HorizontalScrollBar;
