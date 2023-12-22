import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <Layout>
            <section>
                <div className='w-full h-screen bg-center bg-cover bg-[url("https://www.byd.com/content/dam/byd-site/uz/home/kv/song.jpg")]'>
                    <h1 className='text-white text-5xl pt-24 text-center font-semibold'>SONG PLUS DM-i</h1>
                    <div className='mt-[370px] text-center'>
                        <Link to='/byd-song' className='banan text-xl text-white p-[15px] mt-[100px] hover:bg-white hover:text-black font-semibold'>УЗНАТЬ БОЛЬШЕ</Link>
                    </div>
                </div>
                <div className='w-full h-screen bg-center bg-cover bg-[url("https://www.byd.com/content/dam/byd-site/uz/home/kv/chazor.jpg")]'>
                    <h1 className='text-white text-5xl pt-24 text-center font-semibold'>BYD CHAZOR</h1>
                    <div className='mt-[370px] text-center'>
                        <Link to='/chazor' className='banan text-xl text-white p-[15px] mt-[100px] hover:bg-white hover:text-black font-semibold'>УЗНАТЬ БОЛЬШЕ</Link>
                    </div>
                </div>
                <div className='w-full h-screen bg-center bg-cover bg-[url("https://www.byd.com/content/dam/byd-site/uz/home/kv/Banner2-PC.jpg")]'>
                    <h1 className='text-white text-5xl pt-24 text-center font-semibold'>BYD HAN</h1>
                    <div className='mt-[370px] text-center'>
                        <Link to='/han' className='banan text-xl text-white p-[15px] mt-[100px] hover:bg-white hover:text-black font-semibold'>УЗНАТЬ БОЛЬШЕ</Link>
                    </div>
                </div>
                
                <div className='w-full h-screen bg-center bg-cover bg-[url("https://www.byd.com/content/dam/byd-site/uz/home/banner/bottom-bannerPC.jpg")]'>
                </div>
            </section>
        </Layout>
    )
}
