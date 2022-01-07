import React from "react";
import { Story } from "@storybook/react/types-6-0";
import Player, { PlayerProps } from "./Player";

export default {
  title: "Player/Player",
  component: Player,
};

const defaultItem: PlayerProps = {
  audioSrc: {
    name: "SoundHelix Song 1",
    artist: "T. Schürger",
    img:
      // eslint-disable-next-line max-len
      "https://play-lh.googleusercontent.com/mOkjjo5Rzcpk7BsHrsLWnqVadUK1FlLd2-UlQvYkLL4E9A0LpyODNIQinXPfUMjUrbE",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
};

const Template: Story<PlayerProps> = args => <Player {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...defaultItem,
};

export const Autoplay = Template.bind({});
Autoplay.args = {
  ...defaultItem,
  autoPlay: true,
};

export const StartFrom = Template.bind({});
StartFrom.args = {
  ...defaultItem,
  startSec: 10,
};

export const ExceedDuration = Template.bind({});
ExceedDuration.args = {
  ...defaultItem,
  startSec: 3000,
};

export const ChangeSong = Template.bind({});
ChangeSong.args = {
  ...defaultItem,
  controls: {
    changeSong() {},
  },
};

export const JumpGap = Template.bind({});
JumpGap.args = {
  ...defaultItem,
  controls: {
    jumpGap: 10,
  },
};

export const ChangeRates = Template.bind({});
ChangeRates.args = {
  ...defaultItem,
  controls: {
    changeRates: [1, 1.2, 1.5],
  },
};

export const Sleep = Template.bind({});
Sleep.args = {
  ...defaultItem,
  controls: {
    sleep: [
      { text: "off", minutes: 0 },
      { text: "1分鐘", minutes: 1 },
      { text: "2分鐘", minutes: 2 },
    ],
  },
};

export const Complete = Template.bind({});
Complete.args = {
  ...defaultItem,
  controls: {
    changeSong() {},
    jumpGap: 10,
    changeRates: [1, 1.2, 1.5],
    sleep: [
      { text: "off", minutes: 0 },
      { text: "1分鐘", minutes: 1 },
      { text: "2分鐘", minutes: 2 },
    ],
  },
};

export const Error = Template.bind({});
Error.args = {
  audioSrc: { ...defaultItem.audioSrc, url: "" },
};
