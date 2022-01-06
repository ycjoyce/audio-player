import React from "react";
import { Story } from "@storybook/react/types-6-0";
import TrackTitle, { TrackTitleProps } from "./TrackTitle";

export default {
  component: TrackTitle,
  title: "Player/TrackTitle",
};

const Template: Story<TrackTitleProps> = args => <TrackTitle {...args} />;

const defaultItem: TrackTitleProps = {
  name: "Wedding Dress",
  artist: "Jason",
};

export const Default = Template.bind({});
Default.args = { ...defaultItem };

export const WithImage = Template.bind({});
WithImage.args = {
  ...defaultItem,
  img:
    // eslint-disable-next-line max-len
    "https://play-lh.googleusercontent.com/mOkjjo5Rzcpk7BsHrsLWnqVadUK1FlLd2-UlQvYkLL4E9A0LpyODNIQinXPfUMjUrbE",
};
