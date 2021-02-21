import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import MainBody from './components/MainBody';



const App = () => {
return(
        <div className="App">
        <CssBaseline />

             <Navbar />
             <MainBody />
         </div>
);        
} 

export default App;