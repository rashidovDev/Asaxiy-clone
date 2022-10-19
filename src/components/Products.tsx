import { books, products } from "../data"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IProduct as Props } from "../data";
import { useDispatch } from "react-redux";
import { productAction } from "./store/Slices/productSlice";
import { oneClickAction } from "./store/Slices/oneClickSlice";

interface IProps {
  setValue: React.Dispatch<React.SetStateAction<Props["product"] | null>>
  setOpen :  React.Dispatch<React.SetStateAction<boolean>>
}

const Products : React.FC <IProps> = ({setOpen,setValue}) => {

  const dispatch = useDispatch()
   
  const openOneClick = () => {
    dispatch(oneClickAction.toggle())
  }

  const openToggle = () => {
    dispatch(productAction.toggle())
  }

  return (
    <div className='w-[90%] m-auto flex mt-5'>
        <div className='md:w-[23%] mr-5 py-[70px] books 
        relative rounded-[10px] bg-white'>
          {books.map((book, idx) => (
            <div key={idx} className="flex justify-between px-3 py-4 border-b border-slate-200">
              <img className="w-[35%]"
              src={book.image} alt="book" />
              <div className="w-[63%]">
                <p className="text-[18px] font-bold">{book.heading}</p>
                <p className="text-[16px] text-slate-500">{book.title}</p>
              </div>
            </div>
          ))}
              <p className="absolute top-4 left-4 text-slate-500
              font-semibold text-[18px]">Книги</p>
              <img className="absolute top-2 right-2"
              src={require("../assets/products/logo1.png")} alt="logo1" />
        </div>
        <div className='md:w-[75%] grid grid-cols-4 gap-4'>
             
             {products.map((product, idx) => (

             <div key={idx + 1} className="rounded-[12px] bg-[#fff]  p-3 books relative">
              <img className="w-[70%] m-auto h-[180px]"
              src={product.image}
               alt="product" />
              <p className="text-[15px] font-semibold py-3">{product.heading}</p>
              <p className="text-[20px] font-semibold">{product.price}</p>
              <p className="text-slate-700">{product.monthPrice} so'm/ 12 oy</p>
              <div className="flex items-center absolute bottom-3">
              <button 
              onClick={() => {
                openToggle()
                setValue(
                  [
                    {
                       id : product.id,
                       image : product.image,
                       heading : product.heading,
                       rate : product.rate,
                       price : product.price,
                       monthPrice : product.monthPrice,
                       comment : product.comment
                    }
                  ]
              )
              }}
              className="bg-[#00CD98] mr-3 rounded-[10px] p-2 text-[12px]
              text-[#fff]">Рассрочка</button>
              <button onClick={openOneClick}
              className="bg-[#008DFF] text-[12px] rounded-[10px] p-2 text-[#fff]"
              >Купить в 1 клик</button>
              </div>
              <div className="absolute top-3 right-3">
              <ShoppingCartIcon sx={{padding:"5px",background:"#008DFF",color:"#fff", borderRadius:"8px"}}/>
              </div>
              <img className = "w-[20px] h-[20px] absolute top-12 right-4"
              src={require("../assets/products/unfill.png")}
              alt="unfill" />
             </div>
             ))}

        </div>
    </div>
  )
}

export default Products