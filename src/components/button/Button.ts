import { Story, Meta } from "@storybook/react";

import Button, { IndexProps } from "./index";

export default {
  title: "Example/Atoms",
  component: Button,
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: ["Primary", "Secondary"],
      },
    },
  },
} as Meta;

const Template: Story<IndexProps> = (args) => <Button {...args} />;

export const AtomButton = Template.bind({});
AtomButton.args = {
  text: "Test Button",
};
