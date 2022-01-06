import React from "react";
import { Story } from "@storybook/react/types-6-0";
import App from "./App";

export default {
  component: App,
  title: "Player/App",
};

const Template: Story = () => <App />;

export const Default = Template.bind({});
