import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }) {
    return (
        <div className='scroll-smooth'>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
