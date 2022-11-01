import React from 'react'
import { useNavigate } from 'react-router-dom'

const Deliver : React.FC = () => {
    const navigate = useNavigate()
  return (
    <div className='w-[90%] m-auto my-4'>
        <div className='rounded-[15px] p-4 bg-[#fff] md:flex items-center shadow'>
        <div className='md:w-[35%]'>
        <h1 className='text-[#13306A] mb-5'>Статус заказа</h1>
        <div className='text-[#9D8E8E] font-[500]'>
        <p className='text-[16px]'>Чтобы увидеть ваш заказ, пожалуйста, заполните необходимые поля. 
            Номер заказа был отправлен на ваш номер в виде смс-сообщения</p>
            <label className='w-full'>
                <span className=''>Номер заказа<span className='text-[red]'>*</span></span> 
                    <input 
                    className='w-[100%] p-2 border-2 border-[#9D8E8E] outline-none rounded-[10px] my-1'
                    type="text"
                    name="name"
                    />
                </label>
                <label className='w-full my-3'>
                <span className=''>Номер телефона, при заказе<span className='text-[red]'>*</span></span> 
                    <input 
                    className='w-[100%] p-2 border-2 border-[#9D8E8E] outline-none rounded-[10px] my-1'
                    type="text"
                    name="name"
                    />
                </label>
                <button 
                onClick={() => {
                    navigate("/")
                }}
                className='mt-4 mb-3 text-[#fff] bg-[#008DFF] py-2 px-3 rounded-[10px]'>
                 Подтвердить
                </button>
        </div>
        </div>
        <div className='w-[65%] flex justify-center'>
            <img 
            className='w-[70%] hidden md:inline'
            src={require("../../assets/navbar/tracking.png")} alt="deliver" />
        </div>

        </div>
    </div>
  )
}

export default Deliver