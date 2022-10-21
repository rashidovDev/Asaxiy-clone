import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const FooterCenter : React.FC = () => {
  return (
    <div className='flex items-center justify-start text-[#fff] font-bold mb-3'>
      <div  className='pr-10'>
        <p className="text-[18px]">Информация</p>
        <div>
          <p>Публичная оферта (Пользовательское соглашение)</p>
          <p>Оферта для покупок в рассрочку</p>
          <p>Условия рассрочки</p>
          <p>Оплата и доставка товара</p>
          <p>Отмена заказа и возврат товара</p>
          <p>О нас</p>
        </div>
      </div>

      <div className='px-10'>
        <p className="text-[18px]">Для связи</p>
        <div>
          <p className='flex items-center'><span className='mr-2'><LocalPhoneIcon/></span><span>+998 71 200 01 05</span></p>
          <p className='flex items-center'><span className='mr-2'><MailOutlineIcon/></span><span>info@asaxiy.uz</span></p>
          <p className='flex items-center'><span className='mr-2'><LocationOnIcon/></span><span>Чиланзар 3,Ташкент</span></p>
        </div>
      </div>
      <div className='px-10 ml-32'>
        <p  className="text-[18px]">Наш Facebook</p>
        <img src={require("../../assets/about/facebook.png")} alt="facebook" />
      </div>
    </div>
  )
}

export default FooterCenter