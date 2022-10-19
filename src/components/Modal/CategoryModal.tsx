import {useSelector} from "react-redux"
import Category from "../Category"
import { RootState } from "../store"

const Modal = () => {

    const category = useSelector((state : RootState) => state.category.categoryIsVisible)
         
  return (
    <div className={`fixed  top-[160px] left-0 bottom-0 right-0 z-10
    ${category ? `justify-center items-center flex` : `hidden`}`}>
        <div className={`relative w-[100%] ${category && `h-[580px]`}
        rounded-[15px] bg-white m-auto justify-center items-center flex`} onClick={(e) => e.stopPropagation()}>
            <Category/>
        </div>
    </div>
  )
}

export default Modal