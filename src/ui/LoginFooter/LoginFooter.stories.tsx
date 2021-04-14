import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs, optionsKnob } from "@storybook/addon-knobs";
import "bootstrap/dist/css/bootstrap.min.css";

import { LoginFooter } from "~ui";
import { LoginFooterProps, Sizes, FooterLinksColors } from "~src/types";

export default {
  title: "LoginFooter",
  component: LoginFooter,
  decorators: [withKnobs],
} as Meta;

export const Default: Story<LoginFooterProps> = () => (
  <LoginFooter
    margin={optionsKnob("Margin", Sizes, Sizes.medium, { display: "select" })}
    color={optionsKnob("Color", FooterLinksColors, FooterLinksColors.primary, { display: "select" })}
  ></LoginFooter>
);
