import React from "react";
import { Story } from "@storybook/react/types-6-0";
import SleepList, { SleepListProps } from "./SleepList";

export default {
  component: SleepList,
  title: "Player/Buttons/SleepGroup/SleepList",
};

const Template: Story<SleepListProps> = args => <SleepList {...args} />;

const defaultItem: SleepListProps = {
  options: [
    {
      text: "off",
      minutes: 0,
    },
    { text: "1分鐘", minutes: 1 },
    { text: "2分鐘", minutes: 2 },
  ],
  checkedOption: 0,
  setCheckedOption() {},
};

export const Default = Template.bind({});
Default.args = {
  ...defaultItem,
};
