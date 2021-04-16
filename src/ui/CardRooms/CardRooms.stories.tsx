import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs } from "@storybook/addon-knobs";
import "bootstrap/dist/css/bootstrap.min.css";

import { CardRooms } from "~ui";

export default {
  title: "CardRooms",
  component: CardRooms,
  decorators: [withKnobs],
} as Meta;

export const Default: Story = () => <CardRooms></CardRooms>;
