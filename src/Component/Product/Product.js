import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAddressCard } from '@fortawesome/free-solid-svg-icons'

import './Product.css'
const Product = (props) => {
    const{name,img,id,mohorana,location,fee}=props.product
    return (
        <div className="col-md-3 mt-3">
            <div className="card text-center bg-product shadow-lg">
    <img src={img} className="card-img-top img-top m-auto my-3" alt="..."></img>
    <div className="card-body text-white">
      <h5 className="card-title">Name::{name}</h5>
      <h5 className="card-title">ID::{id}</h5>
      <h5 className="card-title">Mohorana: :{mohorana}</h5>
      <h5 className="card-title">Location: :{location}</h5>
      <h5 className="card-title">Contact<FontAwesomeIcon icon={faAddressCard} /></h5>
      <button onClick={() =>props.handleAddToSummery(props.product)} type="button" className="btn-sm btn-warning">Select Partner</button>
      
     
    </div>
    <div className="card-footer">
      <small className="text-warning">Media Fee: :{fee}</small>
    </div>
  </div>
        </div>
    );
};

export default Product;