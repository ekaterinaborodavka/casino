import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs, text } from "@storybook/addon-knobs";

import { CardUserProps } from "./CardUser";

import { CardUser } from "./CardUser";

export default {
  title: "CardUser",
  component: CardUser,
  decorators: [withKnobs],
} as Meta;

export const Default: Story<CardUserProps> = () => (
  <CardUser
    userName={text("UserName", "UserName")}
    userImg={text("UserImg", "https://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-1024x640.jpg")}
  ></CardUser>
);
