import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Chazor from './pages/Chazor'
import AboutByd from './pages/AboutByd'
import Han from './pages/Han'
import Testdrive from './pages/Testdrive'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/chazor' element={<Chazor />} />
                <Route path='/about-byd' element={<AboutByd />} />
                <Route path='/han' element={<Han />} />
                <Route path='/testdrive' element={<Testdrive />} />
            </Routes>
        </BrowserRouter>
    )
}
