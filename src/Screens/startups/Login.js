import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import '../../css/Login.css'
import jwtDecode from "jwt-decode";



export default function Login()
{

  const[email,setemail]=useState("");
  const[passwd,setpasswd]=useState("");
  const history=useHistory();
   const[logindata,setlogindata]=useState(null);
  const requestparams={
    method:'POST',
    headers:{
      'Access-Control-Allow-Origin':'http://localhost:3000',
      'Access-Control-Allow-Credentials': 'true',
      'Accept':'application/json',
      'Content-Type':'application/json',
      
    },
    body:JSON.stringify({
      'email':email,
      'password':passwd
    })
  }

  var chk=async ()=>{

    const result =await fetch('http://localhost:8080/auth',requestparams);
    try {
      const data=await result.json();
      setlogindata(data);
      const token=jwtDecode(data.jwt);
      sessionStorage.setItem('id',token.jti);
      sessionStorage.setItem('jwt',data.jwt);
      history.push("/home");
    } catch (error) {
      console.log('wrong email or password !!');
    }
 
  };

    return(
         

          <div className="logdiv" >
            <legend style={{color:'white' ,marginLeft:'265px'}}>Login</legend>
            
               <div className="fontstyle">Email:</div>
           <input type="text" className="form-control logclass" value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder="Enter Your Email"  />
            <br/><br/>
           <div className="fontstyle">Password:</div>
             <input type="password" className=" form-control logclass"  value={passwd} onChange={(e)=>{setpasswd(e.target.value)}} placeholder="Enter Your Password" />
             <center>
              <br/>
            </center>
          <br></br>
            <center><button onClick={chk} className="btn btn-danger">Submit</button></center>
            <h5 style={{color:"white"}}>Don't have an account? <a href="/register">click here</a></h5>
            </div>
            
     
    )
}