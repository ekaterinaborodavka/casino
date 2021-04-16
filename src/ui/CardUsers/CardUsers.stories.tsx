import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs } from "@storybook/addon-knobs";
import "bootstrap/dist/css/bootstrap.min.css";

import { CardUsers } from "~ui";

export default {
  title: "CardUsers",
  component: CardUsers,
  decorators: [withKnobs],
} as Meta;

export const Default: Story = () => <CardUsers></CardUsers>;
