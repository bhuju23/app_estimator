import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid, Box } from '@material-ui/core';
import CheckItems from "./CheckItems";


const useStyles = makeStyles((theme) => ({
    content: {
        
    }
}));

const MainBody = () => {

    const [projectSize, setProjectSize] = useState('');
    const [mobileDevice, setMobileDevice] = useState(false);
    const [iosChange, setIosChange] = useState(false);
    const [androidChange, setAndroidChange] = useState(false);
    const [webChange, setWebChange] = useState(false);
    const [frontend, setFrontend] = useState(false);
    const [backend, setBackend] = useState(false);
    const [design, setDesign] = useState(false);
    const [userAccounts, setUserAccounts] = useState(false);
    const [facebook, setFacebook] = useState(false);
    const [email, setEmail] = useState(false);
    const [google, setGoogle] = useState(false);
    const [userDashboard, setUserDashboard] = useState(false);
    const [fileUploading, setFileUploading] = useState(false);
    const [userProfile, setUserProfile] = useState(false);
    const [maps, setMaps] = useState(false);
    const [userSubscriptions, setUserSubscriptions] = useState(false);

    console.log(iosChange, "check");
    

    const handleProjectSizeChange = (value, size)=>{
        setProjectSize(value ? size : null);
    }

    const handleMobileChange = () =>{
        
        setMobileDevice(prevState=> !prevState); 
        
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
                        <CheckItems onChange={()=> setIosChange(prevState => !prevState)} label={"ios"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-6.png"} value={iosChange} disable={!mobileDevice}/>
                    </Box>
                </Grid>
                <Grid item xs={3} md={2}>
                    <Box display="flex" justifyContent="center" >
                        <CheckItems onChange={()=>setAndroidChange(prevState => !prevState)} label={"Android"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-6.png"} value={androidChange} disable={!mobileDevice}/>
                    </Box>
                </Grid>
                <Grid item xs={3} md={3}>
                    <Box display="flex" justifyContent="center" >
                        <CheckItems onChange={()=>setWebChange(prevState => !prevState)} label={"Web"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-6.png"} value={webChange} />
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
                        <CheckItems onChange={()=>setUserDashboard(prevState => !prevState)} label={"FrontEnd"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-6.png"} value={userDashboard} />
                    </Box>
                </Grid>
                <Grid item xs={4} md={3}>
                    <Box display="flex" justifyContent="center" >
                        <CheckItems onChange={()=> setFileUploading(prevState => !prevState)} label={"BackEnd"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-6.png"} value={fileUploading} />
                    </Box>
                </Grid>
                <Grid item xs={4} md={3}>
                    <Box display="flex" justifyContent="center" >
                        <CheckItems onChange={()=>setUserProfile(prevState => !prevState)} label={"Design"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-6.png"} value={userProfile} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                </Grid>
                <Grid item xs={4} md={3}>
                    <Box display="flex" justifyContent="center" >
                        <CheckItems onChange={()=>setMaps(prevState => !prevState)} label={"FrontEnd"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-6.png"} value={maps} />
                    </Box>
                </Grid>
                <Grid item xs={4} md={3}>
                    <Box display="flex" justifyContent="center" >
                        <CheckItems onChange={()=> setUserSubscriptions(prevState => !prevState)} label={"BackEnd"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-6.png"} value={userSubscriptions} />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </>
);

}

export default MainBody;