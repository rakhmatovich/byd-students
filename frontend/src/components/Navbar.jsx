import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <div className="bg-gray-800 flex justify-center m-auto h-20 w-[100%] bg-opacity-75 fixed">
        <div className='mt-auto mb-auto'>
          <Link className='' to='/'>
            <img className="absolute left-7" src="https://www.byd.com/etc.clientlibs/byd-site/clientlibs/clientlib-public/resources/image/icon-logo.svg" alt="" />
          </Link>
          <div className="flex gap-10">
            <Link to='/byd-song' className="text-white text-xl">SONG PLUS DM-i</Link>
            <Link to='/chazor' className="text-white text-xl">BYD CHAZOR</Link>
            <Link to='/byd-han' className="text-white text-xl">BYD HAN</Link>
            <Link to='/about-byd' className="text-white text-xl">Вилочный погрузчик</Link>
            <Link to='/testdrive' className='text-white text-xl'>Test Drive</Link>
            <Link to='/contacts' className='text-white text-xl'>Contact Us</Link>
          </div>
        </div>
      </div>
      <div className='h-20 bg-gray-600'></div>
    </div>
  )
}