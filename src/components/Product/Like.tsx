import React from 'react'
import {products} from "../../data"

interface IFill  {
    fill : number | string
}
const Like : React.FC<IFill> = ({fill}) => {
  return (
    <>
    {/* {products.map((item, idx) => (
          (
            <img 
            src={require("../../assets/products/filled.png")} 
            alt="heart" />
        )
    ))} */}
    </>
  )
}

export default Like