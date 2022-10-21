import { useSelector } from 'react-redux'
import { RootState } from '../store'
import CartItem from './CartItem'

const Cart = () => {
 
  const cartItem = useSelector((state : RootState) => state.cartSlice.items)

  return (
    <div className='w-[380px] bg-white absolute top-[60px] z-10 right-[0px] rounded-[10px]'>
             <CartItem />
    </div>
  )
}

export default Cart