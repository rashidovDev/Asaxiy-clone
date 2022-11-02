import React from 'react';
import { books, products } from "../data"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IProduct as Props } from "./Menu";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "./store/Slices/cartSlice"; 
import {useState} from "react"
import { favouriteAction } from "./store/Slices/favouriteSlice"; 
import Star from "./Star"; 
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ReactPaginate from "react-paginate"
import { getSortData, getData } from './methods/getSortData';
import MySelect from "./utils/selection/MySelect"
import { modalAction } from './store/Slices/ModalSlice';
import Like from './Product/Like';
import { RootState } from './store';
import { notify } from './utils/toast/Toast';


interface IProps {
  setValue: React.Dispatch<React.SetStateAction<Props>>,
  mode? : string,
  isNew? : boolean,
  isDiscount? : boolean, 
}

const ProductUI : React.FC <IProps> = ({setValue,mode,isNew}) => {

  const dispatch = useDispatch()

  const [fill, setFill] = useState<boolean>(false)

  const favourites = useSelector((state : RootState) => state.favouriteSlice.favourites)
   
  const openOneClick = () => {
    dispatch(modalAction.toggleOneClick())
  }

  const openToggle = () => {
    dispatch(modalAction.toggleProduct())
  }

  const newItem = getData(products,isNew,mode)

  const [sortData, setSortData] = useState<string>('')

  const sortProducts = getSortData(sortData, newItem)

  const [pageNumber, setPageNumber] = useState<number>(0)

  const usersPerPage : number = 8;
  const pagesVisited : number = pageNumber * usersPerPage;

  const pageCount = Math.ceil(newItem.length/usersPerPage);

  const changePage = ({selected} : any) => {
    setPageNumber(selected)
  }

  return (
     <>
    <div className='w-[90%] m-auto md:flex mt-5'>
        <div className='md:w-[23%] w-[95%] m-auto mt-0 mb-3 md:mr-5 pt-[70px] books hidden md:inline
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
        <div className="md:w-[75%] w-[95%] mx-auto md:mt-0 relative pb-[110px]">

            <div className="flex justify-end mb-5">
                 <MySelect setSortData = {setSortData}/>
                  </div>
            <div className=' grid md:grid-cols-4 grid-cols-2 gap-3'>
             {sortProducts.slice(pagesVisited, pagesVisited + usersPerPage)
             .map((product, idx) => (

             <div key={idx + 1} className="rounded-[12px] bg-[#fff]  p-3 books relative h-[390px]">
              <img className="w-[70%] m-auto md:h-[160px] h-[100px]"
              src={product.image}
               alt="product" />
              
              <p className="text-[15px] font-semibold h-[40px] pt-3 truncate">{product.heading}</p>
              <div className="md:flex justify-start items-center ">
                <div className="pr-3"><Star rate={product.rate}/></div>
                <div className="text-[13px] text-slate-400 "><span></span><span className="font-semi
                bold"><ChatBubbleOutlineIcon sx={{ fontSize : "13px"}}/> {product.comment} отзывов</span></div>
              </div>
              <p className="text-[20px] my-[1px] font-semibold">{product.price}</p>
              <p className="text-slate-700 font-[500]">{product.monthPrice} so'm/ 12 oy</p>
              <div className="md:flex items-center absolute bottom-3 md:right-3 left-4">
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
              className="bg-[#00CD98] mr-3 rounded-[10px] p-2 text-[12px] w-[90%] md:w-[120px] md:mb-0 mb-2 
              text-[#fff]">Рассрочка</button>
              <button onClick={openOneClick}
              className="bg-[#008DFF] text-[12px] rounded-[10px] p-2 text-[#fff] md:w-[120px] w-[90%] md:mb-0 mb-2 "
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
             {/* {newItem.length > 8 && ()} */}
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
    </div>
     </>
  )
}

export default ProductUI
 