import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs, optionsKnob, number, date } from "@storybook/addon-knobs";

import { CardRoom, CardRoomProps } from "./CardRoom";

// eslint-disable-next-line no-unused-vars
enum DateFormatVariant {
  // eslint-disable-next-line no-unused-vars
  time = "hh:mm:ss aa",
  // eslint-disable-next-line no-unused-vars
  fullDate = "dd-MM-yyyy hh:mm:ss aa",
}

export default {
  title: "CardRoom",
  component: CardRoom,
  decorators: [withKnobs],
} as Meta;

export const Default: Story<CardRoomProps> = () => (
  <CardRoom
    formatDate={optionsKnob("Format", DateFormatVariant, DateFormatVariant.time, { display: "select" })}
    numberOfUsers={number("NumberOfUsers", 5, { min: 0, max: 10 })}
    bid={number("Bid", 50, { min: 0 })}
    date={date("Date", new Date())}
  ></CardRoom>
);
