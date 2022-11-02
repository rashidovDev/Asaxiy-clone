import React from 'react'

const Account : React.FC = () => {
  return (
       <div className='absolute -bottom-[120px] bg-[#fff] shadowAccount md:shadow1 w-[110px] md:w-[170px] z-10 md:p-2 p-1 rounded-[15px]'>
         <div>
            <img className='rounded-full w-[40px] h-[40px] m-auto my-1'
            src={require("../assets/account/account.jpg")} alt="account" />
            <p className='text-center italic font-semibold pb-[1px] text-[12px] md:text-[16px] mb-1'>Rashidov Anvar</p>
            <p className='text-center md:text-[15px] text-[10px]'>Тел:+998 90 121 01 28</p>
         </div>
        </div>
  )
}

export default Account