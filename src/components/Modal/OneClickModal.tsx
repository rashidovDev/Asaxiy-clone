import {useDispatch, useSelector} from "react-redux"
import OneClick from "../OneClick"
import { RootState } from "../store"
import { oneClickAction } from "../store/Slices/oneClickSlice"

const Modal = () => {

  const dispatch = useDispatch()

  const closeToggle = () => {
    dispatch(oneClickAction.toggle())
  }

  const oneClick = useSelector((state : RootState) => state.oneClick.oneClickIsVisible)
         
  return (
    <div onClick={closeToggle}
     className={`fixed bg-[rgba(0,0,0,.5)]  top-0 left-0 bottom-0 right-0 z-10
    ${oneClick ? `justify-center items-center flex` : `hidden`}`}>
        <div className={`relative w-[450px] ${oneClick && `h-[200px]`}
        rounded-[15px] bg-white m-auto justify-center items-center flex`} onClick={(e) => e.stopPropagation()}>
          <OneClick/>
        </div>
    </div>
  )
}

export default Modal