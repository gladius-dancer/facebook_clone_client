export type LoginFormType = {
    isLoading: boolean,
    user: { email: string | null, id: string | null },
    message: string | null,
    error: string | null,
}
