import {FC, useState} from 'react'
import { Routes, Route } from "react-router-dom";
import {Navbar, Favourite, Products,ProductModal,New,Clothes,Gadget,
Books,Discount,Conditioner,CategoryModal,OneClickModal,About,Footer,} 
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

  return (
    <>
    <div className='bg-[#F4F7FD]'>
    <Navbar/>

    <OneClickModal/>
    <CategoryModal/>
    <ProductModal value={value}/>
     <Routes>
      <Route path='/' element={<Products value={value} setValue={setValue}/>}/>
      <Route path='/favourite' element={<Favourite/>}/>
      <Route path='/new' element={<New setValue={setValue}/>}/>
      <Route path='/clothes' element={<Clothes/>}/>
      <Route path='/books' element={<Books/>}/>
      <Route path='/discount' element={<Discount/>}/>
      <Route path='/gadget' element={<Gadget/>}/>
      <Route path='/conditioner' element={<Conditioner/>}/>
     </Routes>
    <About/>
    <Footer/>
    </div>
    </>
  )
}

export default Menu