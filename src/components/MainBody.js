import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid, Box, Button } from '@material-ui/core';
import CheckItems from "./CheckItems";
import useCalulate from './useCalculate';
import TextInput from "./TextInput";


const useStyles = makeStyles((theme) => ({
    questions: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
        fontSize: "20px"  
    },

    container: {
        marginTop: "30px"
    },
   
    form: {
        marginLeft: "30px"
    }


}));



const MainBody = () => {

    const[budget, setBudget] = useState(0);
    const[msg, setMsg] = useState('');
   
   

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
           handleProjectSizeChange, calculate ,
           formEmail,
           fname, lname, phone, description,
           setFormEmail,
           setFname, setLname, setPhone, setDescription} = useCalulate();
   

           const handleUserAccounts = () =>{
                if(userAccounts){
                    setUserAccounts(false);
                    setEmail(false);
                    setFacebook(false);
                    setGoogle(false);
                }

                else{
                    setUserAccounts(true);
                }

           }

    const handleMobileChange = () =>{
        
        if(mobileDevice){
            setMobileDevice(false); 
            setIos(false);
            setAndroid(false); 
    
        }
        else{
            setMobileDevice(true);
            
        }
         
        
    }

    console.log(mobileDevice, "m");
        console.log(ios, 'i');  

    
    

    const handleClick = ()=>{
        var c = calculate();
        setBudget(c);

        setMsg(`Dear ${fname}, total budget for your project is ${c}`);
    }

    const classes = useStyles();

    

return(
    <>
       <CssBaseline />
        <Container maxWidth="lg" >
            <Grid container spacing={3} className={classes.container}>
                <Grid item xs={12} md={3}>
                    <Box display="flex" justifyContent="center" className={classes.questions}>
                        <p>What is the size of your project?</p>
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
            <Grid container spacing={3} className={classes.container}>
                <Grid item xs={12} md={3}>
                    <Box className={classes.questions}>
                        <p>What is the device of your project?</p>
                    </Box>
                </Grid>
                <Grid item xs={3} md={2}>
                    <Box display="flex" justifyContent="center" >
                        <CheckItems onChange={()=>handleMobileChange()} label={"Mobile"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-4.png"} value={mobileDevice} />
                    </Box>
                </Grid>
                <Grid item xs={3} md={2}>
                    <Box display="flex" justifyContent="center" >
                        <CheckItems onChange={()=> setIos(prevState => !prevState)} label={"ios"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-4.png"} value={ios} disable={!mobileDevice}/>
                    </Box>
                </Grid>
                <Grid item xs={3} md={2}>
                    <Box display="flex" justifyContent="center" >
                        <CheckItems onChange={()=>setAndroid(prevState => !prevState)} label={"Android"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-4.png"} value={android} disable={!mobileDevice}/>
                    </Box>
                </Grid>
                <Grid item xs={3} md={3}>
                    <Box display="flex" justifyContent="center" >
                        <CheckItems onChange={()=>setWeb(prevState => !prevState)} label={"Web"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-3.png"} value={web} />
                    </Box>
                </Grid>
           </Grid>
            <Grid container spacing={3} className={classes.container}>
                <Grid item xs={12} md={3}>
                    <Box className={classes.questions} >
                        <p>What is the Scope of your project</p>
                    </Box>
                </Grid>
                <Grid item xs={4} md={3}>
                    <Box display="flex" justifyContent="center" >
                        <CheckItems onChange={()=>setFrontend(prevState => !prevState)} label={"FrontEnd"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-7.png"} value={frontend} />
                    </Box>
                </Grid>
                <Grid item xs={4} md={3}>
                    <Box display="flex" justifyContent="center" >
                        <CheckItems onChange={()=> setBackend(prevState => !prevState)} label={"BackEnd"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-8.png"} value={backend} />
                    </Box>
                </Grid>
                <Grid item xs={4} md={3}>
                    <Box display="flex" justifyContent="center" >
                        <CheckItems onChange={()=>setDesign(prevState => !prevState)} label={"Design"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-9.png"} value={design} />
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={3} className={classes.container}>
                <Grid item xs={12} md={3}>
                    <Box className={classes.questions}>
                        <p>What are the features user can choose in your project?</p>
                    </Box>
                </Grid>
                <Grid item xs={4} md={3}>
                    <Box display="flex" justifyContent="center" >
                        <CheckItems onChange={() =>handleUserAccounts()} label={"User Accounts"} src={"https://dev.w3dev.in/wp-content/uploads/2018/10/duotone-6.png"} value={userAccounts} />
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
            <Box container spacing={3} className={classes.container} display="flex" justifyContent="center">
                    <Grid item xs={12} md={3}>
                        <Box className={classes.questions} >
                            <p>Fill the form and get an estimate</p>
                        </Box>
                    </Grid>
                    <form onsubmit={handleClick}> 
                    <Grid container item spacing={2} xs={12} md={12} className={classes.form} >
                        
                        <Grid item md ={12}>
                            <TextInput label={"Email"} required={true} onChange={(e)=>setFormEmail(e.target.value)} />
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <TextInput label={"Frist Name"} required={true} onChange={(e)=>setFname(e.target.value)}/>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <TextInput label={"Last Name"} required={true} onChange={(e)=>setLname(e.target.value)}/>
                        </Grid>
                   
                        <Grid item xs={12} md={12}>
                            <TextInput label={"Phone Number"} required={true} onChange={(e)=>setPhone(e.target.value)}/>
                        </Grid>
                
                        <Grid item xs={12} md={12}>
                            <TextInput label={"Short Description of Project"} required={false} rows={3} onChange={(e)=>setDescription(e.target.value)}/>
                        </Grid>
                      
                    </Grid>
                    
                  </form>
                
            </Box>

            <Box className={classes.container} display="flex" justifyContent="center">
                <Button onClick={handleClick} color='primary' variant="contained">Calculate</Button>
            </Box>
            <Box className={classes.container} display="flex" justifyContent="center">
                <p>{msg}</p>
            </Box>
            
        </Container>
    </>
);  

}

export default MainBody;