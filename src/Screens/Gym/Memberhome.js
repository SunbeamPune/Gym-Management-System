import { Box, Grid, Paper } from "@mui/material";

import Navbarformember from "./Navbarformember";
import { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Stepperformember from "./Stepperformember";


function Memberhome(){

    const[gym,setgym]=useState([]);
    const[gymclass,setgymclass]=useState([]);
  useEffect( ()=>{
    async function getter(){
      try{
    const data=await fetch(`http://localhost:8080/member/getmygym/${sessionStorage.getItem("id")}`,{headers:{'Authorization':`Bearer ${sessionStorage.getItem('jwt')}`,'Content-Type':'application/json'}});
    const res=await data.json();
    setgym(res);
    //console.log(gym);
      }
      catch(er){alert("please complete registration!!!")}
    }
    getter();
    getter2();
    // eslint-disable-next-line
  },[]) 

  async function getter2(){
    try{
  const data=await fetch(`http://localhost:8080/member/getmygymclass/${sessionStorage.getItem("id")}`,{headers:{'Authorization':`Bearer ${sessionStorage.getItem('jwt')}`,'Content-Type':'application/json'}});
  const res=await data.json();
  setgymclass(res);
  console.log(gymclass);
    }
    catch(er){alert("please complete registration!!!")}
  }
  

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
  }));

    return(
        <>
      <Navbarformember/>
       {!gym.gymName && <Stepperformember/>}
        
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

{gymclass.className && 
       //=================
       <center>
       <Box sx={{ flexGrow: 1, }} bgcolor={"black"} height={"400px"} width={"800px"}>
        
        <h2 style={{color:"red",fontStyle:"italic"}}>Your Class Information</h2>
       <Grid container spacing={3} marginLeft={"100px"} >
         <Grid item xs={12} md={8}>
          <h4>Name of Class:</h4>
           <Item><h4>{gymclass.className}</h4></Item>
         </Grid>
         <br/>
         
         <Grid item xs={6} md={8}>
         <h4>Starting from:</h4>
           <Item><h4>{gymclass.startDate}</h4></Item>
         </Grid>


         <Grid item xs={6} md={8}>
         <h4>Duration in months:</h4>
           <Item><h4>{gymclass.duration}</h4></Item>
         </Grid>

       </Grid>
       
     </Box>
     </center>
       //=================
       
      }
        
        </>
    )
    
    }
    export default Memberhome;