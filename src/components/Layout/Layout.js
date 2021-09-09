import styled, { keyframes } from "styled-components";
import Header from "./Header";

const ScaleY = keyframes`
    from {
        transform: scaleY(0);
    }
    to {
        transform: scaleY(1);
    }
`;

const ScaleX = keyframes`
    from {
        transform: scaleX(0);
    }
    to {
        transform: scaleX(1);
    }
`;

const Overlay = styled.div`
  &.overlay-first {
    animation: ${ScaleY} 0.8s ease-in-out;
    transform-origin: top;
    z-index: 10;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 95vh;
    width: 2vw;
    border-right: 2px solid var(--color-dark);
    background-color: var(--color-bg);
    &::before {
      animation: ${ScaleX} 0.5s ease-in-out;
      animation-delay: 0.8s;
      content: "";
      height: 2px;
      width: 40vw;
      background-color: var(--color-bg);
      position: fixed;
      top: 2.5vh;
      right: 10vw;
    }
    &::after {
      animation: ${ScaleX} 0.5s ease-in-out;
      animation-delay: 0.8s;
      content: "";
      height: 2px;
      width: 40vw;
      background-color: var(--color-bg);
      position: fixed;
      bottom: 2.5vh;
      left: 10vw;
    }
  }
  &.overlay-second {
    animation: ${ScaleY} 0.8s ease-in-out;
    transform-origin: bottom;
    z-index: 9;
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 95vh;
    width: 2vw;
    border-left: 2px solid var(--color-dark);
    background-color: var(--color-bg);
  }
  &.overlay-third {
    animation: ${ScaleX} 0.8s ease-in-out;
    transform-origin: left;
    z-index: 9;
    height: 2.5vh;
    width: 96vw;
    background-color: var(--color-bg);
    border-bottom: 2px solid var(--color-dark);
    position: fixed;
    top: 0;
    right: 2vw;
  }
  &.overlay-fourth {
    animation: ${ScaleX} 0.8s ease-in-out;
    transform-origin: right;
    z-index: 9;
    height: 2.5vh;
    width: 96vw;
    background-color: var(--color-bg);
    border-top: 2px solid var(--color-dark);
    position: fixed;
    bottom: 0;
    right: 2vw;
  }
`;

const Main = styled.main`
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Layout(props) {
  return (
    <>
      <Overlay className="overlay-first" />
      <Overlay className="overlay-second" />
      <Overlay className="overlay-third" />
      <Overlay className="overlay-fourth" />
      <Header />
      <Main>{props.children}</Main>
    </>
  );
}
