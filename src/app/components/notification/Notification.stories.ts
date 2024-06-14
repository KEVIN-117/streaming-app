import { Meta, StoryObj } from "@storybook/angular"
import { NotificationComponent } from "./notification.component"

const meta: Meta = {
  component: NotificationComponent,
}

export default meta;

type Story = StoryObj<NotificationComponent>

export const Success: Story = {
  args: {
    type: 'success',
    message: 'Success message',
    title: 'Success title',
    background: '#1a202c',
    text: 'This is a message',
  }
}

export const Error: Story = {
  args: {
    type: 'error',
    message: 'Error message',
    title: 'Error title',
    background: '#1a202c',
    text: 'This is a message',
  }
}

export const Question: Story = {
  args: {
    type: 'question',
    message: 'Question message',
    title: 'Question title',
    background: '#1a202c',
    text: 'This is a message',
  }
}


export const Info: Story = {
  args: {
    type: 'info',
    message: 'Info message',
  }
}

export const Custom: Story = {
  args: {
    type: 'success',
    message: 'Custom message',
    title: 'Custom title',
    background: '#1a202c',
    text: 'Custom text',
  }
}
