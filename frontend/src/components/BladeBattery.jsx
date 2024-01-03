import React, { useState } from 'react'

export default function BladeBattery() {
    const [show, setShow] = useState(false)
    return (
        <div>
            <section className='w-full relative h-screen bg-center bg-cover bg-[url("/ComponentsPhotos/ComponentPhoto-1.jpg")]'>
                <div className='w-[1064px] m-auto text-center pt-32'>
                    <h1 className='text-white text-4xl font-semibold'>Сверхнадежный одноячеечный аккумулятор</h1>
                    <h1 className='text-white text-4xl font-semibold'>Blade Battery</h1>
                    <p className='mt-5 text-white'>Емкость аккумулятора 85,4 кВт⋅ч, с большим сроком службы и дальностью пробега, задающая новый уровень безопасности</p>
                    <p className='text-white'>электромобилей.</p>
                </div>
                <div className='absolute left-0 bottom-5 flex justify-center w-full'>
                    <button className={`mt-96 w-[40px] transition-all duration-500  ${show && 'rotate-[135deg]'}`} onClick={() => setShow(!show)}>
                        <img className='bg-white br-[50%]  h-[40px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF8VnNdKbMkivHDNI4XI3bIjmMeKqU5AiHww&usqp=CAU" alt="icon-x" />
                    </button>
                </div>
            </section>
            {/* // x---section-9---x // */}
            <section className={`w-[100%] overflow-hidden transition-height duration-1000 pl-10 pr-10 ${show ? 'h-[250vh]' : 'h-0'}`}>
                <div className='flex pt-[50px]'>
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
        </div>
    )
}
