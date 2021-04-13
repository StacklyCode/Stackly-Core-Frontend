import React from 'react';
import { addDecorator } from '@storybook/react';
import { Dark, Light } from '../src/styles/theme';
import { withThemesProvider } from 'storybook-addon-emotion-theme';
import GlobalStyles from '../src/styles/globalStyled';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((story) => (
  <>
    <GlobalStyles />
    <div style={{ padding: '3rem' }}>{story()}</div>
  </>
));

const themes = [Light, Dark];
addDecorator(withThemesProvider(themes));
