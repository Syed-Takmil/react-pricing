


import React, { useEffect, useState } from 'react';
import PricingCard from './PricingCard';

const PricingOptions = () => {
    const[pricingData,setPricingData]=useState([]);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        setLoading(true)
        fetch('pricingoptions.json')
        .then(res=>res.json())
        .then(data=>{
            setPricingData(data)
            setLoading(false)
        }
        )
    },[]);
    return (
        <div>
            {loading?
           <span className=" flex justify-center items-center mx-auto mt-10 loading loading-spinner loading-xl"></span>:
           <div className='flex flex-col md:flex-row justify-between gap-3 '>
           {pricingData.map(data=>(    <div key={data.id} >
            <PricingCard data={data}></PricingCard>
           </div>
            )
           )}
            </div>}
        </div>
    );
};

export default PricingOptions;