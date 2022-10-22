import { useSelector } from 'react-redux'
import { RootState } from '../store'
import CartItem from './CartItem'

interface IFix {
  fix : boolean
}

const Cart : React.FC<IFix> = ({fix}) => {
  return (
    <div className={`w-[380px] ${fix && `m-[1px]`} bg-white absolute top-[60px] z-10 right-[0px] rounded-[10px]`}>
             <CartItem />
    </div>
  )
}

export default Cart