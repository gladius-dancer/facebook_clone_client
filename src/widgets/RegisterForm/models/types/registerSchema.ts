export interface RegisterSchema {
    error?: string | null;
    message?: string | null,
    user?: {
        email: string | null,
        id: number | null
    }
    isLoading: boolean;
}
