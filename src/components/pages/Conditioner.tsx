import React, { useState } from "react"
import {ProductUI} from "../navigate"
import { IProduct as Props } from "../Menu"

interface IProps {
  setValue: React.Dispatch<React.SetStateAction<Props>>
}

const Conditioner : React.FC<IProps> = ({setValue}) => {
  const [mode, setMode] = useState<string>("conditioner")
  return (
    <>
      <ProductUI
      setValue={setValue}
      mode = {mode}
      />
    </>
  )
}

export default Conditioner;