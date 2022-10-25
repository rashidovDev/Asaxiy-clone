import { useDispatch, useSelector } from "react-redux"
import { RootState } from "./store"
import { cartAction } from "./store/Slices/cartSlice"
import { favouriteAction } from "./store/Slices/favouriteSlice"
import MySelect from "./utils/selection/MySelect"

const Favourite : React.FC = () => {

  const favourites = useSelector((state : RootState) => state.favouriteSlice.favourites)

  const dispatch = useDispatch()

  return (
    <div className="w-[70%] m-auto my-4">
        <div className="flex justify-between items-center mb-[25px]">
            <div className="text-[32px] font-semibold">Избранное</div>
        </div>
        <div>

          {favourites.map((favourite, idx) => ( 
          <div key={idx + 1} className="shadow1 flex justify-between p-3 bg-[#fff] rounded-[15px] mb-4">
            <div className="flex">
              <div className="rounded-[15px] shadow p-3 mr-4 ">
                <img className="w-[90px] h-[80px]"
                src={favourite.image} alt="imgg" />
              </div>
              <div>
                <p className="text-[20px] font-bold">{favourite.heading}</p>
              </div>
            </div>

            <div className="flex ">
              <div className="mr-8">
                <p className="mb-1 font-semibold text-[20px]">{favourite.price}</p>
                <p>{favourite.price/5} / 12 мес</p>
              </div>
              <div className="flex flex-col">
              <button 
              onClick={() => {
                dispatch(cartAction.addItemToCart({
                  id : favourite.id,
                  heading : favourite.heading,
                  image : favourite.image,
                  price : favourite.price,
                }))
              }}
              className="py-[7px] px-[20px] text-[#fff] rounded-[15px]  bg-[#008DFF] mb-[10px]">Добавить в корзину</button>
              <button 
              onClick={() => dispatch(favouriteAction.deleteItem(favourite.id))}
              className="py-[7px] px-[20px] text-[#fff] rounded-[15px]  bg-[#FE7300] mb-[10px] ">Удалить</button>
              </div>
            </div>
          </div>
          ))}
        </div>
    </div>
  )
}

export default Favourite