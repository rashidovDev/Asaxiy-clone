import { useState } from "react"
import {ProductUI} from "../navigate"
import { IProduct as Props } from "../Menu"

interface IProps {
  setValue: React.Dispatch<React.SetStateAction<Props>>
}

const New : React.FC<IProps> = ({setValue}) => {
  const [isNew, setIsNew] = useState<boolean>(true)
  return (
    <>
      <ProductUI
      setValue={setValue}
      isNew={isNew}
      />
    </>
  )
}

export default New