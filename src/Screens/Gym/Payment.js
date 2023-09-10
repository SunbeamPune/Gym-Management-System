import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import '../../css/Login.css'



export default function Pay()
{

  const[memtype,setmemtype]=useState("REGULAR");
  const[start,setstart]=useState("");
  const[rupees,setrupees]=useState("100");
  
  

  const requestparams={
    method:'POST',
    headers:{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${sessionStorage.getItem('jwt')}`
    },
    body:JSON.stringify({   
            "membershipType": memtype,
            "startDate": start,
            "endDate": null,
            "rupees": rupees  
    })
  }

  const history=useHistory();

  var chk=async ()=>{
    try {
        console.log(requestparams.body);
        await fetch(`http://localhost:8080/member/pay/${sessionStorage.getItem('id')}`,requestparams);
       alert("Payment Successful");
      history.push("/memberhome");
    } catch (error) {
      alert('something went wrong!!!');
    }
  };

    return(
         

          <div className="logdiv" style={{height:'350px'}} >
           <legend style={{color:'white' ,marginLeft:'200px'}}>Payment Gateway</legend>

            <div className="fontstyle">Start Date:</div>
           <input type="date" className="form-control logclass" value={start} onChange={(e)=>{setstart(e.target.value)}} />

           <div className="fontstyle">Membership-Type:</div>
           <select  className="form-control logclass"
           onChange={e => {
            
            setmemtype(e.target.selectedOptions[0].getAttribute('name'));
            
           setrupees(e.target.value);
        }
           }>
              <option value="100" name="REGULAR" >REGULAR</option>
              <option value="1000" name="MONTHLY">MONTHLY</option>
              <option value="5000" name="YEARLY">YEARLY</option>
              <option value="3000" name="QUATERLY">QUATERLY</option>
              <option value="2500" name="SEMI_YEARLY">SEMI_YEARLY</option>
          </select>
          <div className="fontstyle">RUPEES:</div>
           <input type="number" className="form-control logclass" value={rupees} disabled/>
           <br/><br/>
            <center><button onClick={chk} className="btn btn-danger">Pay</button></center>
            </div>
            
     
    )
}