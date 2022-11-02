import React, { useState } from 'react'

interface IFill  {
    fill : boolean
}


const Like : React.FC<IFill> = ({fill}) => {

  const [isRed, setIsRed] = useState<boolean>(fill)

  const changeCase = () => {
    setIsRed(!isRed)
  }

  return (
    <> 
            <img 
            className='w-[30px]'
            onClick={changeCase}
            src={require(`../../assets/products/${isRed ? `filled.png` : `unfill.png`}`)} 
            alt="heart"/> 
    </>
  )
}

export default Like