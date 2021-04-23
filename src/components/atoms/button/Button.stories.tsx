import { Story, Meta } from '@storybook/react'
import AtomButton from './index'
import { ButtonProps } from './types'

export default {
  title: 'Components/Atoms/AtomButton',
  component: AtomButton,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    outline: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <AtomButton {...args}>{args.text}</AtomButton>

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  outline: false,
  text: '',
}
