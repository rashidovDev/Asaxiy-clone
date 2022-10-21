import { paying } from '../../data'
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const FooterBottom : React.FC = () => {
  return (
    <div className=' text-[#fff] font-bold text-[14px]'>
      <div className='flex justify-center items-center border-t border-b border-slate-400 py-3'>
      <div className='flex pr-5'>
          <p className='pr-3 '>Виды оплаты :</p>
          {
            paying.map((item, idx) => (
              <div key={idx}>
              <img className='w-[55px] h-[30px] mr-1'
              src={item.image} alt="item" />
              </div>
            ))
          }  
      </div>
      <div className='flex items-center justify-start'>
          <div><p>Мы в соц. сетях :</p></div> 
          <div className='flex items-center'>
          <FacebookIcon sx={{ marginLeft:"8px"}}/>
          <TelegramIcon sx={{ marginLeft:"8px"}}/>
          <InstagramIcon sx={{ marginLeft:"8px"}}/>
          <YouTubeIcon sx={{ marginLeft:"8px"}}/>
          </div>
      </div>
      </div>
      <p className='text-center py-3 text-[16px] font-semibold'>2015-2022 Интернет-магазин asaxiy.uz: Бытовая техника и др. Доставка товаров осуществляется во все регионы. Все права защищены.</p>
    </div>
  )
}

export default FooterBottom