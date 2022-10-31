import {useDispatch, useSelector} from "react-redux"
import { RootState } from "../store"
import { IProduct as Props } from "../Menu"
import ProductItem from "../Product/ProductItem"
import { modalAction } from "../store/Slices/ModalSlice"

interface IProps {
  value : Props
}

const Modal : React.FC<IProps> = ({value}) => {

    const dispatch = useDispatch()

    const closeToggle = () => {
      dispatch(modalAction.toggleProduct())
    }
  
    const product = useSelector((state : RootState) => state.modalSlice.productItemIsVisible)
         
  return (
    <div onClick={closeToggle} className={`fixed bg-[rgba(0,0,0,.5)]  top-0 left-0 bottom-0 right-0 z-10
    ${product ? `justify-center items-center flex` : `hidden`}`}>
        <div className={`relative w-[750px] ${product && `h-[400px]`}
        rounded-[15px] bg-white m-auto  p-3 flex`} onClick={(e) => e.stopPropagation()}>
            <ProductItem
             value = {value}
             />
        </div>
    </div>
  )
}

export default Modal