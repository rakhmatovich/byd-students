import React, { useState } from 'react';
export default function HanSlider2() {
    const slides = [
        {
            id: 1,
            title: 'Мобильная зарядка V2L',
            text: 'Зарядка в салоне до 3 кВт',
            url: '/HanPhotos/HanPhoto-16.jpg',
        },
        {
            id: 2,
            title: 'Интеллектуальный помощник вождения BYD',
            text: 'Машина оснащена 8 ультразвуковыми радарами, 5 высокоточными радарами миллиметрового диапазона, 4 движущимися на 360 градусов камерами и 1 высокочувствительной движущейся камерой.',
            url: '/HanPhotos/HanPhoto-17.jpg'
        },
        {
            id: 3,
            title: 'Умный дисплей W-HUD',
            text: 'Водителю не нужно отводить взгляд от дороги, что значительно повышает безопасность вождения.',
            url: '/HanPhotos/HanPhoto-18.jpg',
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
            <p className='mt-3 mb-10 text-center w-[80%] mx-auto h-10'>{slides[currentIndex].text}</p>
            <div className='flex justify-between text-center pt-5 py-2'>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slide.id}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-xl flex-1 cursor-pointer text-gray-300'
                    >
                        {slide.title}
                        <div className={`${slideIndex === currentIndex && 'border'} w-[40%] mx-auto`}></div>
                    </div>
                ))}
            </div>
        </div>
    );
}