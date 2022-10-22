import React from "react"
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { cartAction } from "../store/Slices/cartSlice";

const CartItem : React.FC = () => {

  const cartItem = useSelector((state : RootState) => state.cartSlice.items)
  const totalAmount = useSelector(( state : RootState) => state.cartSlice.totalAmount)
  const dispatch = useDispatch()

  return (
    <div className=''>
         <div className="p-3">
         {cartItem.map((item:any, idx:number) => (
         <div key={idx + 1} className='cart rounded-[15px] p-2 flex justify-between items-center w-full my-3'>
          <div className="flex items-center w-[60%]">
            <img 
            className='md:w-[50px] mr-2 '
            src={item.image} alt="product" />
            <p className="text-[14px] leading-[20px] text-[#008DFF] pt-2 font-semibold">{item.heading}</p>
          </div>
           <p className="text-[13px] flex items-center justify-center font-[700]">
            <span className="mr-2">{item.price} сум</span> 
           <span 
           onClick={() => dispatch(cartAction.deleteItem(item.id))}
           ><ClearIcon sx={{fontSize:"20px",fontWeight:800,cursor:"pointer"}}/> </span></p>
         </div>
         ))}
         </div>
         <div className="bg-[#F1F9FF]">
          <div className="p-3">
             <div className="flex justify-between items-center">
              <p>Сумма</p>
              <p>{totalAmount}</p>
             </div>
             <div className="flex flex-col justify-center ">
             <button className="w-[80%] py-[12px]  rounded-[10px] text-[#fff] text-[20px] bg-[#008DFF] m-auto mb-3">Оформить покупку</button>
             <button className="w-[80%] m-auto py-[12px] rounded-[10px] text-[20px]">Перейти в Корзинку</button>
             </div>
          </div>
         </div>
    </div>
  )
}

export default CartItem