import Layout from '../components/Layout'

export default function AboutByd() {
  return (
    <Layout>
      <section className='w-[100%]'>
        <video muted autoPlay className='w-[100%]' src="https://www.byd.com/content/dam/byd-site/uz/about-byd/video.mp4"></video>
      </section>
      {/*---section-1---*/}
      <section className='w-[100%] h-[1070px]'>
        <img className='absolute -z-10' src="https://www.byd.com/content/dam/byd-site/uz/about-byd/about-BYD-pc.jpg" alt="" />
        <div className=' w-[1401px] text-center mx-auto pt-[87px]'>
          <h1 className='text-black text-4xl font-semibold'>О компании BYD</h1>
          <p className='mt-[36px]'>Основанная в феврале <b>1995</b> года, BYD является высокотехнологичной компанией, стремящейся использовать технологические инновации для улучшения жизни. После более чем <b>27</b> лет быстрого роста BYD создала более <b>30</b> промышленных парков на <b>6</b> континентах и сыграла значительную роль в отраслях, связанных с электроникой, автомобилями, возобновляемыми источниками энергии и железнодорожным транспортом. Сосредоточив внимание на получении, хранении и применении энергии, BYD предлагает комплексные новые энергетические решения с нулевым уровнем выбросов.</p>
        </div>
      </section>
      {/*---section---*/}
      <section className='w-[100%] h-[1070px]'>
        <img className='w-[100%] absolute -z-10' src="https://www.byd.com/content/dam/byd-site/uz/about-byd/diversification-PC.jpg" alt="" />
        <h1 className='text-4xl text-white text-center font-medium pt-[125px]'>Диверсификация</h1>
        <div className='m-auto flex'>
          {/*  */}
          <div className='w-[320px] h-[530px] border m-auto mt-[192px] text-center'>
            <img className='w-[100px] mx-auto mt-[50px]' src="https://www.byd.com/content/dam/byd-site/uz/about-byd/icon1pc.png" alt="" />
            <h1 className='text-white text-2xl font-medium'>Авто</h1>
            <img className='w-[300px] hover:w-[310px] mx-auto mt-[120px]' src="https://www.byd.com/content/dam/byd-site/uz/about-byd/diversification-auto.jpg" alt="" />
          </div>
          {/*  */}
          <div className='w-[320px] h-[530px] border m-auto mt-[192px] text-center'>
            <img className='w-[100px] mx-auto mt-[50px]' src="https://www.byd.com/content/dam/byd-site/uz/about-byd/icon2pc.png" alt="" />
            <h1 className='text-white text-2xl font-medium'>Железнодорожный транспорт</h1>
            <img className='w-[300px] hover:w-[310px] mx-auto mt-[90px]' src="https://www.byd.com/content/dam/byd-site/uz/about-byd/diversification-rail-transit.jpg" alt="" />
          </div>
          {/*  */}
          <div className='w-[320px] h-[530px] border m-auto mt-[192px] text-center'>
            <img className='w-[100px] mx-auto mt-[50px]' src="https://www.byd.com/content/dam/byd-site/uz/about-byd/icon3pc.png" alt="" />
            <h1 className='text-white text-2xl font-medium'>Возобновляемая энергия</h1>
            <img className='w-[300px] hover:w-[310px] mx-auto mt-[90px]' src="https://www.byd.com/content/dam/byd-site/uz/about-byd/diversification-renewable-energy.jpg" alt="" />
          </div>
          {/*  */}
          <div className='w-[320px] h-[530px] border m-auto mt-[192px] text-center'>
            <img className='w-[100px] mx-auto mt-[50px]' src="https://www.byd.com/content/dam/byd-site/uz/about-byd/icon4pc.png" alt="" />
            <h1 className='text-white text-2xl font-medium'>Электроника</h1>
            <img className='w-[300px] hover:w-[310px] mx-auto mt-[120px]' src="https://www.byd.com/content/dam/byd-site/uz/about-byd/diversification-electronics.jpg" alt="" />
          </div>
          {/*  */}
        </div>
      </section>

      {/*---section-2---*/}

      <section className='w-[100%] h-[1070px]'>
        <img className='w-[100%] absolute -z-10' src="https://www.byd.com/content/dam/byd-site/uz/about-byd/globalization-pc2.jpg" alt="" />
        <h1 className='text-white text-4xl text-center font-semibold pt-[120px]'>Глобализация</h1>
        <p className='text-white text-center mt-[36px]'>более <b>400</b> городов, более <b>70</b> странов, <b>6</b> континентов</p>
      </section>

      {/*---section-3---*/}

      <section className='w-[100%] h-[1070px]'>
        <img className='w-[100%] absolute -z-10' src="https://www.byd.com/content/dam/byd-site/uz/about-byd/auto-pc.jpg" alt="" />
        <div className='w-[1401px] text-center mx-auto'>
          <h1 className='text-white text-4xl font-semibold pt-[120px]'>Авто</h1>
          <p className='text-white mt-[36px]'>Компания BYD разработала лидирующую в отрасли технологию Blade Battery, e-platform 3.0 и двухрежимную гибридную силовую технологию, ускоряющую переход от транспортных средств, работающих на ископаемом топливе, к электромобилям, который происходит раз в столетие.</p>
        </div>
      </section>

      {/*---section-4---*/}

      <section className='w-[100%] h-[1070px]'>
        <img className='w-[100%] absolute -z-10' src="https://www.byd.com/content/dam/byd-site/uz/about-byd/blade-battery-pc.jpg" alt="" />
        {/*  */}

        <div className='w-[80%] mx-auto'>
          <h1 className='text-white text-3xl font-semibold text-center  pt-[120px]'>Blade Battery</h1>
          {/*  */}

          <div className='w-[100%]'>

            <div className='mt-[50px] flex'>
              <div className='h-max'></div>
              <div className='w-[751px]'>
                <h1 className='text-white text-2xl font-semibold'>Повышенная безопасность</h1>
                <p className='text-white mt-[13px]'>Уникальная плоская прямоугольная форма повышает эффективность охлаждения и производительность предварительного нагрева. Blade Battery благополучно прошла тест на проникновение гвоздя без образования огня или дыма.</p>
              </div>
            </div>

            {/*  */}
            <div className='mt-[50px] flex'>
              <div className='h-max '></div>
              <div className='w-[751px]'>
                <h1 className='text-white text-2xl font-semibold'>Оптимизированная прочность</h1>
                <p className='text-white mt-[13px]'>Каждая ячейка, расположенная в виде массива в одной упаковке, служит структурной балкой, помогающей противостоять силе. Алюминиевая сотовая структура с высокопрочными панелями на верхней и нижней сторонах упаковки значительно повышает жесткость в вертикальном направлении.</p>
              </div>
            </div>
            {/*  */}
            <div className='mt-[50px] flex'>
              <div className='h-max '></div>
              <div className='w-[751px]'>
                <h1 className='text-white text-2xl font-semibold'>Большая дальность</h1>
                <p className='text-white mt-[13px]'>Использование пространства Blade Battery было увеличено более чем на 50% по сравнению с традиционными аккумуляторными блоками, что обеспечивает повышенную плотность энергии и большую дальность действия.</p>
              </div>
            </div>
            {/*  */}
            <div className='mt-[50px] flex'>
              <div className='h-max '></div>
              <div className='w-[751px]'>
                <h1 className='text-white text-2xl font-semibold'>Более длительный срок службы</h1>
                <p className='text-white mt-[13px]'>Blade Battery имеет длительный срок службы батареи с более чем 5000 циклами зарядки и разрядки.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/*---section-5---*/}

      <section className="w-[100%] h-[1070px]">
        <img className='w-[100%] absolute -z-10' src="https://www.byd.com/content/dam/byd-site/uz/about-byd/e-Platform-PC.jpg" alt="" />

        {/*  */}

        <div className='w-[100%]'>
          <h1 className='text-white text-4xl font-semibold text-center pt-[120px]'>e-Platform 3.0</h1>
          <p className='text-white text-center mt-[36px]'>Полностью используйте преимущества интеллекта, эффективности, безопасности и эстетики, которые дает электрификация.</p>
        </div>

        <div className='w-[80%] mx-auto'>

          <div className='mt-[50px] flex'>
            <div className='h-max'></div>
            <div className='w-[751px]'>
              <h1 className='text-white text-2xl font-semibold'>Безопасность</h1>
              <p className='text-white mt-[13px]'>e-Platform 3.0 удваивает жесткость всего автомобиля после интеграции Blade Battery в кузов автомобиля. Blade Battery является одновременно и накопителем энергии, и конструктивной частью. Он играет жизненно важную роль в улучшении конструкции автомобиля и обеспечении безопасности. Высокая э</p>
            </div>
          </div>

          {/*  */}
          <div className='mt-[50px] flex'>
            <div className='h-max '></div>
            <div className='w-[751px]'>
              <h1 className='text-white text-2xl font-semibold'>Высокая эффективность</h1>
              <p className='text-white mt-[13px]'>Оснащенный первой в мире серийной электрической трансмиссией 8-в-1 в стандартной комплектации, общий КПД системы достигает 89%.</p>
            </div>
          </div>
          {/*  */}
          <div className='mt-[50px] flex'>
            <div className='h-max '></div>
            <div className='w-[751px]'>
              <h1 className='text-white text-2xl font-semibold'>Интеллект</h1>
              <p className='text-white mt-[13px]'>Переходя от распределенной электронной и электрической архитектуры к интегрированной архитектуре, управляемой доменом, интерактивная эффективность и итерация системы были значительно повышены для непрерывного и автоматического обновления всего транспортного средства.</p>
            </div>
          </div>
          {/*  */}
          <div className='mt-[50px] flex'>
            <div className='h-max '></div>
            <div className='w-[751px]'>
              <h1 className='text-white text-2xl font-semibold'>Эстетика</h1>
              <p className='text-white mt-[13px]'>Автомобиль имеет более короткие свесы и более длинную колесную базу, что значительно увеличивает пространство для пассажиров; Нижняя часть кузова и более длинная колесная база расширяют аэродинамический дизайн автомобиля, снижая коэффициент аэродинамического сопротивления до 0,21Cd.</p>
            </div>
          </div>

        </div>
      </section>

      {/*---section-6---*/}

      <section className='w-[100%] h-[1070px]'>
        <img className='w-[100%] absolute -z-10' src="https://www.byd.com/content/dam/byd-site/uz/about-byd/semiconductor-chip-PC.jpg" alt="" />
        <div className='w-[1401px] text-center mx-auto'>
          <h1 className='text-white text-4xl font-semibold pt-[120px]'>Полупроводниковый чип</h1>
          <p className='text-white mt-[36px]'>Полупроводниковый чип, «ЦП» транспортных средств на новой энергии, является основной технологией всей отрасли.</p>
        </div>
      </section>

      {/*---section-7---*/}

      <section className='w-[100%] h-[1070px]'>
        <img className='w-[100%] absolute -z-10' src="https://www.byd.com/content/dam/byd-site/uz/about-byd/dilink-PC.jpg" alt="" />
        <div className='w-[1401px] text-center mx-auto'>
          <h1 className='text-white text-4xl font-semibold pt-[120px]'>Интеллектуальная система сетевого подключения BYD</h1>
          <p className='text-white mt-[36px]'>Функции смартфона интегрированы в бортовую платформу.</p>
        </div>
      </section>

      {/*---section-8---*/}

      <section className='w-[100%] h-[1070px]'>
        <img className='w-[100%] absolute -z-10' src="https://www.byd.com/content/dam/byd-site/uz/about-byd/vehicle-safety-PC.jpg" alt="" />
        <div className='w-[1401px] text-center mx-auto'>
          <h1 className='text-white text-4xl font-semibold pt-[120px]'>Безопасность транспортного средства</h1>
          <p className='text-white mt-[36px]'>Многочисленные сложные испытания для обеспечения высочайшего качества</p>
        </div>
      </section>

      {/*---section-9---*/}

      <section className='w-[100%] h-[1070px]'>
        <img className='w-[100%] absolute -z-10' src="https://www.byd.com/content/dam/byd-site/uz/about-byd/market-performance-PC.jpg" alt="" />
        <div className='w-[1401px] text-center mx-auto'>
          <h1 className='text-white text-4xl font-semibold pt-[120px]'>Рыночные показатели</h1>
          <p className='text-white mt-[36px]'>В 2022 году BYD продала по всему миру около <b>1 860 000</b> легковых автомобилей на новых источниках энергии</p>
        </div>
      </section>

      {/*---section-10---*/}

      <section className='w-[100%] h-[1070px]'>
        <img className='w-[100%] absolute -z-10' src="https://www.byd.com/content/dam/byd-site/uz/about-byd/cool-the-earth-PC.jpg" alt="" />
        <div className='w-[1401px] text-center mx-auto'>
          <h1 className='text-white text-4xl font-semibold pt-[120px]'>Охладить Землю на 1°C</h1>
          <p className='text-white mt-[36px]'>BYD работает над электрификацией городского общественного транспорта, чтобы сократить глобальные выбросы парниковых газов, предполагая «Охладить Землю на 1°C».</p>
        </div>
      </section>

      {/*---section-11---*/}

      <section className='w-[100%] h-[1070px]'>
        <img className='w-[100%] absolute -z-10' src="https://www.byd.com/content/dam/byd-site/uz/about-byd/pollution-and-emission-reduction-PC.jpg" alt="" />
        <div className='w-[1401px] text-center mx-auto'>
          <h1 className='text-white text-4xl font-semibold pt-[120px]'>Загрязнение и сокращение выбросов</h1>
          <p className='text-white mt-[36px]'>По состоянию на 19 апреля 2022 года BYD сэкономил <b>10 756 330 036</b> кг выбросов углерода, что эквивалентно посадке около 896 360 836 деревьев.</p>
        </div>
      </section>

      {/*---section-12---*/}

      <section className='w-[100%] h-[1070px]'>
        <img className='w-[100%] absolute -z-10' src="https://www.byd.com/content/dam/byd-site/uz/about-byd/social-responsibility-PC.jpg" alt="" />
        <div className='w-[1401px] text-center mx-auto'>
          <h1 className='text-black text-4xl font-semibold pt-[120px]'>Корпоративная социальная ответственность</h1>
          <p className='text-black mt-[36px]'>В начале 2020 года, в разгар Covid-19, BYD быстро отреагировала и объявила, что будет производить маски для лица, чтобы уменьшить нехватку масок во всем мире. Маски для лица BYD были доставлены более чем в <b>80</b> стран и регионов.</p>
          <p className='text-black'>BYD выполнила чертежи в течение <b>3</b> дней, завершила изготовление машин для изготовления масок в течение <b>7</b> дней и выпустила первую партию масок в течение <b>10</b> дней. Всего за <b>24</b> дня BYD построила крупнейший в мире завод по производству масок с максимальной производительностью до <b>100</b> миллионов штук в день.</p>
        </div>
      </section>
    </Layout>
  )
}
