import { PageLoaderScheme } from 'shared/ui/PageLoader';
import { RegisterSchema } from 'widgets/RegisterForm';
import { LoginSchema } from 'widgets/LoginForm';
import { AuthProviderSchema } from 'app/providers/AuthProvider';

export interface StateSchema {
    loader: PageLoaderScheme,
    register: RegisterSchema,
    login: LoginSchema,
    auth: AuthProviderSchema

}
