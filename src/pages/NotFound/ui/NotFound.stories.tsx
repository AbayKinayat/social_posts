import { ComponentMeta, ComponentStory } from "@storybook/react";

import {NotFound} from "./NotFound";

import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

export default { 
  title: "pages/NotFound",
  component: NotFound
} as ComponentMeta<typeof NotFound>

const Template: ComponentStory<typeof NotFound> = (args) => <NotFound {...args} />

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK)
]

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
  ThemeDecorator(Theme.LIGHT)
]