export interface User {
    user: {
        id: string;
        email: string;
        isActivated: boolean;
        firstName: string;
        lastName: string;
        avatar: string;
    }

    accessToken: string;
}
export interface LoginSchema {
    user: User | null;
    error: any;
    isLoading: boolean;
}

export type LoginFormType = {
    email: string,
    password: string
}
