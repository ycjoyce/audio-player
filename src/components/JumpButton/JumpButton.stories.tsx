import React from "react";
import { Story } from "@storybook/react/types-6-0";
import JumpButton, { JumpButtonProps } from "./JumpButton";

export default {
  component: JumpButton,
  title: "Player/Buttons/JumpButton",
};

const Template: Story<JumpButtonProps> = args => <JumpButton {...args} />;

const defaultItem: JumpButtonProps = {
  direction: "prev",
  gap: 10,
  onJump(direction) {
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
  children: <i className="fas fa-undo-alt" />,
};

export const NextWithContent = Template.bind({});
NextWithContent.args = {
  ...defaultItem,
  children: <i className="fas fa-redo-alt" />,
};
