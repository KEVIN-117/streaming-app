import type { Meta, StoryObj } from '@storybook/angular'
import { ButtonComponent } from "./button.component"
import '@/globals/_variables.scss'

const meta: Meta = {
  component: ButtonComponent,
}

export default meta

type Story = StoryObj<ButtonComponent>

export const Primary: Story = {
  args: {
    buttonProps: {
      text: 'Primary',
      variant: 'primary',
      icon: `<svg class="w-6 h-6 text-inherit" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z" clip-rule="evenodd"/>
</svg>`,
    }
  }
}

export const IconButton: Story = {
  args: {
    buttonProps: {
      text: 'Icon Button',
      variant: 'secondary',
      icon: `<svg class="w-6 h-6 text-inherit" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z" clip-rule="evenodd"/>
</svg>`,
    }
  }
}
