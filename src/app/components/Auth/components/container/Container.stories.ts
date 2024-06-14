import { Meta, StoryObj } from '@storybook/angular'
import { ContainerComponent } from './container.component'


const meta: Meta = {
  component: ContainerComponent,
}

export default meta

type Story = StoryObj<ContainerComponent>

export const Default: Story = {
  args: {
    hasContent: false,
  }
}
