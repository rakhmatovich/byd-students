import React, { useState } from 'react';
export default function ChazorSlider() {
  const slides = [
    {
      id: 1,
      title: 'Умный мобильный помощник BYD',
      text: 'Анализ ситуации и оценка рисков, реагирование в режиме реального времени и прогноз трафика — здесь есть все необходимое для вашей безопасности. Высокопроизводительная интеллектуальная система помощи при вождении* со встроенными функциями ADAS, такими как ACC-S&amp;G, BSD, DOW, FCW, RCW, RCTA, LDA, LKA, LCA и TSR, делает вождение простым и легким.',
      url: './ComponentsPhotos/Chazor/Slide-1/Slide-1.jpg',
    },
    {
      id: 2,
      title: 'Прозрачный панорамный вид на 360°',
      text: 'Идеально оборудован, чтобы видеть все детали, не оставляя слепых зон. Осмотритесь вокруг с помощью четырех камер высокого разрешения и убедитесь, что нет препятствий для легкой парковки.',
      url: './ComponentsPhotos/Chazor/Slide-1/Slide-2.jpg'
    },
    {
      id: 3,
      title: 'Супергибридный аккумулятор DM-I',
      text: 'Компания BYD первой в отрасли применила технологию импульсного саморазогрева аккумуляторов, обеспечив автомобиль надежным, долговечным и стабильным источником энергии, предназначенным для более длительных и безопасных поездок.',
      url: './ComponentsPhotos/Chazor/Slide-1/Slide-3.jpg',
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className='h-[100vh] w-full m-auto py-16 px-4 relative group bg-black text-white'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-[60%] h-[75%] rounded bg-center mx-auto bg-cover duration-500'
      ></div>
      <p className='mt-3 mb-10 text-center w-[80%] mx-auto h-14'>{slides[currentIndex].text}</p>
      <div className='flex justify-between text-center pt-5 py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slide.id}
            onClick={() => goToSlide(slideIndex)}
            className={`text-xl flex-1 cursor-pointer ${slideIndex === currentIndex ? 'text-white' : 'text-gray-300'}`}
          >
            {slide.title}
            <div className={`${slideIndex === currentIndex && 'border'} w-[40%] mx-auto`}></div>
          </div>
        ))}
      </div>
    </div>
  );
}