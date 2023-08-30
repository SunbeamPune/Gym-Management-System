
import { TextField } from "@mui/material"
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

  


export default function Updateowner(props)
{

    const[name,setname]=useState("");
    const[phone,setphone]=useState("");
    const[email,setemail]=useState("");
  const[password,setpassword]=useState("");
  const[address,setaddress]=useState("");
  const[lastname,setlastname]=useState("");
  const[dob,setdob]=useState("");
    const history=useHistory();
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
        "dob": dob,
        "id":sessionStorage.getItem("id")
    })
  }
  useEffect(()=>{
    chk1();
  },[])
  var chk1=async ()=>{

    const result1 =await fetch(`http://localhost:8080/owner/update/${sessionStorage.getItem("id")}`,{headers:{
    'Authorization':`Bearer ${sessionStorage.getItem('jwt')}`
  }});
    try {
      const data1=await result1.json();
    console.log(data1.firstName);
    
    setname(data1.firstName);
    //setname(data1.firstName);
    setpassword(data1.password);
    setaddress(data1.address);
    setphone(data1.phone);
    setemail(data1.email);
    setlastname(data1.lastName);
    setdob(data1.dob);
      
    } catch (error) {
      console.log(error);
    }
 
  };

  var chk=async ()=>{

    const result =await fetch(`http://localhost:8080/owner/update`,requestparams);
    try {
      const data=await result.json();
    console.log(data);
    alert("update sucessful");
    history.push("/owner");
      
    } catch (error) {
      console.log('wrong data !!');
    }
 
  };

    return(

        <center>
           
        <div style={{backgroundColor:"black",height:"550px",width:"600px"}}>
        <h1 style={{color:"red"}}>CREATE GYM TRAINER</h1>
        <TextField style={{width:"50%",marginTop:"10px"}} onChange={(e)=>{setname(e.target.value)}} label="frist name" id="1"  value={name} />
       <br></br>

        <TextField style={{width:"50%",marginTop:"10px"}} onChange={(e)=>{setphone(e.target.value)}} label="phone" id="2" value={phone} />
        <br></br>
        <TextField style={{width:"50%",marginTop:"10px"}} onChange={(e)=>{setemail(e.target.value)}} label="email" id="3"  value={email} />
        <br></br>
        <TextField style={{width:"50%",marginTop:"10px"}} onChange={(e)=>{setpassword(e.target.value)}} label="password" id="4"  value={password}/>
        <br></br>
        <TextField style={{width:"50%",marginTop:"10px"}} onChange={(e)=>{setaddress(e.target.value)}} label="address" id="5"  value={address}/>
        <br></br>
        <TextField style={{width:"50%",marginTop:"10px"}} onChange={(e)=>{setlastname(e.target.value)}} label="lastname" id="6"  value={lastname}/>
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
        
        <button  className="btn btn-danger" onClick={chk}>UPDATE</button>
        </div>
        </center>
    )
}