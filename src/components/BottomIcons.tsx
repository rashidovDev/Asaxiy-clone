import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import Account from './Account';
import Fade from 'react-reveal/Fade';
import { modalAction } from './store/Slices/ModalSlice';

const BottomIcons : React.FC = () => {   
 
  const total = useSelector((state : RootState) => state.cartSlice.totalQuantity)
  const account = useSelector((state : RootState) => state.modalSlice.accountIsVisible)

  const dispatch = useDispatch()

  const openToggle = () => {
    dispatch(modalAction.toggleOneClick())
  }

  return (
    <div className='md:hidden fixed z-10 w-[100%] bottom-0 bg-[#fff] pb-1 pt-2 '>
        <div className='grid grid-cols-4 w-[95%] m-auto'>
        <Link className='no-underline text-[#555] flex flex-col items-center' to="/">
         <HomeOutlinedIcon sx={{ fontSize : "35px" }}/>
        <p className='text-[14px]'>Главная</p>
        </Link>
        <Link className='no-underline text-[#555] flex flex-col items-center' to="/">
         <GridViewOutlinedIcon sx={{ fontSize : "35px" }}/>
        <p className='text-[14px]'>Каталог</p>
        </Link>
        <Link className='no-underline text-[#555] flex flex-col items-center relative' to="/cartmobile">
         <ShoppingCartOutlinedIcon sx={{ fontSize : "35px" }}/>
        <p className='text-[14px]'>Корзинка</p>
        {
           total > 0 && (
            <p className='absolute top-1 right-4
            w-[16px] h-[16px] flex justify-center items-center rounded-full text-[12px]
             text-[#fff] bg-[#008DFF]'>{total}</p>
           )
        }

        </Link>
        <Link 
        onClick={(e) => {
          e.stopPropagation()
          openToggle()
        }}
        className='no-underline text-[#555] flex flex-col items-center' to="/">
        <PermIdentityOutlinedIcon sx={{ fontSize : "35px" }}/>
        <p className='text-[14px]'>Кабинет</p>
        </Link>
        </div>
        {account && (
        <div className='absolute -top-[100px] right-[130px] bg-black'>
        <Fade bottom>
        <Account/>
        </Fade>
        </div>
        )}
    </div>
  )
} 

export default BottomIcons