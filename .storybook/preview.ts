import type { Preview } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { RouterTestingModule } from "@angular/router/testing"
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

export const decorators = [
  moduleMetadata({
    imports: [RouterTestingModule],
  }),
]

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
