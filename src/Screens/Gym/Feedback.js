
import { Rating, TextField } from "@mui/material"
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

  


export default function Feedback(props)
{

    const[feedback,sf]=useState("");
    const[status,ss]=useState(true);
    const[rating,sr]=useState(0);

    const history=useHistory();
  const requestparams={
    method:'POST',
    headers:{
      
      'Content-Type':'application/json',
      'Authorization':`Bearer ${sessionStorage.getItem('jwt')}`
      
    },
    body:JSON.stringify({
        "feedback": feedback,
  "rating": rating,
  "status": false
    })
  }
  useEffect(()=>{
    chk1();
  },[])
  var chk1=async ()=>{

    const result1 =await fetch(`http://localhost:8080/member/feedback/${sessionStorage.getItem("id")}`,{headers:{
    'Authorization':`Bearer ${sessionStorage.getItem('jwt')}`
  }});
    try {
      const data1=await result1.json();
    console.log(data1);
    sf(data1.feedback);
    ss(data1.status);
    sr(data1.rating===null?0:data1.rating);
      
    } catch (error) {
      console.log(error);
    }
 
  };

  var chk=async ()=>{

    const result =await fetch(`http://localhost:8080/member/feedback/${sessionStorage.getItem("id")}`,requestparams);
    try {
      const data=await result.json();
    console.log(data);
    alert("update sucessful");
    history.push("/memberhome");
      
    } catch (error) {
      console.log('wrong data !!');
    }
 
  };

    return(

        <center>
           
        <div style={{backgroundColor:"black",height:"550px",width:"600px"}}>
        <h1 style={{color:"red"}}>Feedback</h1>
        <TextField style={{width:"50%",marginTop:"10px"}} onChange={(e)=>{sf(e.target.value)}} label="Feedback" id="1"  value={feedback} />
       <br></br>

        <TextField style={{width:"50%",marginTop:"10px"}} onChange={(e)=>{ss(e.target.value)}} label="Resolution Status" id="2" value={status} disabled />
        <br></br>
       
        <Rating
  name="simple-controlled"
  value={rating}
  onChange={(event, newValue) => {
    sr(newValue);
  }}
/>
      
        
        <br></br>
        
        
        <button  className="btn btn-danger" onClick={chk}>UPDATE</button>
        </div>
        </center>
    )
}