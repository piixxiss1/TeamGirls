import React from 'react'
import './Header.css'
import IMG1 from './img/image 1.svg'
import icon1 from './img/Union.svg'
import icon2 from './img/Vector 26 (Stroke) (4).svg'
import icon3 from './img/Union (1).svg'
import icon4 from './img/Vector (6).svg'
 
const Header = () => {
  return (
    <div className='Header'>
        <div className='Header_block'>
             <img src={IMG1} alt="" className='header_logo'/>
             <ul className='nav_link'>
          <li className='menu_'>Каталог</li>
            <li className='menu_'>Клуб косметологов</li>
          <li className='menu_'>Сертификаты</li>
          <li className='menu_'>Доставка и оплата</li>
          <li className='menu_'>Доставка и оплата</li>
          <li className='menu_'>Блог</li>
        </ul>
        <p className='Icon'>
        <img src={icon1} alt="" />
          <img src={icon2} alt=""/>
            <img src={icon3} alt=""/>
            <img src={icon4} alt="" />
          </p>
        </div>
      
    </div>
  )
}
export default Header