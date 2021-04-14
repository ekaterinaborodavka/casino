import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs, optionsKnob } from "@storybook/addon-knobs";
import "bootstrap/dist/css/bootstrap.min.css";

import { LoginForm } from "~ui";
import { LoginFormProps, Sizes } from "~src/types";

export default {
  title: "LoginForm",
  component: LoginForm,
  decorators: [withKnobs],
} as Meta;

export const Default: Story<LoginFormProps> = () => (
  <LoginForm
    margininputbottom={optionsKnob("marginInputBottom", Sizes, Sizes.medium, { display: "select" })}
    sizebutton={optionsKnob("sizeButton", Sizes, Sizes.medium, { display: "select" })}
  ></LoginForm>
);
