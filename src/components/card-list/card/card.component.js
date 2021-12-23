import react from "react";
import './card.css';

export const Card = (props) => {

    return (
        <div className="card-container"> 
            <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="" />
            <h3 className="heading">{props.monster.name}</h3>
            <p>{props.monster.email}</p>
        </div>
    )
    
}