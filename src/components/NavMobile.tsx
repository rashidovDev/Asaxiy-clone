import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store'
import { modalAction } from './store/Slices/ModalSlice'

const NavMobile = () => {

  const dispatch = useDispatch()
  const sidebar = useSelector((state : RootState) => state.modalSlice.sidebarIsVisible)
  console.log(sidebar)

  return (
    <div className='md:hidden mb-3 bg-white '>
       <div className='w-[90%] m-auto py-2 flex justify-between items-center'>
       <div className={`nav-toggle ${sidebar && "open"}`}
         onClick={() => dispatch(modalAction.toggleSidebar())}>
            <div className="bar z-40">
            </div>
        </div>
        <div>
        <img className='w-[120px]'
        src={require("../assets/navbar/logo.png")} alt="logo" />
        </div>
       </div>
      </div>
  )
}

export default NavMobile