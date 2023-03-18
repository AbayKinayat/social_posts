import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
  isOpen: true,
  children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi error fuga sit voluptate ex doloremque modi debitis excepturi obcaecati? Veniam, sapiente itaque eos dolor perror voluptatem explicabo ea recusandae cumque!',
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi error fuga sit voluptate ex doloremque modi debitis excepturi obcaecati? Veniam, sapiente itaque eos dolor perror voluptatem explicabo ea recusandae cumque!',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
