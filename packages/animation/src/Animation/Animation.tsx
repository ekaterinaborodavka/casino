import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import styled from "styled-components/macro";

import { localAnimationRepository, AnimationRepository } from "~src/animationRepository/animationRepository";

const AnimationContainer = styled.div`
  margin: auto;
`;

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

  return <AnimationContainer ref={animationContainer} />;
};
