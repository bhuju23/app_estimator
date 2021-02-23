import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid, Box, Button } from '@material-ui/core';
import CheckItems from "./CheckItems";
import useCalulate from './useCalculate';


const useStyles = makeStyles((theme) => ({
    content: {
        
    }
}));



const MainBody = () => {

    const[budget, setBudget] = useState(0);

    const {projectSize, 
        
        mobileDevice,
         setMobileDevice, 
         ios, 
         setIos,
          android,
           setAndroid,
           web, 
           setWeb, 
           frontend, 
           setFrontend,
           backend,
            setBackend,
            design, 
            setDesign,
            userAccounts, 
            setUserAccounts,
            facebook, 
            setFacebook,
            email, 
            setEmail,
            google, setGoogle,
            userDashboard, setUserDashboard,
            fileUploading, setFileUploading,
            userProfile, setUserProfile,
            maps, setMaps,
            userSubscriptions, setUserSubscriptions,
           handleProjectSizeChange, calculate} = useCalulate();
   
    
  

    

    const handleMobileChange = () =>{
        
        setMobileDevice(prevState=> !prevState); 
        
    }

    const handleClick = ()=>{
        var c = calculate();
        console.log(c, "test");

        setBudget(c);
    }

    const classes = useStyles();

    

return(
    <>
       <CssBaseline />
        <Container maxWidth="lg" className={classes.content}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <Box display="flex" justifyContent="center" >
                        <p>What is the size of your project</p>
                    </Box>
                </Grid>
                <Grid item xs={4} md={3}>
                    <Box display="flex" justifyContent="center" >
                        <CheckItems onChange={(value)=>handleProjectSizeChange(value, "small")}  label={"Small"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-6.png"} value={projectSize==="small"} />
                    </Box>
                </Grid>
                <Grid item xs={4} md={3}>
                    <Box display="flex" justifyContent="center" >
                        <CheckItems onChange={(value)=>handleProjectSizeChange(value, "medium")} label={"Medium"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-6.png"} value={projectSize==="medium"}/>
                    </Box>
                </Grid>
                <Grid item xs={4} md={3}>
                    <Box display="flex" justifyContent="center" >
                        <CheckItems onChange={(value)=>handleProjectSizeChange(value, "big")} label={"Big"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-6.png"} value={projectSize==="big"}/>
                    </Box>
                </Grid>
           </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <Box display="flex" justifyContent="center" >
                        <p>What is the device of your project</p>
                    </Box>
                </Grid>
                <Grid item xs={3} md={2}>
                    <Box display="flex" justifyContent="center" >
                        <CheckItems onChange={()=>handleMobileChange()} label={"Mobile"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-6.png"} value={mobileDevice} />
                    </Box>1
                </Grid>
                <Grid item xs={3} md={2}>
                    <Box display="flex" justifyContent="center" >
                        <CheckItems onChange={()=> setIos(prevState => !prevState)} label={"ios"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-6.png"} value={ios} disable={!mobileDevice}/>
                    </Box>
                </Grid>
                <Grid item xs={3} md={2}>
                    <Box display="flex" justifyContent="center" >
                        <CheckItems onChange={()=>setAndroid(prevState => !prevState)} label={"Android"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-6.png"} value={android} disable={!mobileDevice}/>
                    </Box>
                </Grid>
                <Grid item xs={3} md={3}>
                    <Box display="flex" justifyContent="center" >
                        <CheckItems onChange={()=>setWeb(prevState => !prevState)} label={"Web"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-6.png"} value={web} />
                    </Box>
                </Grid>
           </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <Box display="flex" justifyContent="center" >
                        <p>What is the Scope of your project</p>
                    </Box>
                </Grid>
                <Grid item xs={4} md={3}>
                    <Box display="flex" justifyContent="center" >
                        <CheckItems onChange={()=>setFrontend(prevState => !prevState)} label={"FrontEnd"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-6.png"} value={frontend} />
                    </Box>
                </Grid>
                <Grid item xs={4} md={3}>
                    <Box display="flex" justifyContent="center" >
                        <CheckItems onChange={()=> setBackend(prevState => !prevState)} label={"BackEnd"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-6.png"} value={backend} />
                    </Box>
                </Grid>
                <Grid item xs={4} md={3}>
                    <Box display="flex" justifyContent="center" >
                        <CheckItems onChange={()=>setDesign(prevState => !prevState)} label={"Design"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-6.png"} value={design} />
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <Box display="flex" justifyContent="center" >
                        <p>What are the features user can choose in your project?</p>
                    </Box>
                </Grid>
                <Grid item xs={4} md={3}>
                    <Box display="flex" justifyContent="center" >
                        <CheckItems onChange={()=>setUserAccounts(prevState => !prevState)} label={"User Accounts"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-6.png"} value={userAccounts} />
                    </Box>
                </Grid>
                <Grid item xs={4} md={2}>
                    <Box display="flex" justifyContent="center" >
                        <CheckItems onChange={()=> setEmail(prevState => !prevState)} label={"Email"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-6.png"} value={email} disable={!userAccounts} />
                    </Box>
                </Grid>
                <Grid item xs={4} md={2}>
                    <Box display="flex" justifyContent="center" >
                        <CheckItems onChange={()=>setFacebook(prevState => !prevState)} label={"Facebook"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-6.png"} value={facebook} disable={!userAccounts} />
                    </Box>
                </Grid>
                <Grid item xs={4} md={2}>
                    <Box display="flex" justifyContent="center" >
                        <CheckItems onChange={()=>setGoogle(prevState => !prevState)} label={"Google"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-6.png"} value={google} disable={!userAccounts} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                </Grid>
                <Grid item xs={4} md={3}>
                    <Box display="flex" justifyContent="center" >
                        <CheckItems onChange={()=>setUserDashboard(prevState => !prevState)} label={"User Dashboard"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-6.png"} value={userDashboard} />
                    </Box>
                </Grid>
                <Grid item xs={4} md={3}>
                    <Box display="flex" justifyContent="center" >
                        <CheckItems onChange={()=> setFileUploading(prevState => !prevState)} label={"File Uploading"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-6.png"} value={fileUploading} />
                    </Box>
                </Grid>
                <Grid item xs={4} md={3}>
                    <Box display="flex" justifyContent="center" >
                        <CheckItems onChange={()=>setUserProfile(prevState => !prevState)} label={"User Profile"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-6.png"} value={userProfile} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                </Grid>
                <Grid item xs={4} md={3}>
                    <Box display="flex" justifyContent="center" >
                        <CheckItems onChange={()=>setMaps(prevState => !prevState)} label={"Maps"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-6.png"} value={maps} />
                    </Box>
                </Grid>
                <Grid item xs={4} md={3}>
                    <Box display="flex" justifyContent="center" >
                        <CheckItems onChange={()=> setUserSubscriptions(prevState => !prevState)} label={"User Subscriptions"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-6.png"} value={userSubscriptions} />
                    </Box>
                </Grid>
            </Grid>
            <Button onClick={handleClick}>Calculate</Button>
            <p>Rs.{budget}</p>
        </Container>
    </>
);  

}

export default MainBody;