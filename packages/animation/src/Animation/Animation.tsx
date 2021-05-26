import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

import { localAnimationRepository, AnimationRepository } from "../animationRepository/animationRepository";

interface AnimationProps {
  type: string;
  playing: boolean;
  animationRepository?: AnimationRepository;
}

export const Animation: React.FC<AnimationProps> = ({
  type,
  playing,
  animationRepository = localAnimationRepository,
}) => {
  const animationContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (animationContainer.current) {
      lottie.loadAnimation({
        container: animationContainer.current,
        animationData: animationRepository.get(type).file,
        renderer: "svg",
        loop: true,
        autoplay: playing,
      });
    }
  }, [playing, type, animationRepository]);

  return <div ref={animationContainer} />;
};
