import type { Meta, StoryObj } from "@storybook/angular"

import { ButtonsComponent } from "./buttons.component"
import "@/globals/_variables.scss"

const meta: Meta = {
  component: ButtonsComponent,
}

export default meta

type Story = StoryObj<ButtonsComponent>

export const Primary: Story = {
  args: {
    isLogin: false,
  },
  argTypes: {
    isLogin: {
      control: {
        type: "boolean",
      },
    },
  },
}
