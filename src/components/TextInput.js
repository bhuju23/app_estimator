import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextInput = (props)=>{
return(
    <>
        <TextField 
        id="outlined-basic" 
        label={props.label}
         variant="outlined"
          fullWidth 
          multiline
           rows={props.rows}
           onChange={props.onChange}
           required={props.required}
           />
    </>
);
}


export default TextInput;