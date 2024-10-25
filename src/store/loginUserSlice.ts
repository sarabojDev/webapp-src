import { UserDataType } from '@/types/userlogintype';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



// Create a slice
const loginUserSlice = createSlice({
    name: 'loginSlice',
    initialState: {
        user: null as UserDataType | null,
        loading: true,
        error: null as string | null,
    },
    reducers: {
        loginStart(state) {
            state.loading = true;
            state.error = null;
        },
        loginSuccess(state, action: PayloadAction<UserDataType>) {
            console.log(action.payload)
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        },
        loginFailure(state) {
            state.loading = false;
            // state.error = action.payload;
        },
        logout(state) {
            state.user = null;
            state.loading = false;
            state.error = null;
        },
    }
});


export const { loginStart, loginSuccess, loginFailure, logout } = loginUserSlice.actions;
// Export the reducer to be used in the store
export default loginUserSlice.reducer;
