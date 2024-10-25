
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignInPage from '../Auth/SignIn/SignInPage'
import NotFoundPage from '../DefaultPages/NotFoundPage'
import AppRootRouter from '../AppRootRouter'
import InternalMainPage from '../InternalApp/InternalMainPage'
import PasswordResetForm from '../Auth/Forgot-pass/ResetPassPage'

const RootRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SignInPage />} />
                <Route path='reset-password/:token' element={<PasswordResetForm/>} />
                <Route path='app' element={<AppRootRouter />}>
                    <Route path='hrms' element={<InternalMainPage />} />
                </Route>

                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RootRouter