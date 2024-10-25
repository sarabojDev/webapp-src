import useRefreshToken from '@/hooks/useRefreshToken'
import { OverAllReducerType } from '@/types/overAllReducerType';
import { LoginState } from '@/types/userlogintype';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'
import LoadingPage from './DefaultPages/LoadingPage';

const AppRootRouter = () => {
  useRefreshToken();
  const {loading, user } = useSelector<OverAllReducerType, LoginState>(state => state.loginUserSlice);

  if (loading) return <LoadingPage />
  if (!user) return <Navigate to={"/"} />
  return <Outlet />
}

export default AppRootRouter