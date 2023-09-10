import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import d1 from '../../Images/d1.jpeg';

import Carrd from "../startups/Carrd";
import { Alert, Grid } from "@mui/material";

function Selectgymclass() {
  const [emps, setEmps] = useState([]);
  const[sucessful,setsuccesful]=useState(false);
  const history = useHistory();
  


const requestparams={
  method:'GET',
  headers:{
    'Access-Control-Allow-Origin':'http://localhost:3000',
    'Access-Control-Allow-Credentials': 'true',
    'Accept':'application/json',
    'Content-Type':'application/json',
    'Authorization':`Bearer ${sessionStorage.getItem('jwt')}`
    
  }
};

var chk=async ()=>{
  try {
  const result =await fetch(`http://localhost:8080/member/selectgymclass/${sessionStorage.getItem("id")}`,requestparams);
  
    const data=await result.json();
    setEmps(data);
    setsuccesful(true);
  } catch (error) {
    console.log('wrong email or password !!');
  }

};
useEffect(() => {
  chk();
}, []);
  var Select1 = async (selgym) => {
   await fetch(`http://localhost:8080/member/selectgymclass/${sessionStorage.getItem('id')}`,{
      method:'POST',
      headers:{'Content-Type':'application/json','Authorization':`Bearer ${sessionStorage.getItem('jwt')}`},
      body:JSON.stringify(selgym)
    }).then(()=>history.push(`/pay`));
    
  };
  return (
   
     <>
    
     {sucessful && <Alert severity="success">Class successfully selected!,please click on next</Alert>}
     
     <Grid container padding={10} gap={17} justify="center" >
          
              {
              
              emps.map((gym) => {
                
                
                return (
                <Carrd key={gym.id} img={d1} func={()=>Select1(gym)} name={gym.className} location={gym.duration} owner={gym.startDate} />
                  );
              })
              
              }
           
        </Grid>
        </>
    
  );
}
export default Selectgymclass;
