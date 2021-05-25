import { AnimationRepository } from "./animationRepository";

jest.mock("~src/utils/defaultAnimations", () => [{ type: "cat", file: {} }]);
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultAnimations = require("~src/utils/defaultAnimations");
const animationRepository = new AnimationRepository(defaultAnimations);

describe("AnimationRepository methods", () => {
  it("get: should get current animation", () => {
    const type = "cat";
    const result = {
      type: "cat",
      file: {},
    };
    expect(animationRepository.get(type)).toEqual(result);
  });

  it("get: should throw error if type of animation not found", () => {
    const type = "";
    expect(() => animationRepository.get(type)).toThrow("Animation not found");
  });

  it("add: should add new animation", () => {
    const type = "test";
    const newAnimation = {
      type,
      file: {},
    };
    const result = [...defaultAnimations, newAnimation];
    expect(animationRepository.add(type, {})).toEqual(result);
  });

  it("add: if animation is string should parse to JSON", () => {
    const type = "test";
    const newAnimation = {
      type,
      file: {},
    };
    const result = [...defaultAnimations, newAnimation];
    expect(animationRepository.add(type, "{}")).toEqual(result);
  });
});
