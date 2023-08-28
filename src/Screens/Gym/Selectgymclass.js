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

  const result =await fetch(`http://localhost:8080/member/selectgymclass/${sessionStorage.getItem("id")}`,requestparams);
  try {
    const data=await result.json();
    setEmps(data);
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
     <DenseAppBar name="Select Gym Class"/>
     <Grid container padding={10} gap={17} justify="center" >
          
              {emps.map((gym) => {
                
                
                return (
                    
                      <Carrd key={gym.id} img={d1} func={()=>Select1(gym)} name={gym.className} location={gym.duration} owner={gym.startDate} />
                     
                );
              })}
           
        </Grid>
        </>
    
  );
}
export default Selectgym;
