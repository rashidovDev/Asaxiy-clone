import React from 'react'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FireTruckIcon from '@mui/icons-material/FireTruck';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';

const FooterTop : React.FC = () => {
  return (
    <div className='bg-[#fff] rounded-[35px] mt-[35px] p-[30px] shadow
    grid grid-cols-4 gap-4 my-5
    '>
          <div className='flex items-center'>
            <div>
                 <Inventory2Icon sx={{fontSize : "50px", color:"#008DFF"}}/>
            </div>
            <div className='ml-3'>
                <p className=' font-bold mb-[5px]'>Больше не нужно ходить на базар</p>
                <p className='leading-[15px] w-[220px] text-slate-400'>У нас выгодны цены и доставка до дома</p>
            </div>
          </div>

          <div className='flex items-center'>
            <div>
                 <FireTruckIcon sx={{fontSize : "50px", color:"#008DFF"}}/>
            </div>
            <div className='ml-3'>
                <p className=' font-bold mb-[5px]'>Больше не нужно ходить на базар</p>
                <p className='leading-[15px] w-[220px] text-slate-400'>У нас выгодны цены и доставка до дома</p>
            </div>
          </div>

          <div className='flex items-center'>
            <div>
                 <EventRepeatIcon sx={{fontSize : "50px", color:"#008DFF"}}/>
            </div>
            <div className='ml-3'>
                <p className=' font-bold mb-[5px]'>Больше не нужно ходить на базар</p>
                <p className='leading-[15px] w-[220px] text-slate-400'>У нас выгодны цены и доставка до дома</p>
            </div>
          </div>
          <div className='flex items-center'>
            <div>
                 <CreditCardIcon sx={{fontSize : "50px", color:"#008DFF"}}/>
            </div>
            <div className='ml-3'>
                <p className=' font-bold mb-[5px]'>Больше не нужно ходить на базар</p>
                <p className='leading-[15px] w-[220px] text-slate-400'>У нас выгодны цены и доставка до дома</p>
            </div>
          </div>
    </div>
  )
}

export default FooterTop