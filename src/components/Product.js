import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css"

function Product(props)
{
    return (
        <>
            <div className="card fixed-card">
              <img src={props.image} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <p className="card-text"><strong>Price: </strong>{props.price}$</p>
                {props.showButton && (<Link to={`product/${props.id}`} className="btn btn-primary">Details</Link>)}
              </div>
            </div>
        </>
    );
}


export default Product;