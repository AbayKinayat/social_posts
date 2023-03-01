import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeSwitcher } from "./ThemeSwitcher";

import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

export default {
  title: "shared/ThemeSwitcher",
  component: ThemeSwitcher
} as ComponentMeta<typeof ThemeSwitcher>

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />

export const Dark = Template.bind({});
Dark.args = {}
Dark.decorators = [
  ThemeDecorator(Theme.DARK)
]

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
  ThemeDecorator(Theme.LIGHT)
]