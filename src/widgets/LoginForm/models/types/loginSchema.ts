export type LoginSchema = {
    isLoading: boolean,
    user: { email: string | null, id: string | null},
    message: string | null,
    error: string | null,
}

export type LoginFormType = {
    email: string,
    password: string
}
