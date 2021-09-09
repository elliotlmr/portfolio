import styled, { keyframes } from "styled-components";

const DropAnimation = keyframes`
    0% {
        width: 2px;
        transform: translateY(-100%);
    }
    60% {
        width: 2px;
        transform: translateY(0);
    }
    100% {
        width: 100%;
        transform: translateY(0);
    }
`;

const FromBottom = keyframes`
    from {
        transform: translateY(400%) scaleX(0.1);
    }
    60% {
        transform: translateY(0) scaleX(0.1);
    }
    to {
        transform: translateY(0);
    }
`;

const FromTop = keyframes`
    from {
        transform: translateY(-400%) scaleX(0.1);
    }
    60% {
        transform: translateY(0) scaleX(0.1);
    }
    to {
        transform: translateY(0);
    }
`;

const FromLeft = keyframes`
    from {
        transform: translateX(-400%) scaleY(0.1);
    }
    60% {
        transform: translateX(0) scaleY(0.1);
    }
    to {
        transform: translateX(0);
    }
`;

const FromRight = keyframes`
    from {
        transform: translateX(400%) scaleY(0.1);
    }
    60% {
        transform: translateX(0) scaleY(0.1);
    }
    to {
        transform: translateX(0);
    }
`;

const MidAnimation = keyframes`
    from {
        opacity: 0;
    }
    60% {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const FadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
        transform: translateX(30vh);
    }
`;

const Main = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--color-dark);
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const Drop = styled.div`
  animation: ${DropAnimation} 1s ease-in-out;
  transform-origin: center;
  height: 100%;
  width: 100%;
  background-color: var(--color-bg);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled.div`
  animation: ${FadeOut} 1s both ease-in-out 1.5s;
  transition: all 0.5s ease-in-out;
  position: relative;
  height: 300px;
  width: 300px;
`;

const LogoPart = styled.div`
  &.logo-top {
    animation: ${FromLeft} 1s ease-in-out 1s both;
    transform-origin: top;
    position: absolute;
    top: 0.1vh;
    right: 0.1vh;
    height: 0;
    width: 250px;
    border-top: 40px solid var(--color-dark);
    border-left: 40px solid transparent;
  }
  &.logo-right {
    animation: ${FromBottom} 1s ease-in-out 1s both;
    transform-origin: right;
    position: absolute;
    top: 0.1vh;
    right: 0.1vh;
    height: 250px;
    width: 0;
    border-bottom: 40px solid transparent;
    border-right: 40px solid var(--color-dark);
  }
  &.logo-bot {
    transform-origin: bottom;
    animation: ${FromRight} 1s ease-in-out 1s both;
    position: absolute;
    bottom: 0.1vh;
    left: 0.1vh;
    height: 0;
    width: 250px;
    border-bottom: 40px solid var(--color-dark);
    border-right: 40px solid transparent;
  }
  &.logo-left {
    transform-origin: left;
    animation: ${FromTop} 1s ease-in-out 1s both;
    position: absolute;
    left: 0.1vh;
    bottom: 0.1vh;
    height: 250px;
    width: 0;
    border-top: 40px solid transparent;
    border-left: 40px solid var(--color-dark);
  }
  &.logo-mid {
    animation: ${MidAnimation} 1s both ease-in-out 1s;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 100px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    transform: skewX(45deg);
    background-color: var(--color-dark);
  }
`;

export default function Loading() {
  return (
    <Main>
      <Drop>
        <LogoContainer>
          <LogoPart className="logo-top" />
          <LogoPart className="logo-right" />
          <LogoPart className="logo-bot" />
          <LogoPart className="logo-left" />
          <LogoPart className="logo-mid" />
        </LogoContainer>
      </Drop>
    </Main>
  );
}
