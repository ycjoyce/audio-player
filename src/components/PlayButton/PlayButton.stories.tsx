import React from "react";
import { Story } from "@storybook/react/types-6-0";
import PlayButton, { PlayButtonProps } from "./PlayButton";

export default {
  component: PlayButton,
  title: "Player/Buttons/PlayButton",
};

const Template: Story<PlayButtonProps> = args => <PlayButton {...args} />;

const defaultItem = {
  playing: false,
  onClick(toPlay: boolean) {
    console.log(toPlay);
  },
};

const content = {
  toPlay: <i className="far fa-play-circle" />,
  toPause: <i className="far fa-pause-circle" />,
};

export const Playing = Template.bind({});
Playing.args = {
  ...defaultItem,
  playing: true,
};

export const Paused = Template.bind({});
Paused.args = {
  ...defaultItem,
};

export const PlayingWithContent = Template.bind({});
PlayingWithContent.args = {
  ...defaultItem,
  playing: true,
  content,
};

export const PausedWithContent = Template.bind({});
PausedWithContent.args = {
  ...defaultItem,
  content,
};
