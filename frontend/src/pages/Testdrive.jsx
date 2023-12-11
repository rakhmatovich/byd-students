import Layout from '../components/Layout'

export default function Testdrive() {
    return (


        <Layout>
            <section>
                <div>
                    <h1 className='font-semibold text-6xl p-10 '>Тест-драйв</h1>
                    <div className='w-full border border-gray-200 my-10'></div>
                </div>
                <div className='flex min-h-[50vh] gap-16'>
                    <div>
                        <h1 className='font-semibolt text-4xl p-10 text-black'>Новый Seltos</h1>
                        <div className=''>
                            <img className='w-[550px]' src="https://cdn.kia-motors.uz/uploads/gallery/original-a4676b.png" alt="" />
                        </div>
                    </div>
                    <form className='flex flex-col'>
                        <h1 className='text-center font-semibolt text-2xl p-5  text-black r-[550px]'>Ваши контакты</h1>
                        <div>
                            <h1 className='text-center font-semibolt text-1xl'>Поля, отмеченные *, обязательны для заполнения</h1>
                        </div>
                        <input className='border rounded px-3 py-2 text-[20px] outline-none' type="text" placeholder='asd' />
                    </form>
                </div>
            </section>
        </Layout>
    )
}