import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from './store'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import FireTruckOutlinedIcon from '@mui/icons-material/FireTruckOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import InfoIcon from '@mui/icons-material/Info';

import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { modalAction } from './store/Slices/ModalSlice';

const Sidebar = () => {

  const sidebar = useSelector((state : RootState) => state.modalSlice.sidebarIsVisible)

  const dispatch = useDispatch()

  const closeSidebar = () => {
    dispatch(modalAction.toggleSidebar())
  }

  return (
     <div className={`bg-[#fff] fixed -translate-x-[100%] py-2 px-4 duration-500 w-[320px] h-[100%] z-20 ${sidebar && `translate-x-0`}`}>
      <div>
        <img className='w-[120px] absolute right-2 my-[2px]'
        src={require("../assets/navbar/logo.png")} alt="logo" />
      </div>
      <div className='flex flex-col mt-[80px]'>
        <Link onClick={closeSidebar} className='no-underline text-[#555] flex p-2  ' to="/payment">
        <div><CreditCardOutlinedIcon sx={{fontSize : "30px"}}/></div>
        <div><p className='pl-3 font-semibold text-[15px] pt-1'>Оплатить</p></div>
        </Link>
        <Link onClick={closeSidebar} className='no-underline text-[#555] flex p-2   ' to="/deliver">
        <div><FireTruckOutlinedIcon sx={{fontSize : "30px"}}/></div>
        <div><p className='pl-3 font-semibold text-[15px] pt-1'>Отследить заказ</p></div>
        </Link>
        <Link onClick={closeSidebar} className='no-underline text-[#555] flex p-2  ' to="/favourite">
        <div><FavoriteBorderIcon sx={{fontSize : "30px"}}/></div>
        <div><p className='pl-3 font-semibold text-[15px] pt-1'>Избранное</p></div>
        </Link>
        <Link onClick={closeSidebar} className='no-underline text-[#555] flex p-2  ' to="/new">
        <div><CardGiftcardOutlinedIcon sx={{fontSize : "30px"}}/></div>
        <div><p className='pl-3 font-semibold text-[15px] pt-1'>Новинки</p></div>
        </Link>
        <Link onClick={closeSidebar} className='no-underline text-[#555] flex p-2  ' to="/">
        <div><InfoIcon sx={{fontSize : "30px"}}/></div>
        <div><p className='pl-3 font-semibold text-[15px] pt-1'>О нас</p></div>
        </Link>
      </div>
      <div className='absolute bottom-[60px] left-[70px]'>
      <InstagramIcon sx={{ fontSize : "35px", marginLeft: "15px", color:"#008DFF"}}/>
      <TelegramIcon sx={{ fontSize : "35px", marginLeft: "15px", color:"#008DFF"}}/>
      <FacebookIcon sx={{ fontSize : "35px", marginLeft: "15px", color:"#008DFF"}}/>
      </div>
     </div>
  )
}

export default Sidebar