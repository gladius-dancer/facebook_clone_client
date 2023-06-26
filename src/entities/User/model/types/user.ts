export interface User {
    accessToken: string;

    user: {
        id: string;
        email: string;
    }

}

export interface UserSchema {
    authData?: User;
}
