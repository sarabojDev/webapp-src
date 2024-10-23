
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthRootPage from '../Auth/AuthRootPage'
import InternalMainPage from '../InternalApp/InternalMainPage'

const RootRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AuthRootPage />} />
                <Route path='/user' element={<InternalMainPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RootRouter