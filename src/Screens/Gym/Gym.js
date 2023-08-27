import Card from "../Body/Card";
import d1 from '../../Images/d1.jpeg'
import d2 from '../../Images/d2.jpeg'
import d3 from '../../Images/d3.jpeg'
import d4 from '../../Images/d4.jpeg'
import d5 from '../../Images/d5.jpeg'
import d6 from '../../Images/d6.jpeg'
import d7 from '../../Images/d7.jpeg'
import d8 from '../../Images/d8.jpeg'
import d9 from '../../Images/d9.jpeg'
import d10 from '../../Images/d10.jpeg'
function Gym()
{
    return(
        <>
        <center>
        <div style={{backgroundColor:'white',display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
        <Card image={d1} name='HERCULES GYM' text='this is my text!'/>
        <Card image={d2} name='BAJIRANG GYM' text='this is my text!'/>
        <Card image={d3} name='SANKET GYM' text='this is my text!'/>
        <Card image={d4} name='KARANSINGH GYM' text='this is my text!'/>
        <Card image={d5} name='PLANET FITNESS' text='this is my text!'/>
        <Card image={d6} name='GOLADS GYM' text='this is my text!'/>
        <Card image={d7} name='OXYEGEN GYM' text='this is my text!'/>
        <Card image={d8} name='ANYTIME FITNESS' text='this is my text!'/>
        <Card image={d9} name='PLATINUM GYM' text='this is my text!'/>
        <Card image={d10} name='ADITYA FITNESS GYM' text='this is my text!'/>
       
      
        </div>
        </center>
        </>
    )
}
export default Gym;