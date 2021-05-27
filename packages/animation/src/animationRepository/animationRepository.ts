import { defaultAnimations } from "../utils/defaultAnimations";

interface AnimationType {
  type: string;
  file: string | Record<string, unknown>;
}
export class AnimationRepository {
  private animations: AnimationType[];

  constructor(animations: AnimationType[]) {
    this.animations = animations;
  }

  add(type: string, animation: string | Record<string, unknown>): AnimationType[] {
    let animationFile = animation;
    if (typeof animation === "string") {
      animationFile = JSON.parse(animation);
    }
    const newAnimation = {
      type,
      file: animationFile,
    };
    this.animations.push(newAnimation);
    return this.animations;
  }

  get(type: string, winner: string | undefined): AnimationType {
    let currentAnimation = this.animations.find((animation) => animation.type === type);
    if (winner) {
      const animationString = JSON.stringify(currentAnimation).replaceAll("%userWinner%", winner);
      currentAnimation = JSON.parse(animationString);
    }

    if (currentAnimation) {
      return currentAnimation;
    }
    throw new Error("Animation not found");
  }
}

export const localAnimationRepository = new AnimationRepository(defaultAnimations);
