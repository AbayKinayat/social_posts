import { ComponentMeta, ComponentStory } from '@storybook/react';
import { rest } from 'msw';

import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile } from 'entities/Profile';
import ProfilePage from './ProfilePage';

const TestData: Profile = {
  first: 'Abay',
  lastname: 'Kinayat',
  avatar: '',
  city: '',
  country: Country.Kazakhstan,
  currency: Currency.EUR,
  username: 'abay',
  age: 22,
};

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  parameters: {
    msw: [
      rest.get('/profile/1', (_req, res, ctx) => res(ctx.json(TestData))),
    ],
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      data: {
        first: 'Абай',
        lastname: 'Кинаят',
        age: 22,
        currency: Currency.RUB,
        country: Country.Kazakhstan,
        city: 'Astana',
        username: 'abay',
        avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
      },
    },
  }),
];

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
  ThemeDecorator(Theme.LIGHT),
  StoreDecorator({
    profile: {
      data: {
        first: 'Абай',
        lastname: 'Кинаят',
        age: 22,
        currency: Currency.RUB,
        country: Country.Kazakhstan,
        city: 'Astana',
        username: 'abay',
        avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
      },
    },
  }),
];
