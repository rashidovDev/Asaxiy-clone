import React from 'react'
import { useNavigate } from 'react-router-dom'

const Payment = () => {
    const navigate = useNavigate()

    return (
        <div className='w-[90%] mx-auto flex justify-center items-center mb-5'>
            <div className='bg-[#fff] rounded-[15px] shadow py-3 px-5 w-[500px] my-2'>
                <h1 className='mb-5 text-[#13306A]'>Оплата заказа</h1>
                <div className='text-[#9D8E8E] font-[500]'>
                <p>Внимательно введите номер вашего заказа</p>
                <form >
                <label className='w-full'>
                <span className=''>Номер заказа<span className='text-[red]'>*</span></span> 
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
                </form>
                </div>
            </div>
        </div>
    )
}

export default Payment