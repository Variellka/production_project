import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home-svgrepo-com.svg';
import AboutIcon from 'shared/assets/icons/about-svgrepo-com.svg';
import ProfileIcon from 'shared/assets/icons/person-male-svgrepo-com.svg';

export interface SideBarItemType {
    path: string,
    text: string,
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SideBarItemsList: SideBarItemType[] = [
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
    {
        path: RoutePath.profile,
        text: 'profile',
        Icon: ProfileIcon,
    },
];
