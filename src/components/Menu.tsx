import React, {FC, useState} from 'react'
import { Routes, Route } from "react-router-dom";
import {Navbar, Favourite, Products,ProductModal,New,Clothes,Gadget,Computers,
Books,Conditioner,Another,CategoryModal,OneClickModal,About,Sidebar,
Footer,Payment,Deliver,BottomIcons,NavMobile,SidebarModal,CartMobile,Toast} 
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
    <Sidebar/>
    <Toast/>
    <div className='bg-[#F4F7FD] relative'>
    <NavMobile/>
    <Navbar/>
    <BottomIcons/>
    <OneClickModal/>
    <SidebarModal/>
    <CategoryModal/>
    <ProductModal value={value}/>
     <Routes>
      <Route path='/' element={<Products value={value} setValue={setValue}/>}/>
      <Route path='/favourite' element={<Favourite/>}/>
      <Route path='/new' element={<New setValue={setValue}/>}/>
      <Route path='/clothes' element={<Clothes setValue={setValue}/>}/>
      <Route path='/books' element={<Books setValue={setValue}/>}/>
      <Route path='/laptop' element={<Computers setValue={setValue}/>}/>
      <Route path='/another' element={<Another setValue={setValue}/>}/>
      <Route path='/gadget' element={<Gadget setValue={setValue}/>}/>
      <Route path='/airconditioner' element={<Conditioner setValue={setValue}/>}/>
      <Route path='/cartmobile' element={<CartMobile/>}/>
      <Route path='/payment' element={<Payment/>} />
      <Route path='/deliver' element={<Deliver/>} />
     </Routes>
    <About/>
    <Footer/>
   
    </div>
    </>
  )
}

export default Menu