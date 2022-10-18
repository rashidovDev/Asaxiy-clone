import {FC} from 'react'
import Modal from './Modal/Modal'
import {Navbar, Sliders} from "./navigate"
import Timer from './Timer'
import Category from './Category'

const Menu : FC = () => {
  return (
    <>
    <Navbar/>
    <Sliders/>
    <Modal>
        <Category/>
    </Modal>
    </>
  )
}

export default Menu