import {FC, useState} from 'react'
import {Navbar, Sliders, Products,ProductModal,CategoryModal,OneClickModal} 
from "./navigate"
import { IProduct as IState } from '../data'
import ProductItem from './ProductItem'


const Menu : FC = () => {

  const [value, setValue] = useState <IState["product"] | null> (null)
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
    <Navbar/>
    <OneClickModal/>
    <CategoryModal/>
    <ProductModal value={value}/>
    <div className='bg-[#F4F7FD]'>
    <Sliders/>
    <Products setOpen={setOpen} setValue={setValue}/>
    </div>
    </>
  )
}

export default Menu