import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Chazor from './pages/Chazor'
import AboutByd from './pages/AboutByd'
import Politikakonfidiatalnost from './pages/Politikakonfidiatalnost'
import { Usage } from './pages/Usage'
import BydSong from './pages/BydSong'
import Home from './pages/Home'
import BydHan from './pages/BydHan'
import TestDrive from './pages/Testdrive'
import Contakts from './pages/Contakts'
import PageNotFound from './pages/PageNotFound'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/byd-song' element={<BydSong />} />
                <Route path='/chazor' element={<Chazor />} />
                <Route path='/about-byd' element={<AboutByd />} />
                <Route path='/byd-han' element={<BydHan />} />
                <Route path='/byd-konf' element={<Politikakonfidiatalnost />} />
                <Route path='/testdrive' element={<TestDrive />} />
                <Route path='/usage' element={<Usage />} />
                <Route path='/contacts' element={<Contakts />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
