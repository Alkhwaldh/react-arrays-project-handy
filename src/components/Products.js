import React from 'react';
import "./Products.css"

const Products = props => {
    return ( 
        <section>
           <img src={props.img}/>
           <h1>{props.title}</h1>
           <p>{props.description}</p>
        </section>
    );
}
export default Products;




