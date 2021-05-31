import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import '../styles/main.less'
import { theme } from './theme';
setCompodocJson(docJson);
import { SpComponentsComponent } from 'sp-components/public_api';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';

export const decorators = [
  moduleMetadata({ declarations: [SpComponentsComponent] }),
  componentWrapperDecorator((story) => `<sp-components></sp-components>${story}`)
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme: theme,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
