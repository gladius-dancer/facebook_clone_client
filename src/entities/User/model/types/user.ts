export interface User {
    accessToken: string
    user: {
        id: string;
        username: string;
    }

}

export interface UserSchema {
    authData?: User;
}
