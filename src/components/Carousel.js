import styled, { keyframes } from "styled-components";

const carouselAnimation = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  15% {
    transform: rotateY(60deg);
  }
  33% {
    transform: rotateY(120deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  66% {
    transform: rotateY(240deg);
  }
  85% {
    transform: rotateY(300deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

const FadeIn = keyframes`
  from {
    transform: scale(0) translateY(200px);
    opacity: 0;
  }
  to {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
`;

const Scene = styled.div`
  transform: scaleX(0) translateY(200px);
  position: relative;
  width: 128px;
  height: 128px;
  perspective: 1000rem;
  margin: 0 auto;
  @media (max-width: 1124px) {
    margin: 0 auto 80px auto;
  }
  &.in-viewport {
    animation: ${FadeIn} 0.5s ease-in-out both;
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform: translateZ(-488px);
  animation: ${carouselAnimation} linear 30s infinite;
  transform-style: preserve-3d;
  transition: transform 1s;
`;

const CarouselImg = styled.img`
  position: absolute;
  filter: drop-shadow(0 0 1px var(--color-dark));
  opacity: 98%;
  max-width: 128px;
  max-height: 128px;
  width: auto;
  height: auto;
  left: 22px;
  top: 10px;
  transition: transform 1s, opacity 1s;
  &:nth-child(1) {
    transform: rotateY(0deg) translateZ(400px);
  }
  &:nth-child(2) {
    transform: rotateY(60deg) translateZ(400px);
  }
  &:nth-child(3) {
    transform: rotateY(120deg) translateZ(400px);
  }
  &:nth-child(4) {
    transform: rotateY(180deg) translateZ(400px);
  }
  &:nth-child(5) {
    transform: rotateY(240deg) translateZ(400px);
    top: 25px;
  }
  &:nth-child(6) {
    transform: rotateY(300deg) translateZ(400px);
  }
`;

export default function Carousel() {
  return (
    <Scene id="skills-carousel">
      <CarouselContainer>
        <CarouselImg src="/images/html-logo.png" />
        <CarouselImg src="/images/css-logo.png" />
        <CarouselImg src="/images/js-logo.png" />
        <CarouselImg src="/images/react-logo.png" />
        <CarouselImg src="/images/seo-logo.png" />
        <CarouselImg src="/images/github-logo.png" />
      </CarouselContainer>
    </Scene>
  );
}
