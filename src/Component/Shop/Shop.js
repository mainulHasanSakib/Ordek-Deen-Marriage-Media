import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Summery from '../Summery/Summery';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    const [summery, setSummery]=useState([])
    useEffect(()=>{
        fetch('data.JSON')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    } ,[])
const handleAddToSummery=(product)=>{
   const newSummery=[...summery, product];
   setSummery(newSummery);
}

    return (
        <div className="container bg-shop shadow-lg ">
            <div className="row">
                <div className="row col-md-9 border-end">
                    {/* boys' data */}

                    {products.map(product=><Product 
                    product={product}
                     key={product.id}
                     handleAddToSummery={handleAddToSummery}
                     ></Product>)}
                    </div>
                <div className="col-md-3">
                    {/* chossen boys' cart */}
                    <Summery summery={summery}/>
                </div>
            </div>
        </div>
    );
};

export default Shop;