import { useState } from "react"
import {ProductUI} from "../navigate"
import { IProduct as Props } from "../Menu"

interface IProps {
  setValue: React.Dispatch<React.SetStateAction<Props>>
}

const Books : React.FC<IProps> = ({setValue}) => {
  const [mode, setMode] = useState<string>("book")
  return (
    <>
      <ProductUI
      setValue={setValue}
      mode = {mode}
      />
    </>
  )
}

export default Books;