import { books, products } from "../data"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IProduct as Props } from "./Menu";
import { useDispatch } from "react-redux";
import { productAction } from "./store/Slices/productSlice";
import { oneClickAction } from "./store/Slices/oneClickSlice";
import { cartAction } from "./store/Slices/cartSlice"; 
import {useState} from "react"
import { favouriteAction } from "./store/Slices/favouriteSlice"; 
import Star from "./Star"; 
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ReactPaginate from "react-paginate"
import {IProduct} from "../data"
import MySelect from "./utils/selection/MySelect"


interface IProps {
  setValue: React.Dispatch<React.SetStateAction<Props>>,
  mode? : string,
  isNew? : boolean,
  isDiscount? : boolean, 
}

const ProductUI : React.FC <IProps> = ({setValue,mode,isNew}) => {

  const dispatch = useDispatch()

  const [fill, setFill] = useState<boolean>(false)
   
  const openOneClick = () => {
    dispatch(oneClickAction.toggle())
  }

  const openToggle = () => {
    dispatch(productAction.toggle())
  }

  const getData = (product : IProduct["product"]) => {
      if(isNew){
        return product.filter(item => item.new === isNew)
      }
      else{
         return product.filter(item => item.type === mode)
      }
  }

  const newItem = getData(products)

  const [sortData, setSortData] = useState<string>('')
  console.log(sortData)

  const getSortData = (srt : string, product : IProduct["product"]) => {
    if ( srt === "min") {
    return product.sort((a , b) => a.price - b.price)
    }
    else if(srt === "max"){
    return product.sort((a , b) => b.price - a.price)  
    }
    else if(srt === "rateMin"){
    return product.sort((a , b) => a.rate - b.rate)
    }
    else if(srt === "rateMax"){
    return product.sort((a , b) => b.rate - a.rate)
    }
    else {
        return product
    }
  }

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
              src={require("../assets/products/logo1.png")} alt="logo1" />
        </div>
        <div className="md:w-[75%]  relative pb-[110px]">

            <div className="flex justify-end mb-5">
                 <MySelect setSortData = {setSortData}/>
                  </div>

            <div className=' grid grid-cols-4 gap-4'>

             {sortProducts.slice(pagesVisited, pagesVisited + usersPerPage)
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
              <img  
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
              className = "w-[20px] h-[20px] absolute top-12 right-4 cursor-pointer"
              src={require(`../assets/products/${fill ?  `filled.png` : `unfill.png`}`)}
              alt="unfill" />
              {
                product.new && ( <div className="p-1 bg-[#FF0000] text-[#fff] w-[65px] absolute top-4
                flex justify-center rounded-[10px] text-[11px]">
               НОВИНКА
               </div>)
              }
             </div>
             ))}
             {/* {newItem.length > 8 && ()} */}
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
    </div>
     </>
  )
}

export default ProductUI