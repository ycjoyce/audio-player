import React from "react";
import { Story } from "@storybook/react/types-6-0";

import Loading from "./Loading";

export default {
  component: Loading,
  title: "Player/Loading",
};

const Template: Story = ({ args }) => <Loading {...args} />;

export const Default = Template.bind({});
