import React from "react";
import Card from "../Css/Card.css"


const IMAGEN =(props) => {
    const {thumbnail,seller,price,available_quantity,condition,title} = props.children[3];

    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card text-white bg-primary mb-7">
                <img src={thumbnail}  alt={price} className="card-img-top"/>
                <div className="card-body">
                    <p className="card-text">{title}</p>
                    <p className="card-text"> Precio {price}</p>
                    <p className="card-text"> id {props.children[1]}></p>

                </div>
                <div>
                    <button onClick={()=>{props.children[5](props.children[1])}} className="btn btn-info btn-sm btn-block">Ver</button>
                </div>
            </div>
        </div>
    );
}
export default IMAGEN;