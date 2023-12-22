import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Chazor from './pages/Chazor'
import AboutByd from './pages/AboutByd'
import Han from './pages/Han'
import Politikakonfidiatalnost from './pages/Politikakonfidiatalnost'
import BydSong from './pages/BydSong'
import Home from './pages/Home'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/byd-song' element={<BydSong />} />
                <Route path='/chazor' element={<Chazor />} />
                <Route path='/about-byd' element={<AboutByd />} />
                <Route path='/han' element={<Han />} />
                <Route path='/byd-konf' element={<Politikakonfidiatalnost />} />
            </Routes>
        </BrowserRouter>
    )
}
