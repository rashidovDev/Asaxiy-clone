import React from 'react'
import {products} from "../../data"

interface IFill  {
    fill : number | string
}
const Like : React.FC<IFill> = ({fill}) => {
  return (
    <>
     {fill > 0 && 
          (
            <img 
            src={require("../../assets/products/filled.png")} 
            alt="heart" />
          )
          }
    </>
  )
}

export default Like