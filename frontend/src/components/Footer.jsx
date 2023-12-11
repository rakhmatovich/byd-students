import React from 'react';

export default function Footer() {
  return (
    <footer className='text-white bg-gray-950 p-14'>
      <div className='flex gap-10'>
        <a className='text-[20px] font-semibold text-gray-200'>Конфиденциальность и юридические услуги</a>
        <a className='text-[20px] font-semibold text-gray-200'>УСЛОВИЯ ИСПОЛЬЗОВАНИЯ</a>
        <a className='text-[20px] font-semibold text-gray-200'>Куки</a>
      </div>
      <div className='w-full border border-gray-800 my-10'></div>
      <div className=''>©️ BYD Auto UZ. All rights reserved.</div>
    </footer>
  )
}