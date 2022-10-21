import FooterBottom from './FooterBottom'
import FooterCenter from './FooterCenter'
import FooterTop from './FooterTop'

const Footer = () => {
  return (
    <footer className='m-auto bg-[#008DFF] py-2'>
      <div className='w-[90%] m-auto'>
        <FooterTop/>
        <FooterCenter/>
        <FooterBottom/>
      </div>
    </footer>
  )
}

export default Footer