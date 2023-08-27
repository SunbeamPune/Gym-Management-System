import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import '../../css/Login.css'



export default function Register()
{

  const[email,setemail]=useState("");
  const[passwd,setpasswd]=useState("");
  const[fname,setfname]=useState("");
  const[lname,setlname]=useState("");
  const[phone,setphone]=useState("");
  const[dob,setdob]=useState("");
  const[address,setaddress]=useState("");
  const[role,setrole]=useState("member");
  

  const requestparams={
    method:'POST',
    headers:{
      'Access-Control-Allow-Origin':'http://localhost:3000',
      'Access-Control-Allow-Credentials': 'true',
      'Accept':'application/json',
      'Content-Type':'application/json',
      
    },
    body:JSON.stringify({
      'firstName':fname,
      'lastName':lname,
      'phone':phone,
      'email':email,
      'password':passwd,
      'address':address,
      'dob':dob
    })
  }

  const history=useHistory();

  var chk=async ()=>{

    const result =await fetch(`http://localhost:8080/${role}/signup`,requestparams);
    try {
      const data=await result.json();
      console.log(data);
       alert("Account ready for:"+data.firstName);
      history.push("/");
    } catch (error) {
      alert('something went wrong!!!');
    }
  };

    return(
         

          <div className="logdiv" style={{height:'585px'}} >
            <legend style={{color:'white' ,marginLeft:'265px'}}>Register</legend>

            <div className="fontstyle">First-Name:</div>
           <input type="text" className="form-control logclass" value={fname} onChange={(e)=>{setfname(e.target.value)}}  />
            

            <div className="fontstyle">Last-Name:</div>
           <input type="text" className="form-control logclass" value={lname} onChange={(e)=>{setlname(e.target.value)}} />
            
            
               <div className="fontstyle">Email:</div>
           <input type="text" className="form-control logclass" value={email} onChange={(e)=>{setemail(e.target.value)}} />
            
            
           <div className="fontstyle">Password:</div>
             <input type="password" className=" form-control logclass"  value={passwd} onChange={(e)=>{setpasswd(e.target.value)}} />

          <div className="fontstyle">Phone:</div>
           <input type="text" className="form-control logclass" value={phone} onChange={(e)=>{setphone(e.target.value)}} />
            
            <div className="fontstyle">Address:</div>
           <input type="text" className="form-control logclass" value={address} onChange={(e)=>{setaddress(e.target.value)}} />
           
            <div className="fontstyle">Date of birth:</div>
           <input type="date" className="form-control logclass" value={dob} onChange={(e)=>{setdob(e.target.value)}} />

           <div className="fontstyle">Role:</div>
           <select  className="form-control logclass"
           value={role}
           onChange={e => setrole(e.target.value)} 
           >
              <option value="member">Member</option>
              <option value="owner">Gym Owner</option>
              <option value="trainer">Trainer</option>
              <option value="staff">Staff</option>
          </select>
          
            <center><button onClick={chk} className="btn btn-danger">Submit</button></center>
            </div>
            
     
    )
}


/*firstName;
	
	@NotBlank
	private String LastName;
	
	@Pattern(regexp = "[0-9]{10}")
	private String phone;
	
	@Email
	private String email;
	
	@NotBlank
	private String password;
	
	private String address;

	private Date DOB; */