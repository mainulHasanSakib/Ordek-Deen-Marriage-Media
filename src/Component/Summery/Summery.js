import React from 'react';
import './Summery.css'
import '../Shop/Shop'
const Summery = (props) => {
  const {summery}=props || [];

  const totalReducer=(preValue,currentValue)=>preValue+currentValue.fee
  const total =summery.reduce( totalReducer, 0)
    return (
        <div>
            <h2 className="text-success">Selected Boys' Summery</h2>
            <div className=" m-3">
            <div className="card text-center bg-summery shadow-lg">
    
    <div className="card-body text-white">
      <h5 className="card-title">Selected Boys: : {props.summery.length}</h5>
      <h5 className="card-title">Total Media Fee: : {total}</h5>
      
      <ul>
        {summery.map(boy => <li>{boy.name}</li>)}
      </ul>
     
    </div>
    
  </div>
        </div>
        </div>
    );
};

export default Summery;