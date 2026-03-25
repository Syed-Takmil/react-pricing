



import React from 'react';
import { CircleCheck } from 'lucide-react';
const PricingCard = ({data}) => {
const{tier,priceMonthly,description,features}=data;
console.log(data)
    return (
        <div className='border bg-blue-800 border-4 rounded-xl border-amber-300 p-4 grid justify-self-start gap-3 
        text-amber-100 w-full'>
            <h1 className='text-4xl'>{tier}</h1>
            <h1 className='hover:cursor-pointer bg-orange-500 rounded-4xl w-fit p-3'>{priceMonthly}/Month</h1>
            <p>{description}</p>
            <p>{features.map((feature,index)=>
                (
                   <span className='flex gap-2 mb-2'>
                     <CircleCheck></CircleCheck>
                    <li className='list-none ' key={index}> {feature}</li>
                   </span>

                )
                )}</p>
        </div>
    );
};

export default PricingCard;