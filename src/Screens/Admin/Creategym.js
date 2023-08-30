import { Alert, TextField } from "@mui/material"
import { useState } from "react";




export default function Creategym()
{

    const[name,setname]=useState("");
  const[location,setlocation]=useState("");
  const[sucessful,setsuccesful]=useState(false);
    
  const requestparams={
    method:'POST',
    headers:{
      
      'Content-Type':'application/json',
      'Authorization':`Bearer ${sessionStorage.getItem('jwt')}`
      
    },
    body:JSON.stringify({
        "gymName": name,
        "location": location
    })
  }

  var chk=async ()=>{

    const result =await fetch(`http://localhost:8080/owner/creategym/${sessionStorage.getItem("id")}`,requestparams);
    try {
      const data=await result.json();
    console.log(data);
      setsuccesful(true);
    
      
    } catch (error) {
      console.log('wrong data !!');
    }
 
  };

    return(

        <center>
           
        <div style={{backgroundColor:"black",height:"300px",width:"600px"}}>
        {sucessful && <Alert severity="success">gym created successfully,please click on next</Alert>}
        <h1 style={{color:"red"}}>CREATE GYM</h1>
        <TextField style={{width:"50%",marginTop:"10px"}} onChange={(e)=>{setname(e.target.value)}} label="gym name" id="1" />
        <br></br>
        <TextField style={{width:"50%",marginTop:"10px"}} onChange={(e)=>{setlocation(e.target.value)}} label="gym location" id="2" />
        <br></br>
        <br></br>
        <br></br>
        
        <button  className="btn btn-danger" onClick={chk}>Submit</button>
       
        </div>
        </center>
    )
}