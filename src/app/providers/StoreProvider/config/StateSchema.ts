import { PageLoaderScheme } from 'shared/ui/PageLoader';
import { RegisterSchema } from 'widgets/RegisterForm';

export interface StateSchema {
    loader: PageLoaderScheme,
    register: RegisterSchema,

}
