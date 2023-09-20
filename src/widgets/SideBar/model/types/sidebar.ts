import React from 'react';

export interface SideBarItemType {
    path: string,
    text: string,
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    isAuth?: boolean
}
