import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { cartAction } from '../store/Slices/cartSlice';
import { useNavigate } from 'react-router-dom';

const CartMobile: React.FC = () => {

    const products = useSelector((state: RootState) => state.cartSlice.items)
    const total = useSelector((state: RootState) => state.cartSlice.totalQuantity)
    const totalPrice = useSelector((state: RootState) => state.cartSlice.totalAmount)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div className='md:hidden'>
            <div className='w-[90%] m-auto'>
                <h3 className='mt-5 mb-4'>Корзина</h3>
                <div className='bg-[#008DFF] py-2 px-3 text-[#fff] flex items-center justify-between rounded-[10px]'>
                    <span className='font-semibold'>Стандартный покупки</span>
                    <div className='bg-[#fff] text-[#008DFF] text-[14px] rounded-full px-1 text-center w-[20px] h-[20px]'>{total}</div>
                </div>
                <div className='mt-4 w-[90%] m-auto flex mb-4 items-center justify-between'>
                    <h6>Товары на рассрочку</h6>
                    <div className='bg-[#008DFF] text-[#fff] text-[14px] rounded-full px-1 text-center w-[20px] h-[20px]'>{total}</div>
                </div>
                {
                    products.length > 0
                        ?
                        (
                            <div>
                                {products.map((product, idx) => (
                                    <div key={idx + 1} className='bg-[#fff] rounded-[10px] mb-3 py-2 px-3 flex items-center justify-between'>
                                        <div className='pr-2'>
                                            <img
                                                className='w-[200px] h-[140px]'
                                                src={product.image} alt="cartproduct" />
                                        </div>
                                        <div className='ml-2'>
                                            <p className='font-bold'>Futbolka Yoki 'Akang kuchaydi uji'</p>
                                            <div>
                                                <p className='pb-[1px] font-semibold'>{product.price} сум</p>
                                                <p onClick={() => dispatch(cartAction.deleteItem(product.id))}
                                                    className='pt-[1px] text-[12px] text-[#FE8242] cursor-pointer'><span><DeleteIcon /></span><span>Удалить</span></p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className='bg-[#fff] rounded-[10px]'>
                                    <div className='text-center py-3 border-b border-[#999]'>
                                        <p className='mb-[5px] text-[#008DFF] font-bold'>В корзину {total} товара</p>
                                        <p className='mb-[5px] font-semibold text-[20px]'>Общая сумма:</p>
                                        <p className='text-[25px] font-semibold'>{totalPrice}</p>
                                    </div>
                                    <div className='flex justify-center py-4'>
                                        <button 
                                        onClick={() => {
                                            navigate("/")
                                        }}
                                        className='bg-[#FE7300] w-[90%] py-[10px] rounded-[10px] text-[#fff]'>
                                            Оформить
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                        :
                        (
                            <div className='text-[#008DFF]'>
                                <h5 className='text-center mt-5 mb-3'>У вас нет покупки</h5>
                                <p className='text-center'><LocalMallOutlinedIcon sx={{ fontSize: "75px" }} /></p>
                            </div>
                        )
                }

            </div>
        </div>
    )
}

export default CartMobile