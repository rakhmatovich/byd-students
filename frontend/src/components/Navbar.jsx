import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="bg-gray-800 flex justify-center m-auto p-7 w-[100%]">
      <Link to='/'>
        <img className="absolute left-7" src="https://www.byd.com/etc.clientlibs/byd-site/clientlibs/clientlib-public/resources/image/icon-logo.svg" alt="" />
      </Link>
      <div className="flex gap-10">
        <Link to='/byd-song' className="text-white text-xl">SONG PLUS DM-i</Link>
        <Link to='/chazor' className="text-white text-xl">BYD CHAZOR</Link>
        <Link to='/han' className="text-white text-xl">BYD HAN</Link>
        <Link to='/about-byd' className="text-white text-xl">Вилочный погрузчик</Link>
        <Link to='/testdrive' className='text-white text-xl'>Test Drive</Link>
      </div>
    </div>
  )
}