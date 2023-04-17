import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Code } from './Code';

export default {
  title: 'shared/Code',
  componen: Code,
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: `
  export default {
    title: 'shared/Code',
    componen: Code,
  } as ComponentMeta<typeof Code>;
  
  const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;
  
  export const Normal = Template.bind({});
  `,
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT)];
