import React from "react";

function Product(props)
{
    return (
        <>
            <div className="card">
              <img src={props.image} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <p className="card-text"><strong>Price: </strong>{props.price}$</p>
                <button href="#" className="btn btn-primary">Go somewhere</button>
              </div>
            </div>
        </>
    );
}


export default Product;