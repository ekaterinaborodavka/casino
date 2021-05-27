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
  winner,
  animationRepository = localAnimationRepository,
}) => {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationContainer.current) {
      lottie.loadAnimation({
        container: animationContainer.current,
        animationData: animationRepository.get(type, winner).file,
        renderer: "svg",
        loop: true,
        autoplay: playing,
      });
    }
  }, [playing, type, animationRepository, winner]);

  return <div ref={animationContainer} />;
};
