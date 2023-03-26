import { SVGProps, VFC } from 'react';
import { RoutePath } from 'shared/config/route';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';

export interface SiderbarItemType {
  text: string,
  Icon: VFC<SVGProps<SVGSVGElement>>,
  path: string
}

export const sidebarItemList: SiderbarItemType[] = [
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: 'about_us',
  },
  {
    path: RoutePath.main,
    Icon: MainIcon,
    text: 'main_page',
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: 'profile_page',
  },
];
