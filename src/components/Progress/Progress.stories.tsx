import React from "react";
import { Story } from "@storybook/react/types-6-0";
import Progress, { ProgressProps } from "./Progress";

export default {
  component: Progress,
  title: "Player/Progress",
};

const Template: Story<ProgressProps> = args => <Progress {...args} />;

const defaultItem: ProgressProps = {
  totalLength: 100,
  currentPosition: 0,
  onUpdate(position) {
    console.log(position);
  },
};

export const Default = Template.bind({});
Default.args = {
  ...defaultItem,
};

export const Time = Template.bind({});
Time.args = {
  ...defaultItem,
  text: "time",
};

export const Original = Template.bind({});
Original.args = {
  ...defaultItem,
  text: "original",
};
