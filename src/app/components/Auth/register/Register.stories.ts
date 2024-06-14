import {componentWrapperDecorator, moduleMetadata} from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular'
import { RegisterComponent } from "./register.component"

import '../../../../../../angular-streaming/src/app/globals/_variables.scss'


const meta:Meta = {
  component: RegisterComponent,
  decorators: [componentWrapperDecorator((story) => `<div>${story}</div>`)],
}

export default meta

type Story = StoryObj<RegisterComponent>
export const View:Story = {
  args: {
    showPassword: false,
    isAuthenticated: false
  }
}
