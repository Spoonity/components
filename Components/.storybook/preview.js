
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import '../sp-components/src/app/sp-component/styles/main.less'
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
