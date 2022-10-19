import React, {useState} from 'react'
import { IProduct as IProps } from '../data'

interface IProduct {
    value : IProps["product"] | null,
}

const ProductItem : React.FC <IProduct> = ({value}) => {

  const [blue, setBlue] = useState<boolean>(false)

  return (
    <>
    {
      value?.map((item, idx) => (
           <div key={idx}>
            <p className='font-semibold'>Купить {item.heading}</p>
            <div className='grid grid-cols-4 gap-4 py-3'>
              <div className='border w-[150px] p-3 shad text-center font-[400]
               rounded-[10px] border-slate-300 '>
                <p>3 месяц</p>
                <p>49 600 сум</p>
              </div>
              <div className='border w-[150px] p-3 shad text-center font-[400]
               rounded-[10px] border-slate-300 '>
                <p>3 месяц</p>
                <p>49 600 сум</p>
              </div>
              <div className='border w-[150px] p-3 shad text-center font-[400]
               rounded-[10px] border-slate-300 '>
                <p>3 месяц</p>
                <p>49 600 сум</p>
              </div>
              <div className='border w-[150px] p-3 shad text-center font-[400]
               rounded-[10px] border-slate-300 '>
                <p>3 месяц</p>
                <p>49 600 сум</p>
              </div>
              
            </div>
            <div className='flex items-center justify-between'>
            <p>Общая сумма оплаты :</p>
            <p className='font-bold'>{item.price}</p>
            </div>
            <p className='mb-5'>Минимальная сумма товара для приобретения 200 000 сум.</p>
            <div className='flex justify-between items-center'>
              <div><p>Оставить заявку :</p></div>
              <button 
              className='p-3 bg-[#FE7300]  text-[#fff] rounded-[10px]'>Позвонить</button>
              <button
               className='p-3 bg-[#00CD98] text-[#fff] rounded-[10px]'>Через ВОТ</button>
              <button
               className='p-3 bg-[#008DFF] text-[#fff] rounded-[10px]'>ДОБАВИТЬ КОРЗИНУ</button>
            </div>

           </div>
      ))
    }

    </>
  )
}

export default ProductItem