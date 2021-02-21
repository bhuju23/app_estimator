import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    nav: {
        textAlign: "center"
    }
}));

const Navbar = () =>{
    
    const classes = useStyles();

return(
    <>
        <AppBar className={classes.nav} position="static">
            <h1>Estimate your App</h1>
        </AppBar>
    </>
);

}

export default Navbar;