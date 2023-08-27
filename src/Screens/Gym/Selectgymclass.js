import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import d1 from '../../Images/d1.jpeg';
import Card from "../Body/Card";
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
     
        <hr></hr>
        <div style={{flexDirection:"row"}}>
          
              {emps.map((gym) => {
                
                
                return (
                    <button onClick={()=>Select1(gym)}>
                      <Card key={gym.id} image={d1} name={gym.className} location={gym.duration} owner={gym.startDate} />
                      </button>
                );
              })}
           
        </div>
      
    </>
  );
}
export default Selectgym;
