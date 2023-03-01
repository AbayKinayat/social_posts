import { Story } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";


export const ThemeDecorator = (theme: Theme) => (Story: Story) => {
  return <div className={`app ${theme}`} style={{ height: "100vh" }}>
    <div>
    </div>
    <div  style={{ height: "100vh" }}>
    <Story />
    </div>
  </div>
}