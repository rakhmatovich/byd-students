import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="bg-gray-800 flex justify-center relative m-auto p-7 w-[100%]">
      <img className="absolute left-7" src="https://www.byd.com/etc.clientlibs/byd-site/clientlibs/clientlib-public/resources/image/icon-logo.svg" alt="" />
      <div className="flex gap-10">
        <Link className="text-white text-xl">SONG PLUS DM-i</Link>
        <Link className="text-white text-xl">BYD CHAZOR</Link>
        <Link className="text-white text-xl">BYD HAN</Link>
        <Link className="text-white text-xl">Вилочный погрузчик</Link>
      </div>
    </div>
  )
}