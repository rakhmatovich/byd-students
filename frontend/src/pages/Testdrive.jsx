import Layout from '../components/Layout'

export default function TestDrive() {
    return (


        <Layout>
            <section>
                <div>
                    <h1 className='font-semibold text-6xl p-10 '>Тест-драйв</h1>
                    <div className='w-full border border-gray-200 my-10'></div>
                </div>
                <div className='min-h-[50vh] gap-16'>
                    <div className='flex gap-10'>
                        <div>
                            <h1 className='font-semibolt text-4xl p-10 text-black'>Новый byd SONG PLUS DM-i</h1>
                            <div className=''>
                                
                                <img className='w-[550px]' src="/frontend/public/strong\ 1.jpg" alt="" />
                            </div>
                        </div>
                        <form className='flex flex-col w-[500px]'>
                            <h1 className='text-center font-semibolt text-2xl p-5  text-black r-[550px] font-medium'>Ваши контакты</h1>
                            <div>
                                <h1 className='text-center font-semibolt text-1xl p-5 font-medium'>Поля, отмеченные *, обязательны для заполнения</h1>
                            </div>
                            <input className='border rounded px-3 py-2 text-[20px] outline-none font-medium' type="text" placeholder='Имя*' />
                            <input className='border rounded px-3 py-2 text-[20px] outline-none mt-[20px] font-medium' type="number" placeholder='+998' />
                            <textarea rows="5" className='border rounded px-3 py-2 text-[20px] outline-none mt-[20px] font-medium' type="text" placeholder='Ваш коментарий или вопрос'></textarea>
                            <div>
                                <div className='flex mt-[30px] w-full gap-4'>
                                    <input className='w-[20px] mt-2 h-[20px] cursor-pointer' type="checkbox" />
                                    <p className='w-[90%]'>Проставляя отметку, я выражаю свое согласие и разрешаю ООО 'Roodell', а также, по их поручению, третьим лицам осуществлять обработку моих персональных данных (фамилия, имя, отчество, год, месяц, дата и место рождения; адрес, номер паспорта и сведения о дате выдачи паспорта и выдавшем его органе; образование, профессия, место работы и должность; домашний, рабочий и мобильный телефоны; адрес электронной почты и другие данные,
                                        требуемые для отправки сообщения), включая сбор, систематизацию, накопление, хранение, уточнение, использование, распространение (в том числе трансграничную передачу), обезличивание, уничтожение персональных данных), в целях связанных с возможностью предоставления информации о товарах и услугах, которые потенциально могут представлять интерес, а также в целях сбора и обработки статистической информации и проведения
                                        маркетинговых исследований.
                                    </p>
                                </div>
                                <div className='p-5'>
                                    <button className='py-1 px-3 border-2 rounded-full border-indigo-600 text-indigo-600 hover:text-white font-medium'>
                                        <h1>Отправить заявку</h1>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    )
}