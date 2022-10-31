import React from 'react'

const Account = () => {
  return (
       <div className='absolute -bottom-[120px] bg-[#fff] shadow1 w-[170px] z-10 p-2 rounded-[15px]'>
         <div>
            <img className='rounded-full w-[40px] h-[40px] m-auto my-1'
            src={require("../assets/account/account.jpg")} alt="account" />
            <p className='text-center italic font-semibold pb-[1px]'>Rashidov Anvar</p>
            <p className='text-center text-[15px]'>Тел:+998 90 121 01 28</p>
         </div>
        </div>
  )
}

export default Account