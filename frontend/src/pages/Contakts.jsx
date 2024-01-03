import React from 'react'
import Layout from '../components/Layout'

export default function Contakts() {
  return (
    <Layout>
      <div>
        {/*---section-1---*/}
        <section className='w-full relative h-screen bg-center bg-cover -z-10 bg-[url("https://www.byd.com/content/dam/byd-site/en/contact/contact.jpg")]'>
          <h1 className='ml-32 text-6xl text-white font-medium pt-96'>  С НАМИ</h1>
        </section>
        {/*---section-2---*/}
        <section className='w-full'>
          <div className='shadow-two w-[80%] mx-auto'>
            <div className='w-full bg-gray-200 pt-32  text-center shadow-one'>
              <div className='w-[100%] mx-auto'>
                <h1 className='text-3xl text-black font-semibold'>Глобальная штаб-квартира</h1>
                <p className='text-xl text-gray-700 mt-5'><b>БИД Компания Лимитед</b></p>
                <p className='text-xl text-gray-400 mt-5'>Адрес: № 3009, BYD Road, Пиншань, Шэньчжэнь, провинция Гуандун, Китай</p>
                <p className='text-xl text-gray-400 mt-5'>ТЕЛ: +86-755-89888888</p>
              </div>
              {/*---_---*/}
              <div className='w-[100%] mx-auto pt-32'>
                <h1 className='text-3xl text-black font-semibold'>Америка</h1>
                <p className='text-xl text-gray-700 mt-5'><b>ООО «БИД Моторс»</b></p>
                <p className='text-xl text-gray-400 mt-5'>Адрес: 1800 S. Figueroa St. Лос-Анджелес, Калифорния 90015.</p>
                <p className='text-xl text-gray-400 mt-5'><a className='text-red-600' href="tel:213-748-3980">ТЕЛ: 213-748-3980</a></p>
                <p className='text-xl text-gray-400 mt-1'>Электронная почта: <a className='text-red-600' href="info.na@byd.com" target="_blank">info.na@byd.com</a></p>
                {/*  */}
                <p className='text-xl text-gray-700 mt-5'><b>BYD Чили СпА</b></p>
                <p className='text-xl text-gray-400 mt-5'>Адрес: Комната 701, Бухарест 150, Сантьяго, Чили, 7510018.</p>
                <p className='text-xl text-gray-400 mt-5'>ТЕЛ: +56 2 2902 3017 / +56 2 2814 6063</p>
              </div>
              {/*---_---*/}
              <div className='w-[100%] mx-auto pt-32'>
                <h1 className='text-3xl text-black font-semibold'>Европа</h1>
                <p className='text-xl text-gray-700 mt-5'><b>БИД Европейское Б.В.</b></p>
                <p className='text-xl text-gray-400 mt-5'>Адрес: s-Gravelandseweg 256, 3125 BK Schiedam, Нидерланды.</p>
                <p className='text-xl text-gray-400 mt-5'>ТЕЛ: +31 10 2070888</p>
              </div>
              {/*---_---*/}
              <div className='w-[100%] mx-auto pt-32'>
                <h1 className='text-3xl text-black font-semibold'>Азиатско-Тихоокеанский регион</h1>
                <p className='text-xl text-gray-700 mt-5'><b>BYD Japan Co. Ltd.</b></p>
                <p className='text-xl text-gray-400 mt-5'>Адрес: Portside Dia-Bldg.5F, 10-35 Сакаэ-чо, Канагава-ку, Иокогама-си, Канагава-Кен, 221-0052 Япония</p>
                <p className='text-xl text-gray-400 mt-5'>ТЕЛ: <a className='text-red-600' href="tel:045-620-9788"> 045-620-9788 </a>/<a className='text-red-600' href="tel:045-620-9799"> 045-620-9799</a></p>
                <p className='text-xl text-gray-700 mt-5'><b>BYD Корейская компания Ltd.</b></p>
                <p className='text-xl text-gray-400 mt-5'>Адрес: 58, Пухан-ро 177беон-гиль, Согу, Инчхон, Республика Корея (22856)</p>
                <p className='text-xl text-gray-400 mt-5'>ТЕЛ: +82 32 579 8818</p>
                <p className='text-xl text-gray-700 mt-5'><b>BYD Australia Pty. Ltd.</b></p>
                <p className='text-xl text-gray-400 mt-5'>Адрес: офис 102, уровень 1, 2 Lyonpark Road, Macquarie Park NSW 2113</p>
                <p className='text-xl text-gray-400 mt-5'>ТЕЛ: <a className='text-red-600' href="tel:02%207251%204441"> 02 7251 4441</a></p>
                <p className='text-xl text-gray-700 mt-5'><b>BYD India Pvt. ООО</b></p>
                <p className='text-xl text-gray-400 mt-5'>Адрес: D2 и D8 Индустриальный парк Сипкот, Иррунгаттукоттай, Шриперумбудур (ТК), Канчипурам (ДТ), Тамилнаду-602 105</p>
                <p className='text-xl text-gray-700 mt-5'><b>BYD Малайзия Sdn. Бхд.</b></p>
                <p className='text-xl text-gray-400 mt-5'>Адрес: уровень 30, Северная башня Гарденс, Мид-Вэлли-Сити, Лингкаран Сайед Путра, 59200 Куала-Лумпур.</p>
                <p className='text-xl text-gray-400 mt-5'>Тел: +65-64082135 / +65-87982895</p>
              </div>
              {/*---_---*/}
              <div className='w-[100%] mx-auto pt-32 pb-52'>
                <h1 className='text-3xl text-black font-semibold'>Ближний Восток и Африка</h1>
                <p className='text-xl text-gray-400 mt-5'>Электронная почта: <a className='text-red-600' href="infomea@byd.com" target="_blank">infomea@byd.com</a></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>

  )
}

// https://www.byd.com/en/contact-us