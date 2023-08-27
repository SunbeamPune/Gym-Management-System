import Card from "../Body/Card";
import e1 from '../../Images/e1.jpeg'
import e2 from '../../Images/e2.jpeg'
import e3 from '../../Images/e3.jpeg'
import e4 from '../../Images/e4.jpeg'
import e5 from '../../Images/e5.jpeg'
import e6 from '../../Images/e6.jpeg'
import e7 from '../../Images/e7.jpeg'
import e8 from '../../Images/e8.jpeg'
import e9 from '../../Images/e9.jpeg'
import e10 from '../../Images/e10.jpeg'
function Equipments()
{
    return(
        <>
        <center>
        <div style={{backgroundColor:'white',display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
        <Card image={e1} name='HERCULES GYM' text='this is my text!'/>
        <Card image={e2} name='HERCULES GYM' text='this is my text!'/>
        <Card image={e3} name='HERCULES GYM' text='this is my text!'/>
        <Card image={e4} name='HERCULES GYM' text='this is my text!'/>
        <Card image={e5} name='HERCULES GYM' text='this is my text!'/>
        <Card image={e6} name='HERCULES GYM' text='this is my text!'/>
        <Card image={e7} name='HERCULES GYM' text='this is my text!'/>
        <Card image={e8} name='HERCULES GYM' text='this is my text!'/>
        <Card image={e9} name='HERCULES GYM' text='this is my text!'/>
        <Card image={e10} name='HERCULES GYM' text='this is my text!'/>
        
       
       
      
        </div>
        </center>
        </>
    );
}
export default Equipments;