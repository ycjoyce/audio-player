import React from "react";
import { Story } from "@storybook/react/types-6-0";
import ChangeSongButton, { ChangeSongButtonProps } from "./ChangeSongButton";

export default {
  component: ChangeSongButton,
  title: "Player/Buttons/ChangeSongButton",
};

const Template: Story<ChangeSongButtonProps> = args => (
  <ChangeSongButton {...args} />
);

const defaultItem: ChangeSongButtonProps = {
  direction: "prev",
  onChange(direction) {
    console.log(direction);
  },
};

export const DefaultPrev = Template.bind({});
DefaultPrev.args = {
  ...defaultItem,
};

export const DefaultNext = Template.bind({});
DefaultNext.args = {
  ...defaultItem,
  direction: "next",
};

export const PrevWithContent = Template.bind({});
PrevWithContent.args = {
  ...defaultItem,
  children: <i className="fas fa-backward" />,
};

export const NextWithContent = Template.bind({});
NextWithContent.args = {
  ...defaultItem,
  direction: "next",
  children: <i className="fas fa-forward" />,
};
