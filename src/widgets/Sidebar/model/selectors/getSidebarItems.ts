import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/route';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';
import { SiderbarItemType } from '../types/SidebarItemType';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (authData) => {
    const sidebarItemList: SiderbarItemType[] = [
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
    ];

    if (authData) {
      sidebarItemList.push(
        {
          path: `${RoutePath.profile}/${authData.id}`,
          Icon: ProfileIcon,
          text: 'profile_page',
          authOnly: true,
        },
        {
          path: RoutePath.articles,
          Icon: ArticleIcon,
          text: 'article_page',
          authOnly: true,
        },
      );
    }

    return sidebarItemList;
  },
);
