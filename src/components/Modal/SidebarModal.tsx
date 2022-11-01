import {useDispatch, useSelector} from "react-redux"
import Sidebar from "../Sidebar"
import { RootState } from "../store"
import { modalAction } from "../store/Slices/ModalSlice"

const Modal = () => {

    const sidebar = useSelector((state : RootState) => state.modalSlice.sidebarIsVisible)

    const dispatch = useDispatch()

    const closeSidebar = () => {
      dispatch(modalAction.toggleSidebar())
    }
         
  return (
    <div onClick={closeSidebar}  className={`fixed bg-[rgba(0,0,0,.5)] top-0 left-0 bottom-0 right-0 z-10
    ${sidebar ? `flex` : `hidden`}`}>
    </div>
  )
}

export default Modal