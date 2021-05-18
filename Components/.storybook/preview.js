
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import { NZMODULES } from '../sp-components/src/app/ngZorroComponents'
setCompodocJson(docJson);



export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
