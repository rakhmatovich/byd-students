import React from 'react'
import Layout from '../components/Layout'
import Slider from '../components/Slide'
import BladeBattery from '../components/BladeBattery'

export default function BydSong() {

  return (
    <Layout>
      {/*---section-1---*/}
      <img src="https://www.byd.com/content/dam/byd-site/uz/product/song/section_1%20.jpg" alt="section_1%20" />
      <div className="fix"></div>
      {/*---section-2---*/}
      <section className='flex p-32'>
        <div className='w-[50%] mx-auto'>
          <p className='w-full hover:opacity-80'>
          Для обеспечения превосходных характеристик и эффективности в модели используется современный двигатель 1,5 л/1,5 Ti и электрическая гибридная система EHS, обеспечивающая сочетание производительности и энергоэффективности, экономию заряда аккумулятора при движении на короткие расстояния и экономию топлива при длительных поездках. - дальнее вождение. Благодаря столь же эффективному запуску двигателя, как у автомобиля с ДВС, и ощущениям от вождения, как у чистого электромобиля, эта модель впечатляет вас во всех отношениях.ц
          </p>
        </div>
        <div className='ml-20'>
          <img src="https://www.byd.com/content/dam/byd-site/uz/product/song/section1-1.jpg" alt="" />
        </div>
      </section>
      {/*---section-3---*/}
      <Slider />
      {/*---section-4---*/}
      <section className='w-[100%]'>
        <h1 className='ml-12 text-4xl w-[650px] m-20 font-semibold'>
          ПОПУЛЯРНЫЙ: Современный
          изящный дизайн в авторской подаче
        </h1>
        <div className='bg-gray-200 w-[100%] flex'>
          <img className='w-[50%]' src="https://www.byd.com/content/dam/byd-site/uz/product/song/section2-14.jpg" alt="" />
          <div className='ml-20 m-auto w-[547px]'>

            <h1 className='mt-auto text-black text-2xl'>
              Тормозные огни в виде линии горизонта
            </h1>
            <p className='mt-5 text-gray-500'>Динамичный как гоночный автомобиль, а тормозные фонари</p>
            <p className='text-gray-500'> созданы для того, чтобы блистать и впечатлять.</p>
          </div>
        </div>
        {/*  */}
        <div className='bg-gray-200 w-[100%] flex'>
          <div className='ml-20 m-auto w-[547px]'>

            <h1 className='mt-auto text-black text-2xl'>
              Изысканный дизайн, вдохновленный образом ныряющего дракона
            </h1>
            <p className='mt-5 text-gray-500'>Динамичный как гоночный автомобиль, а тормозные фонари</p>
            <p className='text-gray-500'> созданы для того, чтобы блистать и впечатлять.</p>
          </div>

          <img className='w-[50%]' src="https://www.byd.com/content/dam/byd-site/uz/product/song/section2-2.jpg" alt="" />
        </div>
        {/*  */}
        <div className='bg-gray-200 w-[100%] flex'>
          <img className='w-[50%]' src="https://www.byd.com/content/dam/byd-site/uz/product/song/section2-3.jpg" alt="" />
          <div className='ml-20 m-auto w-[547px]'>

            <h1 className='mt-auto text-black text-2xl'>
              Кристаллические светодиодные фары головного света и дневные ходовые огни «Драконий глаз» с пучком света в виде трех семерок («777»)
            </h1>
            <p className='mt-5 text-gray-500'>Динамичный как гоночный автомобиль, а тормозные фонари</p>
            <p className='text-gray-500'> созданы для того, чтобы блистать и впечатлять.</p>
          </div>
        </div>
      </section>

      {/*---section-5---*/}

      <section className='w-[100%]'>
        <div className='mt-[64px] ml-[50px]'>
          <h1 className='text-3xl w-[50%] font-s'>
            РОСКОШНЫЙ: Люкс-интерьер с
            премиальными эстетикой и атмосферой
          </h1>
        </div>
        <div className='bg-gray-100 mt-[64px]'>
          <div className=' flex'>
            <img className='w-[50%]' src="https://www.byd.com/content/dam/byd-site/uz/product/song/section3-1.jpg" alt="" />
            <div className="ml-20 m-auto w-[547px]">
              <h1 className='mt-auto text-black text-2xl'>Комфортная подвесная кабина B-класса</h1>
              <p className='mt-5 text-gray-500'>В его дизайне отразилась азиатская эстетика, связанная с почитанием дракона, рождая особую игру светотени, которая дополнена воздушным внутренним убранством, где слились воедино техническая мысль, элегантность и красота.</p>
            </div>
          </div>
          {/*  */}
          <div className='flex'>
            <div className="ml-20 m-auto w-[547px]">
              <h1 className='mt-auto text-black text-2xl'>Широкая колесная база для просторного интерьера</h1>
              <p className='mt-5 text-gray-500'>Очень просторный салон вмещает пять сидений шириной 1890 мм и обладает колесной базой 2765 м, которые можно встретить в моделях C-класса. Транспортное средство отличается достаточным пространством для коленей, обеспечивая совершенный комфорт во время поездки.</p>
            </div>
            <img className='w-[50%]' src="https://www.byd.com/content/dam/byd-site/uz/product/song/section3-2.jpg" alt="" />
          </div>
        </div>
        {/*  */}
        <div className=' flex'>
          <img className='w-[50%]' src="https://www.byd.com/content/dam/byd-site/uz/product/song/section3-3.jpg" alt="" />
          <div className="ml-20 m-auto w-[547px]">
            <h1 className='mt-auto text-black text-2xl'>Встроенные сиденья «Спина Дракона»</h1>
            <p className='mt-5 text-gray-500'>Совмещенные сиденья вдохновлены дизайном «Спина Дракона», идеально повторяя очертания тела, и возможность регулировки в разных направлениях также способствует абсолютному комфорту в пути.</p>
          </div>
        </div>
        {/*  */}
        <div className='flex'>
          <div className="ml-20 m-auto w-[547px]">
            <h1 className='mt-auto text-black text-2xl'>Круговая разноцветная подсветка</h1>
            <p className='mt-5 text-gray-500'>В подсветке используется 31 оттенок, по одному на каждый день месяца, для романтических поездок с пульсирующим ритмом.</p>
            <p className='mt-5 text-gray-700'>Очиститель воздуха от механических включений менее 2,5 мкм (PM2.5)</p>
            <p className='mt-5 text-gray-500'>Переключающаяся с экрана на панели управления, система охраняет ваше здоровье на ходу.</p>
          </div>
          <img className='w-[50%]' src="https://www.byd.com/content/dam/byd-site/uz/product/song/section3-67.jpg" alt="" />
        </div>
      </section>

      {/*---section-6---*/}

      <section className='bg-black w-[100%] p-20'>
        <img className='w-[905px] m-auto' src="https://www.byd.com/content/dam/byd-site/uz/product/song/section3-4.jpg" alt="" />
        <div className="text-center m-auto w-[905px] mt-10">
          <p className='text-white'>
            Обладая характеристиками высокой скорости отклика и малой задержкой, дисплей на панели представляет собой большой экран, который интеллектуально подключается ко всему автомобилю с помощью голосового управления, что рождает несравнимые ощущения. Продуманная компоновка мультимедийных технологий для развлечений на ходу.
          </p>
        </div>
        <div className='flex mt-10'>
          <h1 className='text-2xl text-white m-auto'>Нефиксированный адаптивный экран, 15,6 дюймов, 8-ядер</h1>
          <h1 className='text-2xl text-white m-auto'>BYD в самом сердце</h1>
        </div>
      </section>

      {/*---section-7---*/}

      <section className='w-[100%]'>
        <h1 className='w-[1248px] text-4xl ml-36 m-[64px]'>
          ИНТЕЛЛЕКТУАЛЬНАЯ ПОДДЕРЖКА: Умная технология
          для безопасного и надежного вождения
        </h1>
        <div className='bg-gray-100 w-[100%] pb-16'>
          <div className='flex'>
            <img className='w-[50%]' src="https://www.byd.com/content/dam/byd-site/uz/product/song/section4-2.jpg" alt="" />
            <div className='ml-20 m-auto w-[547px]'>
              <h1 className='mt-auto text-black text-2xl font-medium'>Дизайн кузова для безопасности</h1>
              <p className='mt-5 text-gray-500'>В автомобиле использована конструкция повышенной жесткости для поглощения энергии, и его кузов, выполненный из высокопрочной стали и закрывающий поверхность на 62 %, обеспечивает всестороннюю защиту. Ваша уверенность и безопасное движение — наша главная забота.</p>
            </div>
          </div>
          {/*  */}
          <div className='flex'>
            <div className='ml-20 m-auto w-[547px]'>
              <h1 className='mt-auto text-black text-2xl font-medium'>BYD Ассистент движения с интеллектуальной поддержкой</h1>
              <p className='mt-5 text-gray-500'>Высокопроизводительная умная система помощи при вождении* со встроенными функциями ADAS, например ACC, BSD, DOW, FCW, LDA, LKA, TJA и TSR, благодаря которым вождение становится простым и легким.</p>
            </div>
            <img className='w-[50%]' src="https://www.byd.com/content/dam/byd-site/uz/product/song/section4-4.jpg" alt="" />
          </div>
          {/*  */}
          <div className='flex'>
            <img className='w-[50%]' src="https://www.byd.com/content/dam/byd-site/uz/product/song/section4-5.jpg" alt="" />
            <div className='ml-20 m-auto w-[547px]'>
              <h1 className='mt-auto text-black text-2xl font-medium'>Голографический панорамный обзор 360°</h1>
              <p className='mt-5 text-gray-500'>Трехмерный панорамный вид для контроля за окружающей обстановкой без слепых зон.</p>
            </div>
          </div>
          {/*  */}
          <div className='flex'>
            <div className='ml-20 m-auto w-[547px]'>
              <h1 className='mt-auto text-black text-2xl font-medium'>Супергибридный аккумулятор Blade Battery DM-i</h1>
              <p className='mt-5 text-gray-500'>Надежные и долговечные фирменные аккумуляторы Blade Battery обеспечивают полную защиту, проходя испытания на проникновение самой высокой сложности.</p>
            </div>
            <img className='w-[50%]' src="https://www.byd.com/content/dam/byd-site/uz/product/song/section4-3.jpg" alt="" />
          </div>
        </div>
      </section>

      {/*---section-8---*/}

      <BladeBattery />

    </Layout>

  )
}