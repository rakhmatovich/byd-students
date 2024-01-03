import React from 'react'
import Layout from '../components/Layout'
import BladeBattery from '../components/BladeBattery'
import HanSlider1 from '../components/HanSlider1'
import HanSlider2 from '../components/HanSlider2'

export default function BydHan() {

  return (
    <Layout>
      <div>
        {/*---section-1---*/}
        <section className='w-full relative h-screen bg-center bg-cover bg-[url("/HanPhotos/HanPhoto-1.jpg")]'>
          <h1 className='text-white pt-24 text-center text-4xl font-semibold'>Звездная безопасность</h1>
        </section>

        {/*---section-2---*/}
        <BladeBattery />
        {/*---section-3---*/}

        <section className='w-full relative h-screen bg-center bg-cover bg-[url("/HanPhotos/HanPhoto-2.jpg")]'>
          <div className='w-[1064px] mx-auto'>
            <h1 className='text-white pt-24 text-center text-4xl font-semibold'>Помощник по безопасности водителя</h1>
            <p className='text-white text-center'>ACC-S&G (адаптивное управление с функцией Stop and Go), EBA (ассистент экстренного торможения), TJA (ассистент движения), BSD (обнаружение слепых зон), DOW (предупреждение о приоткрытой двери) и FCT (лобовое столкновение/торможение)</p>
          </div>
        </section>

        {/*---section-4---*/}

        <section className='w-[100%]'>
          <h1 className='ml-12 text-4xl w-[650px] m-20 font-semibold'>
            ПОПУЛЯРНЫЙ: Современный
            изящный дизайн в авторской подаче
          </h1>
          <div className='bg-gray-200 w-[100%] flex'>
            <img className='w-[50%]' src="/HanPhotos/HanPhoto-3.jpg" alt="" />
            <div className='ml-20 m-auto w-[547px]'>

              <h1 className='mt-auto text-black text-2xl font-semibold'>
                Задние фонари в стиле «Китайский узел».
              </h1>
              <p className='mt-5 text-gray-500'>Вольфганг Йозеф Эггер, международный директор по дизайну BYD, является творческим умом и творческим человеком, стоящим за моделью Han EV Genesis. Лицо дракона на передней панели основано на семейном дизайне и дополнено черным спортивным комплектом рояльного цвета. Задние фонари с китайскими элементами Knot впервые используются на серийной модели BYD.</p>
            </div>
          </div>
          {/*  */}
          <div className='bg-gray-200 w-[100%] flex'>
            <div className='ml-20 m-auto w-[547px]'>

              <h1 className='mt-auto text-black text-2xl font-semibold'>
                Изысканный дизайн, вдохновленный образом ныряющего дракона
              </h1>
              <p className='mt-5 text-gray-500'>По мнению Мишеля Яуха-Паганетти, международного директора по дизайну интерьеров BYD (бывшего менеджера по дизайну Центра перспективного дизайна Mercedes-Benz), интерьер создан для максимальной роскоши.</p>
              <p className='mt-5 text-gray-500 font-semibold'>• «Умные»</p>
              <p className='mt-5 text-gray-500'>ароматы Ароматические композиции поставляются компанией Givaudan, поставщиком таких люксовых брендов, как Chanel и Dior.</p>
            </div>

            <img className='w-[50%]' src="/HanPhotos/HanPhoto-4.jpg" alt="" />
          </div>
          {/*  */}
          <div className='bg-gray-200 w-[100%] flex'>
            <img className='w-[50%]' src="/HanPhotos/HanPhoto-5.jpg" alt="" />
            <div className='ml-20 m-auto w-[547px]'>

              <h1 className='mt-auto text-black text-2xl font-semibold'>
                Сиденья из натуральной кожи, а салон отделан натуральным деревом и карбоном.
              </h1>
              <p className='mt-5 text-gray-500'>Интерьер выполнен в изысканном стиле с максимальной элегантностью. Сиденья из телячьей кожи сочетаются с внутренней отделкой из натурального дерева или углеродного волокна, а алюминий отличается передовыми технологиями волочения и трафаретной печати.</p>
            </div>
          </div>
        </section>

        {/*---section-5---*/}
        <HanSlider1 />
        {/*---section-6---*/}

        <section className='w-full relative h-screen bg-center bg-cover bg-[url("/HanPhotos/HanPhoto-9.jpg")]'>
          <h1 className='text-white pt-24 text-center text-4xl font-semibold'>Версия 4WD с высоким приводом:</h1>
        </section>

        {/*---section-7---*/}

        <section className='w-[100%]'>
          <h1 className='ml-12 text-4xl w-[650px] m-20 font-semibold'>
            Звездная производительность
          </h1>
          {/*\---/---\---/*/}
          <div className='bg-gray-200 w-[100%] flex'>
            <img className='w-[50%]' src="/HanPhotos/HanPhoto-10.jpg" alt="" />
            <div className='ml-20 m-auto w-[547px]'>

              <h1 className='mt-auto text-black text-2xl font-semibold'>
                3,9 секунды 0–100 км/ч
              </h1>
              <p className='mt-5 text-gray-500'>Этот электромобиль является самым быстрым автомобилем китайского производства и способен ускоряться в кратчайшие сроки. Ощущение возможности увеличить скорость за короткий промежуток времени воодушевляет.</p>
            </div>
          </div>
          {/*  */}
          <div className='bg-gray-200 w-[100%] flex'>
            <div className='ml-20 m-auto w-[547px]'>

              <h1 className='mt-auto text-black text-2xl font-semibold'>
                Интеллектуальный электронный усилитель полного привода и активная парковка DiSus-C.
              </h1>
              <p className='mt-5 text-gray-500'>Интеллектуальный полный привод обеспечивает безопасное и гибкое управление. Возможность регулировки 50 раз в секунду в 10 раз быстрее, чем у семейной модели. Переключение между передним и полным приводом происходит плавно и легко. Интеллектуальное электронное управление DiSus-C обеспечивает высокий уровень комфорта, контроля, безопасности и эффективности.</p>
            </div>

            <img className='w-[50%]' src="/HanPhotos/HanPhoto-11.jpg" alt="" />
          </div>
          {/*  */}
          <div className='bg-gray-200 w-[100%] flex'>
            <img className='w-[50%]' src="/HanPhotos/HanPhoto-12.jpg" alt="" />
            <div className='ml-20 m-auto w-[547px]'>

              <h1 className='mt-auto text-black text-2xl font-semibold'>
                Система кондиционирования воздуха, в которой используется высокоэффективный тепловой насос, работающий в широком...
              </h1>
              <p className='mt-5 text-gray-500'>При более низких температурах потребление энергии системой кондиционирования воздуха снижается примерно на 40 %, что значительно увеличивает запас хода.</p>
            </div>
          </div>
          {/*  */}
          <div className='bg-gray-200 w-[100%] flex'>
            <div className='ml-20 m-auto w-[547px]'>

              <h1 className='mt-auto text-black text-2xl font-semibold'>
                Brembo@ гоночный класс серого цвета, 4-поршневой фиксированный суппорт
              </h1>
              <p className='mt-5 text-gray-500'>Превосходное управление тормозами</p>
            </div>

            <img className='w-[50%]' src="/HanPhotos/HanPhoto-13.jpg" alt="" />
          </div>
        </section>
        {/*---section-8---*/}
        <section className='w-full relative h-screen bg-center bg-cover bg-[url("/HanPhotos/HanPhoto-14.jpg")]'>
          <h1 className='text-white pt-24 text-center text-4xl font-semibold'>Супердальняя версия:</h1>
        </section>
        {/*---section-9---*/}
        <section className='w-full pl-10 pr-10 pt-32 pb-32 flex'>
          <div className='w-[50%] mx-auto hover:opacity-75 mt-auto mb-auto pl-10'>
            <h1 className='text-black text-xl font-semibold'>Класс E-Range CLTC: 715 км</h1>
            <p>Благодаря большому запасу хода этой модели вам больше не придется беспокоиться о расстоянии.</p>
          </div>
          <div className='w-[50%] mx-auto'>
            <img src="/HanPhotos/HanPhoto-15.jpg" alt="" />
          </div>
        </section>
        {/*---section-10---*/}
        <HanSlider2 />
      </div>
    </Layout>
  )
}