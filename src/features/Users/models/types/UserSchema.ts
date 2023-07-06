export type User = {
    email : string;
    id : string;
    isActivated : boolean;
    firstName : string;
    lastName : string;
    avatar : string;
}

export type UserSchema = {
    loading: boolean;
    error: boolean;
    users: User[] | null
}
