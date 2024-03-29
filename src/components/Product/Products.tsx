import { books, products } from "../../data"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IProduct as Props } from "../Menu";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../store/Slices/cartSlice";
import {useState} from "react"
import { favouriteAction } from "../store/Slices/favouriteSlice";
import Star from "../Star";
import Sliders from "../Sliders";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AboutTop from "../about/AboutTop";
import ReactPaginate from "react-paginate"
import Like from "./Like";
import React from "react"
import { modalAction } from "../store/Slices/ModalSlice";
import 'react-toastify/dist/ReactToastify.css';
import { notify } from "../utils/toast/Toast";
import { RootState } from "../store";
import ProductType from "../ProductType";

interface IProps {
  setValue: React.Dispatch<React.SetStateAction<Props>>
  value : Props
}

const Products : React.FC <IProps> = ({setValue,value}) => {

  const dispatch = useDispatch()

  const favourites = useSelector((state : RootState) => state.favouriteSlice.favourites)

  const [fill, setFill] = useState<boolean>(false)

  const openOneClick = () => {
    dispatch(modalAction.toggleOneClick())
  }

  const openToggle = () => {
    dispatch(modalAction.toggleProduct())
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
    <ProductType/>
    <div className='w-[90%] m-auto md:flex mt-5'>
        <div className='md:w-[23%] w-[95%] m-auto mt-0 mb-3 md:mr-5 pt-[70px] books 
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

        <div className='md:w-[75%] md:mt-0  w-[95%] mx-auto grid md:grid-cols-4 grid-cols-2 gap-3 relative pb-[110px]'>     
             {products.slice(pagesVisited, pagesVisited + usersPerPage)
             .map((product, idx) => (
             <div key={idx + 1} className="rounded-[12px] bg-[#fff] p-3 books relative h-[390px] md:h-[390px]">
              <img className="w-[70%] m-auto md:h-[160px] h-[100px]"
              src={product.image}
               alt="product" />            
              <p className="text-[15px] font-semibold h-[40px] pt-3 truncate">{product.heading}</p>
              <div className="md:flex justify-start items-center">
                <div className="pr-3"><Star rate={product.rate}/></div>
                <div className="text-[13px] text-slate-400"><span></span><span className="font-semi
                bold"><ChatBubbleOutlineIcon sx={{ fontSize : "13px"}}/> {product.comment} отзывов</span></div>
              </div>
              <p className="text-[20px] my-[1px] font-semibold">{product.price}</p>
              <p className="text-slate-700 font-[500]">{product.monthPrice} so'm/ 12 oy</p>
              <div className=" md:flex items-center md:right-3 left-4 absolute bottom-3">
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
              className="bg-[#00CD98] mr-3 rounded-[10px] p-2 text-[12px] w-[90%] md:w-[120px]
              text-[#fff] md:mb-0 mb-2 ">Рассрочка</button>
              <button onClick={() => {
                notify("Успешно добавлено")
              }}
              className="bg-[#008DFF] text-[12px] rounded-[10px] p-2 text-[#fff] md:w-[120px] w-[90%] md:mb-0 mb-2"
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
                notify("Товар добавлен в корзину")
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
              }}
              className = "w-[20px] h-[20px] absolute top-12 right-4 cursor-pointer">
              <Like fill={favourites.findIndex( fav => fav.id === product.id) !== -1}/>
              </div>
              {
                product.new && ( <div className="p-1 bg-[#FF0000] text-[#fff] w-[65px] absolute top-4
                flex justify-center rounded-[10px] text-[11px]">
               НОВИНКА
               </div>)
              }
              
             </div>
             ))}
             <div className='absolute bottom-0 right-0'>
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