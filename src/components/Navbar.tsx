import SearchIcon from '@mui/icons-material/Search';
import {FC, useState} from "react"
import { Link } from 'react-router-dom';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import FireTruckOutlinedIcon from '@mui/icons-material/FireTruckOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { RootState } from './store';
import React from "react"

import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear'; 

import { navigation } from '../data';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './Cart/Cart';
import Account from './Account';
import { modalAction } from './store/Slices/ModalSlice';

const Navbar : FC = () => {

  const favourites = useSelector((state : RootState) => state.favouriteSlice.favourites)
  const category = useSelector((state : RootState)  => state.modalSlice.categoryIsVisible)
  const favouriteQuantity = useSelector((state : RootState) => state.favouriteSlice.totalFavourite)
  const totalQuantity = useSelector((state : RootState) => state.cartSlice.totalQuantity)

  const dispatch = useDispatch()

  const openCloseToggle = () => {
    dispatch(modalAction.toggleCategory())
  }

  const [drop, setDrop] = useState<boolean>(false)
  const [isAccount, setIsAccount] = useState<boolean>(false)
  const [fix, setFix] = useState<boolean>(false)

  const getCart = () => {
      setFix(!fix)
  }

  return (
    <nav className='bg-[#fff] hidden md:block md:mb-5'>
        {/* TOP */}
        <div className='hg'>
        <div className='flex items-center w-[90%] m-auto py-3 justify-between'>
          <div>
            <img className='w-[170px]'
            src={require("../assets/navbar/logo.png")} alt="logo"/>
          </div>
        <div className='bg-[#008DFF] md:h-[38px] flex items-center md:w-[700px] rounded-[12px]'>
            <input type="text" className='bg-[#fff] outline-0 border-2 md:w-[605px]
             rounded-[12px] border-[#008DFF] px-[10px] py-[5px]' placeholder='fefnjn'/>
            <p className='m-0 p-0 text-[#fff] cursor-pointer'><span><SearchIcon/></span> <span> Искать</span></p>
        </div>
        <div className='flex items-center'>
           
            <Link to="/payment" className='flex flex-col no-underline items-center cursor-pointer  ml-3'>
            <CreditCardOutlinedIcon sx={{fontSize : "40px", color:"#333"}}/>
            <Link className='text-[15px] no-underline' to="/payment">
                Оплатить
            </Link>
            </Link>
            <Link to="/deliver" 
            className='flex flex-col no-underline items-center cursor-pointer  ml-3'>
            <FireTruckOutlinedIcon sx={{fontSize : "40px", color:"#333"}}/>
            <Link className='text-[15px] no-underline' to="/deliver">
            Отследить
            </Link>
            </Link>
            <div className='flex flex-col items-center cursor-pointer  ml-3'>
            <LanguageIcon sx={{fontSize : "40px"}}/>
            <Link className='text-[15px] no-underline' to="/">
            Русский
            </Link>
            </div>
            <div
             onMouseEnter={() => 
              fix ? setDrop(drop) : setDrop(true)
              }
             onMouseLeave={() =>
              fix ? setDrop(drop) : setDrop(false)}
              onClick={getCart}
            className={`flex flex-col items-center  ml-3 relative`}>
            <ShoppingCartOutlinedIcon sx={{fontSize : "40px"}}/>
            <Link className='text-[15px] no-underline' to="/">
            Корзинка
            </Link>
            <p className='absolute top-1 right-4
            w-[16px] h-[16px] flex justify-center items-center rounded-full text-[12px]
             text-[#fff] bg-[#008DFF]'>{totalQuantity}</p>
              {drop && <Cart fix={fix}/>} 
            </div>
            <Link to="/favourite" className='flex flex-col no-underline  items-center ml-3 relative'>
            <FavoriteBorderIcon sx={{fontSize : "40px", color:"#333"}}/>
            <Link className='text-[15px] no-underline relative' to="/favourite">
            Избранное
            </Link>
            <p className='absolute top-1 right-4
            w-[16px] h-[16px] flex justify-center items-center rounded-full text-[12px]
             text-[#fff] bg-[#008DFF]'>{favouriteQuantity}</p>
            </Link>
            <div className='flex flex-col items-center ml-3 relative'>
            <div className='cursor-pointer' onClick={() => setIsAccount(!isAccount)}><AccountCircleOutlinedIcon sx={{fontSize : "40px"}}/></div> 
            <Link className='text-[15px] no-underline' to="/">
            Кабинет
            </Link>
            {isAccount && <Account/>} 
            </div>
            
        </div>

        </div>
        </div>

        {/* BOTTOM */}

        <div className="md:w-[90%] m-auto flex justify-between items-center py-2">
        <div 
        onClick={openCloseToggle}
        className=' items-center hidden md:flex'>
          {category ?  <ClearIcon  sx={{color:"#008DFF", marginRight:"3px"}}/> :
            <MenuIcon  sx={{color:"#008DFF", marginRight:"3px"}}/>}
                <p className='pt-[15px] text-[#222] font-semibold'>Все категории</p>
                </div>
        {
            navigation.map((item, idx) => (
                <div  key={idx} className="flex items-center " >
                <Link className='no-underline mr-[7 0px] text-[16px]
                text-[#222] font-semibold ' 
                to={item.href}>
                    {item.name}
                </Link>
                
                </div>
  
            ))
        }
        </div>


    </nav>
  )
}

export default Navbar