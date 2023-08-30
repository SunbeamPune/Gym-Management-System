import { Alert, TextField } from "@mui/material"
import { useState } from "react";




export default function Createtrainer()
{

    const[name,setname]=useState("");
    const[phone,setphone]=useState("");
    const[email,setemail]=useState("");
  const[password,setpassword]=useState("");
  const[address,setaddress]=useState("");
  const[lastname,setlastname]=useState("");
  const[dob,setdob]=useState("");
  const[sucessful,setsuccesful]=useState(false);
  const requestparams={
    method:'POST',
    headers:{
      
      'Content-Type':'application/json',
      'Authorization':`Bearer ${sessionStorage.getItem('jwt')}`
      
    },
    body:JSON.stringify({
        "firstName": name,
        "phone":phone ,
        "email": email,
        "password": password,
        "address": address,
        "lastName": lastname,
        "dob": dob
    })
  }

  var chk=async ()=>{

    const result =await fetch(`http://localhost:8080/owner/trainer/add/${sessionStorage.getItem("tid")}`,requestparams);
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
           
        <div style={{backgroundColor:"black",height:"550px",width:"600px"}}>
        {sucessful && <Alert severity="success">Trainer created successfully!!,please click on next</Alert>}
        <h1 style={{color:"red"}}>CREATE GYM TRAINER</h1>
        <TextField style={{width:"50%",marginTop:"10px"}} onChange={(e)=>{setname(e.target.value)}} label="frist name" id="1" />
       <br></br>

        <TextField style={{width:"50%",marginTop:"10px"}} onChange={(e)=>{setphone(e.target.value)}} label="phone" id="2" />
        <br></br>
        <TextField style={{width:"50%",marginTop:"10px"}} onChange={(e)=>{setemail(e.target.value)}} label="email" id="3" />
        <br></br>
        <TextField style={{width:"50%",marginTop:"10px"}} onChange={(e)=>{setpassword(e.target.value)}} label="password" id="4" />
        <br></br>
        <TextField style={{width:"50%",marginTop:"10px"}} onChange={(e)=>{setaddress(e.target.value)}} label="address" id="5" />
        <br></br>
        <TextField style={{width:"50%",marginTop:"10px"}} onChange={(e)=>{setlastname(e.target.value)}} label="lastname" id="6" />
        <br/>
        <table>
            <tr rowSpan="1">
                <td >
                <TextField  style={{width:"260px",marginTop:"10px",marginLeft:"105px"}} value={dob} onChange={(e)=>{setdob(e.target.value)}} label="date of birth" id="7" />
                </td>
                <td>
                <input type="date" className="form-control logclass" placeholder="enter date of birth" value={dob} onChange={(e)=>{setdob(e.target.value)}}  style={{backgroundColor:'white',width:'7%'}}/>
                </td>
            </tr>
        </table>
        <br></br>
        <br></br>
        <br></br>
        
        <button  className="btn btn-danger" onClick={chk}>Submit</button>
        </div>
        </center>
    )
}