import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AppLink,  AppLinkTheme } from "./AppLink";

import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

export default {
  title: "shared/AppLink",
  component: AppLink,
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  to: "/primary/dark",
  children: "Link",
  theme: AppLinkTheme.PRIMARY
}
PrimaryDark.decorators = [
  ThemeDecorator(Theme.DARK)
]

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  to: "/primary/light",
  children: "Link",
  theme: AppLinkTheme.PRIMARY
}
PrimaryLight.decorators = [
  ThemeDecorator(Theme.LIGHT)
]

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  to: "/secondary/dark",
  children: "Link",
  theme: AppLinkTheme.SECONDARY
}
SecondaryDark.decorators = [
  ThemeDecorator(Theme.DARK)
]

export const SecondaryLight = Template.bind({});
SecondaryLight.args = {
  to: "/secondary/light",
  children: "Link",
  theme: AppLinkTheme.SECONDARY
}
SecondaryLight.decorators = [
  ThemeDecorator(Theme.LIGHT)
]