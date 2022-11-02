import React from 'react'
import { Link } from 'react-router-dom';
import { productType } from '../data';

const ProductType : React.FC = () => {
  return (
    <div className='md:hidden w-[90%] m-auto my-4'>
         <div className='grid grid-cols-2 gap-3 '>
            {productType.map((product, idx) => (
            <Link key={idx + 1} className='my-1 no-underline text-[#555]' to={product.href}>
                <div className='p-3 bg-[#fff] flex justify-center items-center pb-4 rounded-[10px]'>
                    <img src={product.image} alt="types" className='w-[50px] h-[65px]'/>
                </div>
                <p className='text-center mt-3 text-[18px] font-semibold'>{product.title}</p>
            </Link>
            ))}
         </div>
    </div>
  )
}

export default ProductType