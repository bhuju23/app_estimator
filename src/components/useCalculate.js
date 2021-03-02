import {useState} from 'react';

const useCalculate = ()=>{

    const [projectSize, setProjectSize] = useState('');
    const [mobileDevice, setMobileDevice] = useState(false);
    const [ios, setIos] = useState(false);
    const [android, setAndroid] = useState(false);
    const [web, setWeb] = useState(false);
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

    const[formEmail, setFormEmail] = useState('');
    const[fname, setFname] = useState("");
    const[lname, setLname] = useState("");
    const[phone, setPhone] = useState('');
    const[description, setDescription] = useState("");

    const handleProjectSizeChange = (value, size)=>{
        setProjectSize(value ? size : null);
        
    }

    const calculate = () =>{
        let budget = 0;
        if(projectSize === 'small'){
            budget += 1000;
        }
        else if(projectSize === 'medium'){
            budget += 1500;
        }
        else if(projectSize === 'big'){
            budget += 2000;
        }
        if(ios){
            budget += 1000;
        }
        if(android){
            budget += 1000;
        }
        if(web){
            budget += 2000;
        }
        if(frontend){
            budget += 3000;
        }
        if(backend){
            budget += 3000;
        }
        if(design){
            budget += 2000;
        }
        if(facebook){
            budget += 2000;
        }
        if(email){
            budget += 2000;
        }
        if(google){
            budget += 2000;
        }
        if(userDashboard){
            budget += 2000;
        }
        if(fileUploading){
            budget += 2000;
        }
        if(userProfile){
            budget += 2000;
        }
        if(maps){
            budget += 2000;
        }
        if(userSubscriptions){
            budget += 2000;
        }

        return budget;
        
        
    }
    

    return {projectSize,  
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
           handleProjectSizeChange,
            calculate,
            formEmail,
            fname, lname, phone, description,
            setFormEmail,
            setFname, setLname, setPhone, setDescription
            
        }
}

export default useCalculate;