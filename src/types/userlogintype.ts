export interface UserDataType {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface LoginState {
    user: UserDataType | null;
    loading: boolean;
    error: string | null;
}

