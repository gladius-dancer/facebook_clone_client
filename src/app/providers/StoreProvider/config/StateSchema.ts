import { PageLoaderScheme } from 'shared/ui/PageLoader';
import { RegisterSchema } from 'widgets/RegisterForm';
import { LoginSchema } from 'widgets/LoginForm';
import { AuthProviderSchema } from 'app/providers/AuthProvider';
import { PostSchema } from 'entities/Posts';
import { UserSchema } from 'entities/Users/models/types/UserSchema';
import { NotificationSchema } from 'widgets/Navbar/models/types/NotificationType';

export interface StateSchema {
    loader: PageLoaderScheme,
    register: RegisterSchema,
    login: LoginSchema,
    auth: AuthProviderSchema,
    posts: PostSchema,
    unfriends: UserSchema,
    friends: UserSchema,
    familliars: UserSchema,
    friendRequests: UserSchema,
    notifications: NotificationSchema

}
