import "storybook-addon-emotion-theme/dist/register";
import { Dark, Light } from "@Styles/theme";
import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-emotion-theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const themes = [Light, Dark];
addDecorator(withThemesProvider(themes));
