import React from "react";
import { Story } from "@storybook/react/types-6-0";
import SleepGroup, { SleepGroupProps } from "./SleepGroup";

export default {
  component: SleepGroup,
  title: "Player/Buttons/SleepGroup",
};

const Template: Story<SleepGroupProps> = args => <SleepGroup {...args} />;

const defaultItem: SleepGroupProps = {
  options: [
    { text: "off", minutes: 0 },
    { text: "1分鐘", minutes: 1 },
    { text: "2分鐘", minutes: 2 },
  ],
  onUpdate(minutes) {
    console.log(minutes);
  },
};

export const Default = Template.bind({});
Default.args = {
  ...defaultItem,
};
