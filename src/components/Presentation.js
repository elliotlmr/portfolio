import { useEffect } from "react";
import styled, { keyframes } from "styled-components";

const SlideIn = keyframes`
    from {
        transform: scaleX(0) translateY(500px);
    }
    to {
        transform: scaleX(1);
    }
`;

const ArrowAnimationX = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`;

const ArrowAnimationY = keyframes`
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
`;

const Section = styled.section`
  position: relative;
  height: 100vh;
  width: 95vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  transform-origin: 25% 50%;
  animation: ${SlideIn} 0.5s both ease-in-out 1s;
  font-size: 6rem;
  font-family: "Orbitron-B", Arial, Helvetica, sans-serif;
  margin: 1% 10%;
  @media (max-width: 800px) {
    font-size: 4rem;
  }
`;

const Text = styled.p`
  transform-origin: 25% 50%;
  animation: ${SlideIn} 0.5s both ease-in-out 1s;
  font-size: 3rem;
  margin: 1% 10%;
  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`;

const Span = styled.span`
  font-size: 3rem;
  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`;

const ArrowContainer = styled.div`
  animation: ${SlideIn} 0.7s both ease-in-out 1s;
  position: absolute;
  bottom: 10vh;
  left: 0;
  right: 0;
  margin: auto;
  height: 100px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    bottom: 15vh;
  }
`;

const ArrowBorder = styled.div`
  position: absolute;
  background-color: var(--color-dark);
  &.arrow-btn-top {
    animation: ${ArrowAnimationX} 1s ease-in-out both 1.5s;
    transform-origin: center;
    top: 0;
    height: 2px;
    width: 100%;
  }
  &.arrow-btn-right {
    animation: ${ArrowAnimationY} 1s ease-in-out both 1.5s;
    transform-origin: bottom;
    right: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 2px;
    height: 100%;
  }
  &.arrow-btn-bot {
    transform-origin: bottom;
    transform: rotate(-45deg);
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 2px;
    height: 50%;
  }
  &.arrow-btn-left {
    transform-origin: bottom;
    transform: rotate(45deg);
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 2px;
    height: 50%;
  }
`;

export default function Presentation() {
  useEffect(() => {
    let word = document.getElementById("typewriter-word");
    let wordIndex = 0;
    let wordsArray = [
      "frontend",
      "backend",
      "creative",
      "autonomous",
      "motivated",
      "adaptable",
      "cooperative",
      "friendly",
      "serious",
      "still reading ?",
    ];

    function typewriter() {
      let currentWord = wordsArray[wordIndex];

      for (let i = 0; i < currentWord.length; i++) {
        setTimeout(() => {
          word.innerHTML += currentWord[i];
        }, 75 * i);
        if (i === currentWord.length - 1) {
          word.innerHTML = "";
          wordIndex === 9 ? (wordIndex = 0) : wordIndex++;
          setTimeout(() => {
            typewriter();
          }, 3000);
        }
      }
    }
    setTimeout(() => {
      typewriter();
    }, 2000);
  }, []);

  return (
    <Section>
      <Title>Hi, I'm Elliot.</Title>
      <Text>
        <Span id="typewriter-word"></Span> web developer
      </Text>
      <ArrowContainer>
        <ArrowBorder className="arrow-btn-top" />
        <ArrowBorder className="arrow-btn-right" />
        <ArrowBorder className="arrow-btn-bot" />
        <ArrowBorder className="arrow-btn-left" />
      </ArrowContainer>
    </Section>
  );
}
