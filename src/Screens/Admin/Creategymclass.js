import { TextField } from "@mui/material"
import { useState } from "react";




export default function Creategymclass()
{

    const[name,setname]=useState("");
    const[startdate,setstartdate]=useState("");
    const[capacity,setcapacity]=useState("");
  const[duration,setduration]=useState("");
    
  const requestparams={
    method:'POST',
    headers:{
      
      'Content-Type':'application/json',
      'Authorization':`Bearer ${sessionStorage.getItem('jwt')}`
      
    },
    body:JSON.stringify({
        "className": name,
        "startDate": startdate,
        "capacity": capacity,
        "duration": duration
    })
  }

  var chk=async ()=>{

    const result =await fetch(`http://localhost:8080/owner/creategymclass/${sessionStorage.getItem("id")}`,requestparams);
    try {
      const data=await result.json();
    console.log(data);
    sessionStorage.setItem("tid",data.id);
      
    } catch (error) {
      console.log('wrong data !!');
    }
 
  };

    return(

        <center>
           
        <div style={{backgroundColor:"black",height:"400px",width:"600px"}}>
        <h1 style={{color:"red"}}>CREATE GYM CLASS</h1>
        <TextField style={{width:"50%",marginTop:"10px"}} onChange={(e)=>{setname(e.target.value)}} label="Class name" id="1" />
        <br/>
        <table>
            <tr rowSpan="1">
                <td >
                <TextField  style={{width:"260px",marginTop:"10px",marginLeft:"105px"}} value={startdate} onChange={(e)=>{setstartdate(e.target.value)}} label="start date" id="2" />
                </td>
                <td>
                <input type="date" className="form-control logclass" placeholder="enter date of birth" value={startdate} onChange={(e)=>{setstartdate(e.target.value)}}  style={{backgroundColor:'white',width:'7%'}}/>
                </td>
            </tr>
        </table>

        <TextField style={{width:"50%",marginTop:"10px"}} onChange={(e)=>{setcapacity(e.target.value)}} label="capacity" id="3" />
        <br></br>
        <TextField style={{width:"50%",marginTop:"10px"}} onChange={(e)=>{setduration(e.target.value)}} label="duration" id="4" />
        <br></br>
        <br></br>
        <br></br>
        
        <button  className="btn btn-danger" onClick={chk}>Submit</button>
        </div>
        </center>
    )
}