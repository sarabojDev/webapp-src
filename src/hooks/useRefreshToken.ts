import { loginFailure, loginSuccess } from "@/store/loginUserSlice";
import { OverAllReducerType } from "@/types/overAllReducerType";
import { LoginState } from "@/types/userlogintype";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const API_URL = import.meta.env.VITE_API_URL
const AUTH_URL = import.meta.env.VITE_API_AUTH_PATH

const useRefreshToken = () => {
    const dispatch = useDispatch();
    const { user } = useSelector<OverAllReducerType, LoginState>(state => state.loginUserSlice);// Adjust based on your state structure

    const refreshToken = async () => {
        try {
            if (user) return;

            const fetchResponse = await fetch(`${API_URL}${AUTH_URL}/refresh-login`, {
                method: 'GET',
                credentials: 'include',
            });

            const responseData = await fetchResponse.json();

            if (fetchResponse.ok) {
                if (responseData.status) {
                    dispatch(loginSuccess(responseData.user));
                } else {
                    throw new Error(responseData.message);
                }
            } else {
                throw new Error(responseData.message || 'Failed to refresh token');
            }
        } catch (error) {
            console.log((error as Error).message);
            dispatch(loginFailure());
        }
    };

    useEffect(() => {
        refreshToken();
    }, [user]); // Added user as a dependency

    return { refreshToken }; // Optionally return the refreshToken function for manual invocation
};

export default useRefreshToken;