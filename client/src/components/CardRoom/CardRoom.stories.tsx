import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs, optionsKnob, number, date } from "@storybook/addon-knobs";

import { CardRoom, CardRoomProps } from "./CardRoom";
import { DateFormatVariant } from "~src/types/types";

export default {
  title: "CardRoom",
  component: CardRoom,
  decorators: [withKnobs],
} as Meta;

export const Default: Story<CardRoomProps> = () => (
  <CardRoom
    formatDate={optionsKnob("Format", DateFormatVariant, DateFormatVariant.date, { display: "select" })}
    numberOfUsers={number("NumberOfUsers", 5, { min: 0, max: 10 })}
    bid={number("Bid", 50, { min: 0 })}
    maxUsers={number("maxUsers", 10, { min: 0 })}
    date={date("Date", new Date())}
  ></CardRoom>
);
