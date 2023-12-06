import React from 'react'
import Layout from '../components/Layout'

export default function Han() {
  return (
    <Layout>
      <div>
        {/*---section-1---*/}
        <section className='w-[100%]'>
          <img className='w-[100%] absolute -z-10' src="https://www.byd.com/content/dam/byd-site/uz/product/han/section_1.jpg" alt="" />
          <h1 className='text-white pt-24 text-center text-4xl font-semibold'>Звездная безопасность</h1>
        </section>

        {/*---section-2---*/}

        <section className='w-[100%] h-[1070px] mt-[934px]'>
        <img className='-z-10 w-[100%] absolute' src="https://www.byd.com/content/dam/byd-site/uz/product/song/section.jpg" alt="" />
        <div className='w-[1064px] m-auto text-center pt-32'>
          <h1 className='text-white text-4xl font-semibold'>Сверхнадежный одноячеечный аккумулятор</h1>
          <h1 className='text-white text-4xl font-semibold'>Blade Battery</h1>
          <p className='mt-5 text-white'>Емкость аккумулятора 85,4 кВт⋅ч, с большим сроком службы и дальностью пробега, задающая новый уровень безопасности</p>
          <p className='mt-5 text-white'>электромобилей.</p>
        </div>
      </section>
      </div>
    </Layout>

  )
}
