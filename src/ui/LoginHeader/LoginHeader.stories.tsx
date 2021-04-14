import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs, optionsKnob } from "@storybook/addon-knobs";
import "bootstrap/dist/css/bootstrap.min.css";

import { LoginHeader } from "~ui";
import { LoginHeaderProps, Sizes } from "~src/types";

export default {
  title: "LoginHeader",
  component: LoginHeader,
  decorators: [withKnobs],
} as Meta;

export const Default: Story<LoginHeaderProps> = () => (
  <LoginHeader marginRight={optionsKnob("MarginRight", Sizes, Sizes.medium, { display: "select" })}></LoginHeader>
);
