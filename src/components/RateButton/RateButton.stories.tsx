import React from "react";
import { Story } from "@storybook/react/types-6-0";
import RateButton, { RateButtonProps } from "./RateButton";

export default {
  component: RateButton,
  title: "Player/Buttons/RateButton",
};

const Template: Story<RateButtonProps> = args => <RateButton {...args} />;

const defaultItem = {
  rates: [1, 1.2, 1.5],
  onUpdate(rate: number) {
    console.log(rate);
  },
};

export const Default = Template.bind({});
Default.args = { ...defaultItem };
