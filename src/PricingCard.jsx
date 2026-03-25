



import React from 'react';
import { CircleCheck } from 'lucide-react';
const PricingCard = ({data}) => {
const{tier,priceMonthly,description,features}=data;
console.log(data)
    return (
        <div className='font-bold border bg-blue-400 border-2 rounded-xl border-black p-4 grid justify-self-start gap-3 
        h-full w-full'>
            <h1 className='text-4xl'>{tier}</h1>
            <h1 className='hover:cursor-pointer bg-orange-500 rounded-4xl w-fit p-5 flex justify-center items-center'>{priceMonthly}/Month</h1>
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