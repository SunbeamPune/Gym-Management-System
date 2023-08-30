import { Box, Grid, Paper, TextField } from "@mui/material";
import HorizontalLinearStepper from "./HorizontalLinearStepper";
import PrimarySearchAppBar from "./OwnerHome";
import { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';


function Owner(){

    const[gym,setgym]=useState([]);
  useEffect( ()=>{
    async function getter(){
      try{
    const data=await fetch(`http://localhost:8080/owner/getgym/${sessionStorage.getItem("id")}`,{headers:{'Authorization':`Bearer ${sessionStorage.getItem('jwt')}`,'Content-Type':'application/json'}});
    const res=await data.json();
    setgym(res);
    console.log(gym);
      }
      catch(er){alert("please complete registration!!!")}
    }
    getter();
  },[]) 

  

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
  }));

    return(
        <>
      <PrimarySearchAppBar/>
       {!gym.gymName && <HorizontalLinearStepper/>}
        
       {gym.gymName && 
       //=================
       
       <Box sx={{ flexGrow: 1, }} bgcolor={"black"} height={"300px"}>
        <center>
        <h2 style={{color:"red",fontStyle:"italic"}}>Your Gym Information</h2>
       <Grid container spacing={3} marginLeft={"200px"} >
         <Grid item xs={12} md={8}>
          <h4>Name of gym:</h4>
           <Item>{gym.gymName}</Item>
         </Grid>
         <br/>
         
         <Grid item xs={6} md={8}>
         <h4>Location of gym:</h4>
           <Item>{gym.location}</Item>
         </Grid>
       </Grid>
       </center>
     </Box>
       //=================
       
      }
        
        </>
    )
    
    }
    export default Owner;