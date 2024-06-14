import type { Meta, StoryObj } from '@storybook/angular'

import { NavBarComponent } from './nav-bar.component'
import "@app/globals/_variables.scss"

const meta: Meta = {
  component: NavBarComponent,
}

export default meta;

type Story = StoryObj<NavBarComponent>

export const NavBar: Story = {
  args: {
    isOpen: false,
    isPanelOpen: false,
  }
}
