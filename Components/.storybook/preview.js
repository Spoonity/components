import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
// import '../node_modules/@spoonity/sp-components/src/app/styles'
import { theme } from './theme';
setCompodocJson(docJson);
import { SpComponentsComponent } from 'sp-components/public_api';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import {IconGalleryComponent} from "../src/app/atoms/icon-gallery/icon-gallery.component";

export const decorators = [
  moduleMetadata({ declarations: [IconGalleryComponent] }),
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
