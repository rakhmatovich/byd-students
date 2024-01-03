import React, { useState } from 'react'
import Layout from '../components/Layout'
import BladeBattery from '../components/BladeBattery'
import YaNeZnayuKakNazvat from '../components/YaNeZnayuKakNazvat'
import ChazorSlider from '../components/ChazorSlide1'

export default function Chazor() {
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  return (
    <Layout>
      <div>
        <section className='w-full h-screen bg-center bg-cover bg-[url("https://www.byd.com/content/dam/byd-site/uz/product/chazor/section_1.jpg")]'>
          <div className='flex w-[60%] mx-auto'>
            <div className='text-center text-white mx-auto mt-[940px]'>
              <h1 className='font-semibold text-4xl'>7.3s</h1>
              <p className=''>0-100km/h</p>
            </div>

            <div className='text-center text-white mx-auto mt-[940px]'>
              <h1 className='font-semibold text-4xl'>3.8L</h1>
              <p className=''>100km</p>
            </div>

            <div className='text-center text-white mx-auto mt-[940px] font-semibold'>
              <h1 className='font-semibold text-4xl'>NEDC</h1>
            </div>
          </div>
        </section>

        {/*---section-2---*/}
        <YaNeZnayuKakNazvat />
        {/*---section-3---*/}

        <section className='w-[100%]'>
          <img className='absolute -z-10' src="https://www.byd.com/content/dam/byd-site/uz/product/chazor/section_3.jpg" alt="chazor" />
          <div className='w-[100%]'>
            <h1 className='text-black text-4xl w-[1064px] mx-auto text-center font-semibold pt-24'>Впечатляющая производительность для</h1>
            <h1 className='text-black text-4xl w-[1064px] mx-auto text-center font-semibold'>мастерского уровня вождения</h1>
          </div>
          <p className='pt-[894px]'></p>
        </section>

        {/*---section-4---*/}

        <section className='w-[100%] bg-gray-100'>
          <div className='w-[100%] flex'>
            <img className='w-[50%]' src="https://www.byd.com/content/dam/byd-site/uz/product/chazor/section_3-1.jpg" alt="dvig" />

            <div className='ml-20 m-auto w-[640px]'>
              <h1 className='mt-auto text-black text-2xl font-semibold'>
                Гибридный двигатель Xiaoyun Plug-in Hybrid 1,5 л
              </h1>
              <p className='mt-5 text-gray-600 text-xl'>Познакомьтесь со звездой энергоэффективности. Новейшие технологии позволяют добиться тепловой эффективности до 43,04 % — это мощная, но при этом экономичная модель благодаря высокой эффективности.</p>
            </div>

          </div>

          {/*  */}

          <div className='w-[100%] flex'>
            <div className='ml-20 m-auto w-[640px]'>
              <h1 className='mt-auto text-black text-2xl font-semibold'>
                Быстрый: 0–100 км/ч за 7,3 с
              </h1>
              <p className='mt-5 text-gray-600 text-xl'>При максимально быстром наборе мощности, эта модель объединяет в своем характере уверенность и необузданность, пробуждая настоящую любовь к вождению.</p>
            </div>

            <img className='w-[50%]' src="https://www.byd.com/content/dam/byd-site/uz/product/chazor/section_3-2.jpg" alt="dvig" />

          </div>

          {/*  */}

          <div className='w-[100%] flex'>
            <img className='w-[50%]' src="https://www.byd.com/content/dam/byd-site/uz/product/chazor/section_3-3.jpg" alt="dvig" />

            <div className='ml-20 m-auto w-[640px]'>
              <h1 className='mt-auto text-black text-2xl font-semibold'>
                Экономичность: 3,8 л / 100 км
              </h1>
              <p className='mt-5 text-gray-600 text-xl'>Гибридная технология DM-i обеспечивает расход топлива 3,8 л / 100 км (ездовой цикл NEDC) в режиме совмещенного расхода топлива и электричества с дальностью пробега 1245 км (ездовой цикл NEDC) — хорошая поддержка на самых длинных маршрутах.</p>
            </div>

          </div>

          {/*  */}

          <div className='w-[100%] flex'>
            <div className='ml-20 m-auto w-[640px]'>
              <h1 className='mt-auto text-black text-2xl font-semibold'>
                Плавный: Система EHS Hybrid
              </h1>
              <p className='mt-5 text-gray-600 text-xl'>Отдавая приоритет электроприводу, бесступенчатый регулятор скорости уменьшает резкие рывки и неприятное ощущение при переключении скорости, рождая ощущение исключительной плавности электромобиля.</p>
            </div>

            <img className='w-[50%]' src="https://www.byd.com/content/dam/byd-site/uz/product/chazor/section_3-4.jpg" alt="dvig" />
          </div>

          {/*  */}

          <div className='w-[100%] flex pb-16'>
            <img className='w-[50%]' src="https://www.byd.com/content/dam/byd-site/uz/product/chazor/section_3-5.jpg" alt="dvig" />

            <div className='ml-20 m-auto w-[640px]'>
              <h1 className='mt-auto text-black text-2xl font-semibold'>
                Тихий: Безмятежность благодаря превосходной системе шумоподавления
              </h1>
              <p className='mt-5 text-gray-600 text-xl'>Это возможно благодаря тюнингу шасси и производительности системы шумоподавления с оптимизированной конструкцией кузова и шумоизоляцией, создавая комфорт движения в тишине.</p>
            </div>

          </div>
        </section>

        {/*---section-5---*/}

        <section className='w-[100%] mt-16'>
          <h1 className='text-black text-4xl font-semibold ml-36'>
            Интеллектуальная технология
          </h1>
          <h1 className='text-black text-4xl font-semibold ml-36'>
            для подключения и контроля
          </h1>
          <div className='w-[100%] bg-gray-100 mt-16'>

            {/* --------- */}

            <div className='w-[100%] flex'>
              <div className='w-[100%] flex'>
                <img className='w-[50%] h-[535px]' src="https://www.byd.com/content/dam/byd-site/uz/product/chazor/section_4-1.jpg" alt="dvig" />

                <div className='ml-20 m-auto w-[640px]'>
                  <h1 className='mt-auto text-black text-2xl font-semibold'>
                    Нефиксированный адаптивный экран, 15,6 дюймов, 8-ядер
                  </h1>
                  <p className='mt-5 text-gray-600 text-xl'>За счет минимальной кромки достигается соотношение габаритов дисплея и корпуса, которое равно 83 %. В сочетании с надежной жесткой конструкцией обеспечивается вращение под прямым углом в горизонтальном и вертикальном направлениях, обеспечивая вам стопроцентную уверенность, поскольку вы остаетесь на связи с миром.</p>
                </div>

              </div>

            </div>

            {/*  */}

            <div className='w-[100%] flex'>
              <div className='w-[100%] flex'>
                <div className='ml-20 m-auto w-[640px]'>
                  <h1 className='mt-auto text-black text-2xl font-semibold'>
                    Мгновенная зарядка в одно касание
                  </h1>
                  <p className='mt-5 text-gray-600 text-xl'>Мгновенная зарядка, пока вы пьете чашку кофе. Благодаря зарядному порту емкостью 17 кВт постоянного тока зарядка аккумулятора в этой модели занимает всего полчаса с уровня заряда 30 % до 80 % — и автомобиль готов двигаться дальше.</p>
                </div>

              </div>

              <img className='w-[50%] h-[535px]' src="https://www.byd.com/content/dam/byd-site/uz/product/chazor/section_4-2.jpg" alt="dvig" />
            </div>

            {/* --------- */}

          </div>
        </section>

        {/*---section-6---*/}
        <ChazorSlider />
        {/*---section-7---*/}
        <BladeBattery />
      </div>
    </Layout>
  )
}