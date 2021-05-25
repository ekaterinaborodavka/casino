import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

import { CardUser } from "./CardUser";

configure({ adapter: new Adapter() });

const props = {
  name: "test name",
  img: "test url",
};

describe("CardUser", () => {
  it("has children", () => {
    const component = shallow(<CardUser {...props} />);
    expect(component.children()).toHaveLength(2);
    expect(component.find("CardUser__StyledCardImg")).toHaveLength(1);
    expect(component.find("CardUser__StyledCardBody")).toHaveLength(1);
  });
  it("correct render props", () => {
    const component = shallow(<CardUser {...props} />);
    expect(component.find("CardUser__StyledCardTitle").text()).toEqual(props.name);
    expect(component.find("CardUser__StyledCardImg").prop("src")).toEqual(props.img);
  });
});
