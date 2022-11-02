import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {IProduct as Props} from "../Menu"
import { cartAction } from '../store/Slices/cartSlice';
import { modalAction } from '../store/Slices/ModalSlice';
import { notify } from '../utils/toast/Toast';

interface IProduct {
    value : Props,
}

const ProductItem : React.FC <IProduct> = ({value}) => {
  const dispatch = useDispatch();

  const closeToggle = () => {
    dispatch(modalAction.toggleProduct())
  }
 
const addToCart = () => {
    dispatch(cartAction.addItemToCart({
        id : value.id,
        heading : value.heading,
        image : value.image,
        price : value.price
    }))
  }
  
  const [blue, setBlue] = useState<boolean>(false)

  return (
    <>
           <div className='z-50'>
            <p className='font-semibold'>Купить {value.heading}</p>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-2 py-3'>
              <div className='border w-[130px] md:w-[150px] p-3 shad text-center font-[400]
               rounded-[10px] border-slate-300 '>
                <p>3 месяц</p>
                <p>{value.price/2} сум</p>
              </div>
              <div className='border w-[130px] md:w-[150px] p-3 shad text-center font-[400]
               rounded-[10px] border-slate-300 '>
                <p>6 месяц</p>
                <p>{value.price/4} сум</p>
              </div>
              <div className='border w-[130px] md:w-[150px] p-3 shad text-center font-[400]
               rounded-[10px] border-slate-300 '>
                <p>9 месяц</p>
                <p>{value.price/5} сум</p>
              </div>
              <div className='border w-[130px] md:w-[150px] p-3 shad text-center font-[400]
               rounded-[10px] border-slate-300 '>
                <p>12 месяц</p>
                <p>{value.price/8} сум</p>
              </div>
              
            </div>
            <div className='flex items-center md:justify-between '>
            <p className='text-[20px]'>Общая сумма оплаты :</p>
            <p className='font-bold text-[20px] md:text-[16px]'>{value.price}</p>
            </div>
            <p className='md:mb-5 text-[18px] w-[280px]'>Минимальная сумма товара для приобретения 200 000 сум.</p>
            <div className='md:flex justify-between items-center'>
              <div><p>Оставить заявку :</p></div>
              <button 
              onClick={closeToggle} 
              className='p-3 bg-[#FE7300] w-full md:w-[120px] mb-2  text-[#fff] rounded-[10px]'>Позвонить</button>
              <button 
              onClick={closeToggle}
               className='p-3 bg-[#00CD98] w-full md:w-[120px] mb-2 text-[#fff] rounded-[10px]'>Через ВОТ</button>
              <button
              onClick={() => {
                addToCart()
                notify("Товар добавлен в корзину")
                closeToggle()
              }}
               className='p-3 bg-[#008DFF] w-full md:w-[120px] text-[#fff] rounded-[10px]'>ДОБАВИТЬ КОРЗИНУ</button>
            </div>
           </div>
    </>
  )
}

export default ProductItem