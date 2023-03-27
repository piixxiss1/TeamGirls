import React from 'react'
import img1 from './img/Rectangle 5.svg'
import img2 from './img/Rectangle 7 (1).svg'
import './Main.css'
const Main = () => {
  return (
    <div className='Main'>
      <div className='part1'>
        <img className='img1' src={img1} alt="" />
        <div className="textInImg1">
          <h1>SKINDOM</h1>
          <h2>Специальные цены только до 30 апреля</h2>
          <p>Перейти в каталог</p>
          </div>
          </div>
            <div className="part2">
              <div className="up">
                     <img src={img2} alt="" />
                     <div className='upText'>
                  <h1>Ведущий эксперт на российском рынке профессиональной косметики из Кореи—ККshop™</h1>
                  <p>Мы делаем мир профессиональной корейской косметики доступным для каждого косметолога в 
                    России, предоставляя возможность работать с лучшими достижениями корейских учёных и специалистов в
                     области сохранения здоровья и ухода за кожей</p>
                    <h3>Подробнее →</h3>
                    </div>
              </div>
              <div className='buttom'>
                <ul>
               <li>Безупречный состав и эффективность</li>
                 <li> Натуральность и экологичность</li>
                  <li>Наличный и безналичный расчет</li>
                  <li>Доставка по всей России</li>
                </ul>
                </div>
            </div>
    </div>
  )
}

export default Main ;