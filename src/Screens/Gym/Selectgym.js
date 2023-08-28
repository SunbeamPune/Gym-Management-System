import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import d1 from '../../Images/d1.jpeg';

import Carrd from "../startups/Carrd";
import { Grid } from "@mui/material";
import DenseAppBar from "./Denseappbar";
function Selectgym() {
  const [emps, setEmps] = useState([]);
  
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

  const result =await fetch('http://localhost:8080/member/selectgym',requestparams);
  try {
    const data=await result.json();
    setEmps(data);
    
    //history.push("/home");
  } catch (error) {
    console.log('wrong email or password !!');
  }

};
useEffect(() => {
  chk();
}, []);
var Select1 = (selgym) => {
  fetch(`http://localhost:8080/member/selectgym/${sessionStorage.getItem('id')}`,{
    method:'POST',
    headers:{'Content-Type':'application/json','Authorization':`Bearer ${sessionStorage.getItem('jwt')}`},
    body:JSON.stringify(selgym)
  });
  history.push(`/selectgymclass`);
};

  return (
    <  >
     
        <DenseAppBar name="Select Gym"/>
     <Grid container padding={10} gap={17} justify="center"  >
          
              {emps.map((gym) => {
                
                
                return (
                    
                
                      <Carrd key={gym.id} func={()=>Select1(gym)} img={d1} name={gym.gymName} location={gym.location} owner={JSON.stringify(gym.owner)} />
                     
                );
              })}
           
        </Grid>
      
    </>
  );
}
export default Selectgym;
