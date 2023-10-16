import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home-svgrepo-com.svg';
import AboutIcon from 'shared/assets/icons/about-svgrepo-com.svg';
import ProfileIcon from 'shared/assets/icons/person-male-svgrepo-com.svg';
import ArticlesIcon from 'shared/assets/icons/articles.svg';
import { SideBarItemType } from '../types/sidebar';

export const getSideBarItems = createSelector(
    getUserAuthData,
    (authData) => {
        const sideBarItemsList: SideBarItemType[] = [
            {
                path: RoutePath.main,
                text: 'main',
                Icon: HomeIcon,
            },
            {
                path: RoutePath.about,
                text: 'about',
                Icon: AboutIcon,
            },

        ];

        if (authData) {
            sideBarItemsList.push(
                {
                    path: RoutePath.profile + authData.id,
                    text: 'profile',
                    Icon: ProfileIcon,
                    isAuth: true,
                },
                {
                    path: RoutePath.articles,
                    text: 'articles',
                    Icon: ArticlesIcon,
                    isAuth: true,
                },
            );
        }

        return sideBarItemsList;
    },
);
