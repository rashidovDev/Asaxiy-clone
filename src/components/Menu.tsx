import {FC, useState} from 'react'
import {Navbar, Sliders, Products,ProductModal,CategoryModal,OneClickModal, About,Footer} 
from "./navigate"

export type IProduct = {
  id : number | string,
  image : any,
  heading : string,
  rate : number | string,
  price : number,
  monthPrice : number | string,
  comment : number | string, 
}

const Menu : FC = () => {

  const [value, setValue] = useState <IProduct> ({
    id :'' ,
    image :'' ,
    heading : '',
    rate : '',
    price : 0,
    monthPrice :'' ,
    comment : '',
  })

  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
    <div className='bg-[#F4F7FD]'>
    <Navbar/>
    <OneClickModal/>
    <CategoryModal/>
    <ProductModal value={value}/>
    <Sliders/>
    <Products setOpen={setOpen} value={value} setValue={setValue}/>
    <About/>
    <Footer/>
    </div>
    </>
  )
}

export default Menu