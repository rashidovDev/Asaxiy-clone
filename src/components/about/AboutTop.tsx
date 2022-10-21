import { about } from "../../data"
import {useState} from "react"

const AboutTop : React.FC  = () => {
  
  const [text1, setText1] = useState<boolean>(false)
  const [text2, setText2] = useState<boolean>(false)

  return (
    <div className="bg-[#fff] p-4 rounded-[15px] mb-5">
      <p className="text-[35px]  font-bold">{about.heading}</p>
      <p className="text-[17px]">{about.title}</p>
      <div className="border text-slate-300 rounded-[15px]">
         <div 
         onClick={() => {
          setText1(!text1) 
          setText2(false)}}
         className="border-b text-slate-300 cursor-pointer text-[17px] text-[#111] py-3 px-4">{about.note1}</div>
         {
          text1  &&  <div className="border-b text-slate-300 text-[17px] text-[#111] py-3 px-4">{about.note11}</div>
         }
         <div 
         onClick={() =>{
          setText2(!text2)
          setText1(false)
         } }
         className="border-b text-slate-300 text-[17px] cursor-pointer text-[#111] py-3 px-4">{about.note2}</div>
         {
          text2  &&  <div className=" text-[17px] text-[#111] py-3 px-4">{about.note22}</div>
         } 
      </div>
      <div className="my-3">
      <p className="mb-[2px] font-[450]">{about.name}</p>
      <p className="mb-[2px] font-[450]">Регистрация:{about.registration}</p>
      <p className="mb-[2px] font-[450]">ИНН:{about.innn}</p>
      <p className="mb-[2px] font-[450]">Директор:{about.ceo}</p>
      </div>
    </div>
  )
}

export default AboutTop