import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { Link } from 'react-router-dom';

const BottomIcons : React.FC = () => {
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
        </Link><Link className='no-underline text-[#555] flex flex-col items-center' to="/">
         <ShoppingCartOutlinedIcon sx={{ fontSize : "35px" }}/>
        <p className='text-[14px]'>Корзинка</p>
        </Link><Link className='no-underline text-[#555] flex flex-col items-center' to="/">
         <PermIdentityOutlinedIcon sx={{ fontSize : "35px" }}/>
        <p className='text-[14px]'>Кабинет</p>
        </Link>
        </div>
    </div>
  )
}

export default BottomIcons