import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PageError } from "./PageError";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

export default {
  title: "widget/PageError",
  component: PageError,
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />

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
