import React from 'react'

const AboutBottom : React.FC = () => {
  return (
    <div 
    className='bg-[#008DFF] flex justify-center 
     items-center rounded-[25px]  relative pt-[30px]'>
        <div className='over pr-20'>
          <img 
          className='w-[480px] -mb-[200px]'
          src={require("../../assets/about/asaxiy.png")} alt="phone" />
        </div>
        <div className='flex flex-col justify-center text-center pl-20'>
          <img 
          className='md:w-[150px] m-auto mb-3'
          src={require("../../assets/about/asaxiylogo.png")} alt="logo" />
          <p className='text-[20px] text-[#fff] mb-3'>Ваш интернет магазин</p>
          <div className='flex items-center justify-between'>
            <img className='md:w-[170px] px-2' src={require("../../assets/about/appstore.png")} alt="apple" />
            <img className='md:w-[170px] px-2' src={require("../../assets/about/google.png")} alt="google" />
          </div>
        </div>
    </div> 
  )
}

export default AboutBottom