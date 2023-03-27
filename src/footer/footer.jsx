import React from 'react';

import './footer.css';
// 
import logofooter from '../footer/img/logo.svg'
import telegram from '../footer/img/telegramm.svg'
import ok from '../footer/img/ok.svg'
import facebook from '../footer/img/facebook.svg'
import watsapp from '../footer/img/watsapp.svg'
import viber from '../footer/img/viber.svg'
import inst from '../footer/img/instagramm.svg'
import vk from '../footer/img/vk.svg'

import mir from '../footer/img/mir2.svg'
import gpay from '../footer/img/googlePay2.svg'
import visa from '../footer/img/visa2.svg'
import wbmoney from '../footer/img/webmoney2.svg'
import yandex from '../footer/img/yandex2.svg'
import masterCard from '../footer/img/master card2.svg'
// 

const footer = () => {
  return (
    <div className='footer'>

        <div className='container'>

            <div className='footer-top'>
{/* ------------ */}
            <div className='footer-left-1'>
                <img src={logofooter} alt="" />

                <h3 className='flh3'>8 495 259 25 00
                Sale@kkshop.ru
                </h3>
                {/* <h3></h3> */}
                <h5>Москва, ул. Шаболовка, д. 34, стр. 7</h5>
            </div>
{/* --------------------------- */}
            <div className='footer-left2'>

            <div className='txt-1'>
                <p className='p-1'>Каталог</p>
                <br />
                <div className='txt-2'>

                    <p>Очищение</p>
                    <p>Пилинги и скрабы</p>
                    <p>Тоники</p>
                    <p>Кремы</p>
                    <p>Концентраты</p>
                    <p>Концентраты с ферментами</p>
                    <p>Сыворотки</p>
                    <p>Эссенции</p>
                    <p>Эмульсии и гели</p>
                    <p>Маски для лица</p>
                    <p>Жемчужная линия</p>
                    <p>Уход за телом</p>
                    <p>Уход за волосами</p>
                    <p>Наборы и аксессуары</p>

                </div>

             </div>

            </div>

{/* --------------------- */}

            <div className='footer-right1'>

                <h3>Информация</h3>
                <br />
                <p>Клуб косметологов </p>
                <p>Сертификаты</p>
                <p>Доставка и Оплата</p>
                <p>Конфиденциальность</p>
                <p>Контакты</p>
                <p>Блог</p>
                <p>Возврат</p>

            </div>
{/* ---------------------- */}
                <div className='footer-right2'>

                <h2 className='footer-righth2'>Мы в социальных сетях</h2>

                <div className='social-1'>
                <img src={telegram} alt="" />
                <img src={ok} alt="" />
                <img src={facebook} alt="" />
                <img src={watsapp} alt="" />
                <img src={viber} alt="" />
                <img src={inst} alt="" />
                <img src={vk} alt="" />
                </div>

                </div>

               

        </div>

        {/* ======================================================= */}

        <div className='footer-right3'>
                
                <div className='social-2'>
                    <img src={mir} alt="" />
                    <img src={gpay} alt="" />
                    <img src={visa} alt="" />
                    <img src={wbmoney} alt="" />
                    <img src={yandex} alt="" />
                    <img src={masterCard} alt="" />
                </div>

                </div>

        <div className='footer-bottom'>

            <div className='footer-bottomleft'>
                <div className='txt-3'>
                <p className='p-b1'>ООО «Шармира»</p>
                <br />
                <p className='p-b2'>ОГРН </p>
                <p>1167746492704</p>
                <p className='p-b2'>KK Shop © Москва 2021 Все права защищены.</p>
                </div>
            </div>
{/* ---------------------------------- */}

        <div className='footer-bottomright'>

            <h4 className='p-b3'>Все торговые марки принадлежат их владельцам. 
                Копирование составляющих частей сайта в какой бы то ни было форме без 
                разрешения владельца авторских прав запрещено.
            </h4>

        </div>
     </div>
{/* ========================================================== */}
        </div>
    </div>
  )
}

export default footer
