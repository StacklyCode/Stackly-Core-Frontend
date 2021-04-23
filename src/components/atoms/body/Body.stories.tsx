import { Story, Meta } from '@storybook/react'

import AtomBody, { BodyProps } from './index'

export default {
  title: 'Components/Atoms/AtomBody',
  component: AtomBody,
  argTypes: {
    align: {
      control: {
        type: 'select',
        options: ['left', 'center'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['white', 'green', 'gray', 'black', 'light', 'accent'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['BodyExtraLarge', 'BodyLarge', 'BodyMedium', 'BodySmall', 'BodyExtraSmall'],
      },
    },
    outline: {
      control: {
        type: 'boolean',
      },
    },
    bold: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta

const Template: Story<BodyProps> = (args) => <AtomBody {...args}>{args.text}</AtomBody>

export const Primary = Template.bind({})
Primary.args = {
  size: 'BodySmall',
  align: 'center',
  color: 'light',
  text: '',
}
