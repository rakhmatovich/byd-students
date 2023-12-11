import React, { useState } from 'react'
import Layout from '../components/Layout'

export default function Chazor() {
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  return (
    <Layout>
      <div>
        <section className='w-[100%] h-[1070px]'>
          <img className='-z-10 absolute' src="https://www.byd.com/content/dam/byd-site/uz/product/chazor/section_1.jpg" alt="chazor" />
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

        <section className='w-[100%]'>
          <div className='h-[1070px]'>
            <img className='absolute w-[100%] -z-10' src="https://www.byd.com/content/dam/byd-site/uz/product/chazor/section_2.jpg" alt="chazor" />
            <h1 className='text-white text-4xl w-[1064px] mx-auto text-center font-semibold pt-24'>Дизайн в стиле «Океан», приковывающий</h1>
            <h1 className='text-white text-4xl w-[1064px] mx-auto text-center font-semibold'>взгляд и душу</h1>
          </div>

          {/*---/---\---*/}

          <div className='w-[100%] text-center'>
            <button className={`mt-[700px] w-[40px] transition-all duration-500  ${show && 'rotate-[135deg]'}`} onClick={() => setShow(!show)} onClick={() => setShow(!show)}>
              <img className='bg-white br-[50%]  h-[40px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF8VnNdKbMkivHDNI4XI3bIjmMeKqU5AiHww&usqp=CAU" alt="icon-x" />
            </button>
          </div>

          
              {/* // ---section-9--- //   */}
              <section className=' w-[100%] p-[150px]'>
                {/* 1 */}
                <div className='flex'>
                  <img className='w-[50%]' src="https://www.byd.com/content/dam/byd-site/uz/product/chazor/section_2-1.jpg" alt="" />
                  <div className='ml-20 m-auto w-[547px]'>
                    <h1 className='text-black text-2xl font-medium'>Передний дальний свет</h1>
                    <p className='mt-5 text-black'>Мощные двойные светодиодные фары переднего дальнего света словно утренняя звезда, озаряющая темное небо. Дизайн отличается матрицей в виде звезд — узнаваемый футуристический стиль для совершенного мастерства.</p>
                  </div>
                </div>

                {/* 2 */}

                <div className='flex'>
                  <div className='ml-20 m-auto w-[547px]'>
                    <h1 className='text-black text-2xl font-medium'>Задние габаритные фонари с матричной геометрией</h1>
                    <p className='mt-5 text-black'>Негаснущие задние фары дальнего света напоминают величественно раздувающиеся паруса, оставляя неизгладимые впечатления у тех, кто движется позади.</p>
                  </div>
                  <img className='w-[50%]' src="https://www.byd.com/content/dam/byd-site/uz/product/chazor/section_2-2.jpg" alt="" />
                </div>

                {/* 3 */}

                <div className='flex'>
                  <img className='w-[50%]' src="https://www.byd.com/content/dam/byd-site/uz/product/chazor/section_2-3.jpg" alt="" />
                  <div className='ml-20 m-auto w-[547px]'>
                    <h1 className='text-black text-2xl font-medium'>Безрамочная решетка в виде точечной матрицы</h1>
                    <p className='mt-5 text-black'>Решетка, вдохновленная образом ряби на воде, раздвигает рамки и рождает динамичный восхитительный дизайн, приносящий радость от вождения.</p>
                  </div>
                </div>

                {/* 4 */}

                <div className='flex'>
                  <div className='ml-20 m-auto w-[547px]'>
                    <h1 className='text-black text-2xl font-medium'>Пространство, вдохновленное океаном</h1>
                    <p className='mt-5 text-black'>Простые очертания простираются от панели управления в обе стороны. Встроенные сиденья класса премиум создают атмосферу роскошного спортивного автомобиля.</p>
                  </div>
                  <img className='w-[50%]' src="https://www.byd.com/content/dam/byd-site/uz/product/chazor/section_2-4.jpg" alt="" />
                </div>

                {/* 5 */}

                <div className='flex'>
                  <img className='w-[50%]' src="https://www.byd.com/content/dam/byd-site/uz/product/chazor/section_2-5.jpg" alt="" />
                  <div className='ml-20 m-auto w-[547px]'>
                    <h1 className='text-black text-2xl font-medium'>Динамичная палитра салона</h1>
                    <p className='mt-5 text-black'>Создающий ощущение близости океана, интерьер отличается искусной отделкой и продолжает разноцветную палитру, в которой смешиваются черный базальт, небесно-серый, серый квант и розовый цветок джакаранды.</p>
                  </div>
                </div>

              </section>
              
          {/*---/---\---*/}
        </section>

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
            <div className='w-[100%] flex'>
              <img className='w-[50%] h-[535px]' src="https://www.byd.com/content/dam/byd-site/uz/product/chazor/section_3-1.jpg" alt="dvig" />

              <div className='ml-20 m-auto w-[640px]'>
                <h1 className='mt-auto text-black text-2xl font-semibold'>
                  Гибридный двигатель Xiaoyun Plug-in Hybrid 1,5 л
                </h1>
                <p className='mt-5 text-gray-600 text-xl'>Познакомьтесь со звездой энергоэффективности. Новейшие технологии позволяют добиться тепловой эффективности до 43,04 % — это мощная, но при этом экономичная модель благодаря высокой эффективности.</p>
              </div>

            </div>

          </div>

          {/*  */}

          <div className='w-[100%] flex'>
            <div className='w-[100%] flex'>
              <div className='ml-20 m-auto w-[640px]'>
                <h1 className='mt-auto text-black text-2xl font-semibold'>
                  Быстрый: 0–100 км/ч за 7,3 с
                </h1>
                <p className='mt-5 text-gray-600 text-xl'>При максимально быстром наборе мощности, эта модель объединяет в своем характере уверенность и необузданность, пробуждая настоящую любовь к вождению.</p>
              </div>

            </div>

            <img className='w-[50%] h-[535px]' src="https://www.byd.com/content/dam/byd-site/uz/product/chazor/section_3-2.jpg" alt="dvig" />

          </div>

          {/*  */}

          <div className='w-[100%] flex'>
            <div className='w-[100%] flex'>
              <img className='w-[50%] h-[535px]' src="https://www.byd.com/content/dam/byd-site/uz/product/chazor/section_3-3.jpg" alt="dvig" />

              <div className='ml-20 m-auto w-[640px]'>
                <h1 className='mt-auto text-black text-2xl font-semibold'>
                  Экономичность: 3,8 л / 100 км
                </h1>
                <p className='mt-5 text-gray-600 text-xl'>Гибридная технология DM-i обеспечивает расход топлива 3,8 л / 100 км (ездовой цикл NEDC) в режиме совмещенного расхода топлива и электричества с дальностью пробега 1245 км (ездовой цикл NEDC) — хорошая поддержка на самых длинных маршрутах.</p>
              </div>

            </div>

          </div>

          {/*  */}

          <div className='w-[100%] flex'>
            <div className='w-[100%] flex'>
              <div className='ml-20 m-auto w-[640px]'>
                <h1 className='mt-auto text-black text-2xl font-semibold'>
                  Плавный: Система EHS Hybrid
                </h1>
                <p className='mt-5 text-gray-600 text-xl'>Отдавая приоритет электроприводу, бесступенчатый регулятор скорости уменьшает резкие рывки и неприятное ощущение при переключении скорости, рождая ощущение исключительной плавности электромобиля.</p>
              </div>

            </div>

            <img className='w-[50%] h-[535px]' src="https://www.byd.com/content/dam/byd-site/uz/product/chazor/section_3-4.jpg" alt="dvig" />
          </div>

          {/*  */}

          <div className='w-[100%] flex'>
            <div className='w-[100%] flex'>
              <img className='w-[50%] h-[535px]' src="https://www.byd.com/content/dam/byd-site/uz/product/chazor/section_3-5.jpg" alt="dvig" />

              <div className='ml-20 m-auto w-[640px]'>
                <h1 className='mt-auto text-black text-2xl font-semibold'>
                  Тихий: Безмятежность благодаря превосходной системе шумоподавления
                </h1>
                <p className='mt-5 text-gray-600 text-xl'>Это возможно благодаря тюнингу шасси и производительности системы шумоподавления с оптимизированной конструкцией кузова и шумоизоляцией, создавая комфорт движения в тишине.</p>
              </div>

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

        <section className='w-[100%] bg-black mt-16 pt-20'>
          <img className='mx-auto' src="https://www.byd.com/content/dam/byd-site/uz/product/chazor/section_5-1.jpg" alt="section_5-1" />
          <div className=''>
            <h1 className='text-center text-white w-[907px] mx-auto mt-10'>Анализ ситуации и оценка рисков, своевременное реагирование и прогнозирование движения&nbsp;— в ней есть все необходимое для безопасности водителя. Высокопроизводительная умная система помощи при вождении* со встроенными функциями ADAS, например ACC-S&amp;G, BSD, DOW, FCW, RCW, RCTA, LDA, LKA, LCA и TSR, благодаря которым вождение становится простым и легким.</h1>
          </div>
          <div className='flex mt-10 text-center'>
            <h1 className='text-white text-2xl m-[10px] w-[472px] mx-auto'>BYD Ассистент движения с интеллектуальной поддержкой</h1>
            <h1 className='text-white text-2xl m-[10px] w-[472px] mx-auto'>Прозрачный панорамный обзор 360°</h1>
            <h1 className='text-white text-2xl m-[10px] w-[472px] mx-auto'>Супергибридный аккумулятор Blade Battery DM-i</h1>
          </div><p className='pt-10'></p>
        </section>

        {/*---section-6---*/}

        <section className='w-[100%] h-[1070px]'>
          <img className='-z-10 w-[100%] absolute' src="https://www.byd.com/content/dam/byd-site/uz/product/song/section.jpg" alt="" />
          <div className='w-[1064px] m-auto text-center pt-32'>
            <h1 className='text-white text-4xl font-semibold'>Сверхнадежный одноячеечный аккумулятор</h1>
            <h1 className='text-white text-4xl font-semibold'>Blade Battery</h1>
            <p className='mt-5 text-white'>Емкость аккумулятора 85,4 кВт⋅ч, с большим сроком службы и дальностью пробега, задающая новый уровень безопасности</p>
            <p className='mt-5 text-white'>электромобилей.</p>
          </div>

          <div className='w-[100%] text-center'>
            <button className=' mt-[700px] w-[40px] hello' onClick={() => setShow2(!show2)}>
              <img className='bg-white br-[50%]  h-[40px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF8VnNdKbMkivHDNI4XI3bIjmMeKqU5AiHww&usqp=CAU" alt="icon-x" />
            </button>
          </div>
          {
            show2 ?
              // x---section-9---x //  
              <section className='mt-[50px] w-[100%] translate-y-10'>
                <div className='flex'>
                  <img className='w-[50%]' src="https://www.byd.com/content/dam/byd-site/uz/product/song/F01-Sub01.jpg" alt="" />
                  <div className='ml-20 m-auto w-[547px]'>
                    <h1 className='text-black text-2xl font-medium'>Повышенная безопасность</h1>
                    <p className='mt-5 text-black'>Сырьевой материал, фосфат железа лития, обладает рядом полезных характеристик: медленное выделение тепла, низкая теплоотдача и отсутствие выделения кислорода. Уникальная форма плоского прямоугольника также улучшает эффективность охлаждения и предварительного нагрева. Батарея Blade Battery благополучно прошла тест на пробивание гвоздя, не выделяя огня или дыма.</p>
                  </div>
                </div>

                {/*  */}

                <div className='flex'>
                  <div className='ml-20 m-auto w-[547px]'>
                    <h1 className='text-black text-2xl font-medium'>Испытание на проникновение гвоздя</h1>
                    <p className='mt-5 text-black'>Испытание на проникновение гвоздя считается одним из самых строгих способов проверки теплового разряда батарей. Цель - имитировать внутреннее короткое замыкание батареи. Обычно это происходит в результате попадания в батарею внешних острых металлических предметов во время серьезной дорожной аварии. Blade Battery прошла тест на проникновение гвоздя, не испуская дыма или огня. Температура поверхности достигала лишь 30-60°C.</p>
                  </div>
                  <img className='w-[50%]' src="https://www.byd.com/content/dam/byd-site/uz/product/song/F01-Sub02.jpg" alt="" />
                </div>

                {/*  */}

                <div className='flex'>
                  <img className='w-[50%]' src="https://www.byd.com/content/dam/byd-site/uz/product/song/F01-Sub03.jpg" alt="" />
                  <div className='ml-20 m-auto w-[547px]'>
                    <h1 className='text-black text-2xl font-medium'>Оптимизированная прочность</h1>
                    <p className='mt-5 text-black'>Расположенные в виде массива в одной упаковке, каждая ячейка служит структурной балкой, помогающей противостоять силовому воздействию. Алюминиевая структура, напоминающая соты, с высокопрочными панелями на верхней и нижней стороне блока, значительно повышает жесткость в вертикальном направлении. Именно эта революционная конструкция обеспечивает оптимальную прочность Blade Battery.</p>
                  </div>
                </div>

                {/*  */}

                <div className='flex'>
                  <div className='ml-20 m-auto w-[547px]'>
                    <h1 className='text-black text-2xl font-medium'>Увеличенный радиус действия</h1>
                    <p className='mt-5 text-black'>По сравнению с традиционными аккумуляторными блоками площадь, занимаемая Blade Battery, увеличена более чем на 50%, что обеспечивает повышенную плотность энергии и большую дальность действия.</p>
                  </div>
                  <img className='w-[50%]' src="https://www.byd.com/content/dam/byd-site/uz/product/song/F01-Sub04.jpg" alt="" />
                </div>

                {/*  */}

                <div className='flex'>
                  <img className='w-[50%]' src="https://www.byd.com/content/dam/byd-site/uz/product/song/F01-Sub05.jpg" alt="" />
                  <div className='ml-20 m-auto w-[547px]'>
                    <h1 className='text-black text-2xl font-medium'>Более длительный срок службы</h1>
                    <p className='mt-5 text-black'>Батарея Blade Battery имеет длительный срок службы - более 5000 циклов заряда и разряда.</p>
                  </div>
                </div>

              </section>
              : null
          }
        </section>
      </div>
      <video src=""></video>
    </Layout>
  )
}
