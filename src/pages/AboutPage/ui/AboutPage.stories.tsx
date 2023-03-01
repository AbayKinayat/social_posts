import { ComponentStory, ComponentMeta } from "@storybook/react";

import AboutPage from "./AboutPage";

import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

export default { 
  title: "pages/AboutPage",
  component: AboutPage
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage {...args} />

export const Dark = Template.bind({})
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK)
]

export const Light = Template.bind({})
Light.args = {};
Light.decorators = [
  ThemeDecorator(Theme.LIGHT)
]