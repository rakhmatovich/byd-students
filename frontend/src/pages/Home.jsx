
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      {/*---section-1---*/}
      <section className="section-1">
        <img className='w-100' src="https://www.byd.com/content/dam/byd-site/uz/product/song/section_1%20.jpg" alt="" />
      </section>
      <div className="fix"></div>
      {/*---section-2---*/}
      <section className='section-2'>
        <div className='section-2_txt mx-auto'>
          <p className='subtitle'>
            Для повышения эффективности и производительности модель оснащена двигателем 1,5 л / 1,5 Ti инновационного типа и электрической гибридной системой EHS. Благодаря сочетанию производительности и энергоэффективности, это обеспечивает экономию в поездках на недалекие расстояния с использованием электрической батареи и хорошую мощность в дальних поездках с использованием топливного двигателя. Благодаря эффективному запуску двигателя, как в автомобилях с двигателем внутреннего сгорания, и ощущению от вождения, аналогичного испытываемому в полностью электрическом автомобиле, эта модель поистине способна удивить.
          </p>
        </div>
        <div className='w-50 mx-auto'>
          <div>
            <img className="section-2_image" src="https://www.byd.com/content/dam/byd-site/uz/product/song/section1-1.jpg" alt="" />
          </div>
        </div>
      </section>
      {/*---section-3---*/}
      <section className='section-3'>
        <div className='section-3_car-before'>
          <img className='section-3_car-before' src="https://www.byd.com/content/dam/byd-site/uz/product/song/section1-2.jpg" alt="Быстрый" />
        </div>
      </section>
    </Layout>
  )
}
