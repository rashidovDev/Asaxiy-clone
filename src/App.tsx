import {FC, useEffect, useState} from "react"
import PulseLoader from "react-spinners/PulseLoader";
import Menu from "./components/Menu"

const App : FC = () => {
  
  const [loader, setLoader] = useState(false)
  useEffect(() => {
    setLoader(true)
    setTimeout(() => {
    setLoader(false)
    },2000)
  },[])

return (
  <>
  {
      loader ?  
      <div className='w-full h-screen bg-white flex justify-center items-center'>
              <PulseLoader className='' color={"#008DFF"} loading={loader} size={20} />
      </div>
      :
      <Menu/>
  }
  </>
      
  )
}

export default App