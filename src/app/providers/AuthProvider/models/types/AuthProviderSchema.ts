export interface User {
    id: string;
    email: string;
    isActivated: boolean;
    firstName: string;
    lastName: string;
    avatar: string;
    accessToken: string;
}

export interface AuthProviderSchema {
    user: User | null;
    error: any;
    isLoading: boolean;
}
