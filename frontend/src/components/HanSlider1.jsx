import React, { useState } from 'react';
export default function HanSlider1() {
  const slides = [
    {
      id: 1,
      title: 'Быстрый',
      text: '0–100 км/ч за 5,9 с (только в версии AWD)',
      url: '/HanPhotos/HanPhoto-6.jpg',
    },
    {
      id: 2,
      title: 'Эффективный',
      text: '4,4 л / 100 км (ездовой цикл NEDC) со сроком службы аккумулятора на 1200 километров (ездовой цикл NEDC)',
      url: '/HanPhotos/HanPhoto-7.jpg'
    },
    {
      id: 3,
      title: 'Тихий',
      text: 'Тихое пространство с превосходными характеристиками шумоподавления (NVH)',
      url: '/HanPhotos/HanPhoto-8.jpg',
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
      <p className='mt-3 mb-10 text-center w-[80%] mx-auto '>{slides[currentIndex].text}</p>
      <div className='flex justify-between text-center pt-5 py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slide.id}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl flex-1 cursor-pointer text-gray-300'
          >
            {slide.title}
            <div className={`${slideIndex === currentIndex && 'border'} w-[40%] mx-auto`}></div>
          </div>
        ))}
      </div>
    </div>
  );
}