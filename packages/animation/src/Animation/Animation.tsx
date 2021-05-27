import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

import { localAnimationRepository, AnimationRepository } from "../animationRepository/animationRepository";

interface AnimationProps {
  type: string;
  playing: boolean;
  winner?: string;
  animationRepository?: AnimationRepository;
}

export const Animation: React.FC<AnimationProps> = ({
  type,
  playing,
  winner = "",
  animationRepository = localAnimationRepository,
}) => {
  const animationContainer = useRef<HTMLDivElement>(null);
  let animation = animationRepository.get(type).file;

  if (winner) {
    const animationString = JSON.stringify(animationRepository.get(type).file).replace("userWinner", winner);
    animation = JSON.parse(animationString);
  }

  useEffect(() => {
    if (animationContainer.current) {
      lottie.loadAnimation({
        container: animationContainer.current,
        animationData: animation,
        renderer: "svg",
        loop: true,
        autoplay: playing,
      });
    }
  }, [playing, type, animationRepository, animation]);

  return <div ref={animationContainer} />;
};
