import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    
}));

const CheckItems = (props) =>{
    
    const classes = useStyles();


    const handleClick = () => {
        
        if(props.disable){

        }
        else{
        props.onChange(!props.value);
        }
    }

  console.log(props.value);

return(
    <>
       <Box onClick={handleClick} display="flex" flexDirection="column">
        <Checkbox
        checked={props.value}
        color="primary"
        disabled = {props.disable}
        // value = {props.value}
        // onChange ={()=>{}}
        />
        <img src = {props.src}></img>   
        <Typography align="center">
            {props.label}
        </Typography>
       </Box>
    </>
);

}

export default CheckItems;