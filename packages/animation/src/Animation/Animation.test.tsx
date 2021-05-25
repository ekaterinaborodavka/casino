import React from "react";
import { shallow } from "enzyme";

import { Animation } from "./Animation";

jest.mock("~src/animationRepository/animationRepository");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { localAnimationRepository } = require("~src/animationRepository/animationRepository");
const animationRepositoryMock = localAnimationRepository as jest.MockedClass<typeof localAnimationRepository>;

describe("Animation", () => {
  it("should render animations", () => {
    const props = {
      type: "test",
      playing: true,
      animationRepository: animationRepositoryMock,
    };
    const component = shallow(<Animation {...props} />);
    expect(component.children()).toHaveLength(0);
    expect(component.find("Animation__AnimationContainer")).toHaveLength(1);
  });
});
