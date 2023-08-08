import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { AuthPage } from 'pages/AuthPage';
import { FriendsPage } from 'pages/FriendsPage';
import { MarketplacePage } from 'pages/MarketplacePage';
import { GroupsPage } from 'pages/GroupsPage';
import { GamesPage } from 'pages/GamesPage';
import { ProfilePage } from 'pages/ProfilePage';

export enum AppRoutes {
    MAIN = 'main',
    FRIENDS = 'friends',
    MARKETPLACE = 'marketplace',
    GROUPS = 'groups',
    GAMES = 'games',
    AUTH = 'auth',
    PROFILE = 'profile',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.FRIENDS]: '/friends',
    [AppRoutes.MARKETPLACE]: '/marketplace',
    [AppRoutes.GROUPS]: '/groups',
    [AppRoutes.GAMES]: '/games',
    [AppRoutes.AUTH]: '/auth',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.FRIENDS]: {
        path: RoutePath.friends,
        element: <FriendsPage />,
    },
    [AppRoutes.MARKETPLACE]: {
        path: RoutePath.marketplace,
        element: <MarketplacePage />,
    },
    [AppRoutes.GROUPS]: {
        path: RoutePath.groups,
        element: <GroupsPage />,
    },
    [AppRoutes.GAMES]: {
        path: RoutePath.games,
        element: <GamesPage />,
    },
    [AppRoutes.AUTH]: {
        path: RoutePath.auth,
        element: <AuthPage />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
