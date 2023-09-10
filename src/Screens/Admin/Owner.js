import { Box, Grid, Paper } from "@mui/material";
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
    // eslint-disable-next-line
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
       <center>
       <Box sx={{ flexGrow: 1, }} bgcolor={"black"} height={"300px"} width={"800px"}>
        
        <h2 style={{color:"red",fontStyle:"italic"}}>Your Gym Information</h2>
       <Grid container spacing={3} marginLeft={"100px"} >
         <Grid item xs={12} md={8}>
          <h4>Name of gym:</h4>
           <Item><h4>{gym.gymName}</h4></Item>
         </Grid>
         <br/>
         
         <Grid item xs={6} md={8}>
         <h4>Location of gym:</h4>
           <Item><h4>{gym.location}</h4></Item>
         </Grid>
       </Grid>
       
     </Box>
     </center>
       //=================
       
      }
        
        </>
    )
    
    }
    export default Owner;