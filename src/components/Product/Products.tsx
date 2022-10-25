import { books, products } from "../../data"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IProduct as Props } from "../Menu";
import { useDispatch } from "react-redux";
import { productAction } from "../store/Slices/productSlice";
import { oneClickAction } from "../store/Slices/oneClickSlice";
import { cartAction } from "../store/Slices/cartSlice";
import {useState} from "react"
import { favouriteAction } from "../store/Slices/favouriteSlice";
import Star from "../Star";
import Sliders from "../Sliders";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AboutTop from "../about/AboutTop";
import ReactPaginate from "react-paginate"
import Like from "./Like";

interface IProps {
  setValue: React.Dispatch<React.SetStateAction<Props>>
  value : Props
}

const Products : React.FC <IProps> = ({setValue,value}) => {
  const dispatch = useDispatch()

  const [fill, setFill] = useState<string | number>("")
  console.log(fill)

  const openOneClick = () => {
    dispatch(oneClickAction.toggle())
  }

  const openToggle = () => {
    dispatch(productAction.toggle())
  }

  const [pageNumber, setPageNumber] = useState<number>(0)

  const usersPerPage : number = 8;
  const pagesVisited : number = pageNumber * usersPerPage;

  const pageCount = Math.ceil(products.length / usersPerPage);

  const changePage = ({selected} : any) => {
    setPageNumber(selected)
  }

  return (
     <>
      <Sliders/>
    <div className='w-[90%] m-auto flex mt-5'>
        <div className='md:w-[23%] mr-5 pt-[70px] books 
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
              src={require("../../assets/products/logo1.png")} alt="logo1" />
        </div>
      <div className='md:w-[75%] grid grid-cols-4 gap-4 relative pb-[110px]'>
             
             {products.slice(pagesVisited, pagesVisited + usersPerPage)
             .map((product, idx) => (

             <div key={idx + 1} className="rounded-[12px] bg-[#fff]  p-3 books relative md:h-[400px]">
              <img className="w-[70%] m-auto h-[160px]"
              src={product.image}
               alt="product" />            
              <p className="text-[15px] font-semibold h-[50px] pt-3 truncate">{product.heading}</p>
              <div className="flex justify-start items-center ">
                <div className="pr-3"><Star rate={product.rate}/></div>
                <div className="text-[13px] text-slate-400 "><span></span><span className="font-semi
                bold"><ChatBubbleOutlineIcon sx={{ fontSize : "13px"}}/> {product.comment} отзывов</span></div>
              </div>
              <p className="text-[20px] my-[1px] font-semibold">{product.price}</p>
              <p className="text-slate-700">{product.monthPrice} so'm/ 12 oy</p>
              <div className="flex items-center absolute bottom-3">
              <button 
              onClick={() => {
                openToggle()
                setValue(
                    {
                       id : product.id,
                       image : product.image,
                       heading : product.heading,
                       rate : product.rate,
                       price : product.price,
                       monthPrice : product.monthPrice,
                       comment : product.comment,
                    }
              )
              }}
              className="bg-[#00CD98] mr-3 rounded-[10px] p-2 text-[12px]
              text-[#fff]">Рассрочка</button>
              <button onClick={openOneClick}
              className="bg-[#008DFF] text-[12px] rounded-[10px] p-2 text-[#fff]"
              >Купить в 1 клик</button>
              </div>
              <div
              onClick={() => {
                dispatch(cartAction.addItemToCart( 
                  {
                    id : product.id,
                    heading : product.heading,
                    image : product.image,
                    price : product.price,
                  }
                ))
              }}
              className="absolute top-3 right-3 cursor-pointer">
              <ShoppingCartIcon sx={{padding:"5px",background:"#008DFF",color:"#fff", borderRadius:"8px"}}/>
              </div>
              <div  
               onClick={() => {
                dispatch(favouriteAction.addItemToFavourite(
                  {
                    id : product.id,
                    heading : product.heading,
                    image : product.image,
                    price : product.price
                  }
                ))
                 setFill(product.id)
              }}
              className = "w-[20px] h-[20px] absolute top-12 right-4 cursor-pointer">
              <Like fill={fill}/>
              </div>
              {
                product.new && ( <div className="p-1 bg-[#FF0000] text-[#fff] w-[65px] absolute top-4
                flex justify-center rounded-[10px] text-[11px]">
               НОВИНКА
               </div>)
              }
              
             </div>
             ))}
             <div className='absolute bottom-0 right-5'>
    <ReactPaginate 
          previousLabel={"Previous"}
          nextLabel = {"Next"}
          pageCount = {pageCount}
          onPageChange = {changePage}
          containerClassName = {"paginationButtons"}
          previousLinkClassName = {"previousButton"}
          nextLinkClassName =  {"nextButton"}
          disabledClassName = {"paginationDisabled"}
          activeClassName = {"paginationActive"}
          />
    </div>
        </div>
    </div>
    <AboutTop/>
     </>
  )
}

export default Products