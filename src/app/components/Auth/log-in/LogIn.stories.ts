import { componentWrapperDecorator } from '@storybook/angular';
import type { Meta, StoryObj } from "@storybook/angular"
import { LogInComponent } from "./log-in.component"

import "../../../../../../angular-streaming/src/app/globals/_variables.scss"

const meta: Meta = {
  component: LogInComponent,
  decorators: [componentWrapperDecorator((story) => `<div style="margin: 3em">${story}</div>`)],
}

export default meta;


type Story = StoryObj<LogInComponent>

export const Primary: Story = {
}
