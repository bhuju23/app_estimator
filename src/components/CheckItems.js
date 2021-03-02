import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    image:{
        height: "60px",
        marginBottom: "20px"
    },

    box: {
        height: "200px",
        width: "200px",
        border: "1px solid #000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    text:{
        marginTop: "10px",
        fontSize: "20px"

    },
    checkbox: {
        top: "-15px",
        right: "-65px"
    }
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

  

return(
    <>
       <Box className={classes.box} onClick={handleClick} flexDirection="column">
        <Checkbox
        checked={props.value}
        color="primary"
        disabled = {props.disable}
        className={classes.checkbox}
        />
        <img className ={classes.image} src = {props.src}></img>   
        <Typography className={classes.text} align="center">
            {props.label}
        </Typography>
       </Box>
    </>
);

}

export default CheckItems;