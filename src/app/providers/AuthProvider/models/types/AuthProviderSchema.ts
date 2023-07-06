export interface User {
    user: {
        id: string;
        email: string;
        isActivated: boolean;
        firstName: string;
        lastName: string;
    }

    accessToken: string;
}
export interface AuthProviderSchema {
    user: User | null;
    error: any;
    isLoading: boolean;
}
