import { Story } from "@storybook/api";
import { BrowserRouter } from "react-router-dom";

export const RouterDecorator = (story: () => Story) => {
  return <BrowserRouter>
    {story()}
  </BrowserRouter>
}