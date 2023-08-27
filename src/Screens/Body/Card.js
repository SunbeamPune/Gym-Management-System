import '../../css/Card.css'

export default function Card(props){
    return(
        <div className="card" >
     <img src={props.image} alt="Avatar" />
      <div className="container">
       <h4><b>{props.name}</b></h4>
        <h5>{props.location}</h5>
        <h5>{props.owner}</h5>

       </div>
    </div>
    )
}