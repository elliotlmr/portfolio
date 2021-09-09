import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const LogoAnimation = keyframes`
    0% {
      opacity: 0;
        transform: scale(6);
        top: 45%;
    }
    60% {
      opacity: 1;
        transform: scale(1);
        top: 40%;
    }
    100% {
        top: 0;
    }
`;

const WrapAnimation = keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`;

const MainContainer = styled.header`
  z-index: 15;
  animation: ${LogoAnimation} 1s ease-in-out;
  position: fixed;
  right: 9.75vw;
  top: 0;
  width: 40.5vw;
  height: 5vh;
  display: flex;
  justify-content: center;
  background-color: var(--color-bg);
`;

const LogoContainer = styled.div`
  transition: all 0.5s ease-in-out;
  position: relative;
  height: 100%;
  width: ${(props) => (props.isOpened ? "100%" : "5vh")};
`;

const LogoPart = styled.div`
  &.logo-top {
    position: absolute;
    top: 0.1vh;
    right: 0.1vh;
    height: 0;
    width: 3.7vh;
    border-top: 0.9vh solid var(--color-dark);
    border-left: 0.9vh solid transparent;
  }
  &.logo-right {
    position: absolute;
    top: 0.1vh;
    right: 0.1vh;
    height: 3.7vh;
    width: 0;
    border-bottom: 0.9vh solid transparent;
    border-right: 0.9vh solid var(--color-dark);
  }
  &.logo-bot {
    position: absolute;
    bottom: 0.1vh;
    left: 0.1vh;
    height: 0;
    width: 3.7vh;
    border-bottom: 0.9vh solid var(--color-dark);
    border-right: 0.9vh solid transparent;
  }
  &.logo-left {
    position: absolute;
    left: 0.1vh;
    bottom: 0.1vh;
    height: 3.7vh;
    width: 0;
    border-top: 0.9vh solid transparent;
    border-left: 0.9vh solid var(--color-dark);
  }
  &.logo-mid {
    opacity: ${(props) => (props.isOpened ? "0" : "1")};
    position: absolute;
    top: 2.1vh;
    left: 0;
    right: 0;
    margin: auto;
    width: 2vh;
    height: 0.8vh;
    transition: all 0.3s ease-in-out;
    transform: skewX(45deg);
    background-color: var(--color-dark);
  }
`;

const Navigation = styled.nav`
  transition: all 0.5s ease-in-out;
  transform: ${(props) =>
    props.isOpened ? "translateY(0)" : "translateY(-50px)"};
  opacity: ${(props) => (props.isOpened ? "1" : "0")};
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    transition-duration: 0.3s;
    transform-origin: top;
    height: 35vh;
    width: 5vw;
    flex-direction: column;
    transform: scaleY(0);
    &.show-menu {
      transform: scaleY(1);
      & :nth-child(1) {
        transition-delay: 0.1s;
        opacity: 1;
      }
      & :nth-child(2) {
        transition-delay: 0.2s;
        opacity: 1;
      }
      & :nth-child(3) {
        transition-delay: 0.3s;
        opacity: 1;
      }
      & :nth-child(4) {
        transition-delay: 0.4s;
        opacity: 1;
      }
      & :nth-child(5) {
        transition-delay: 0.5s;
        opacity: 1;
      }
    }
  }
`;

const NavigationLink = styled.a`
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  display: block;
  width: 15px;
  height: 15px;
  border: 2px solid var(--color-dark);
  margin: 10px;
  display: flex;
  flex-direction: row;
  background-color: var(--color-bg);
  @media (max-width: 800px) {
    opacity: 0;
  }
  &.active-nav {
    background-color: var(--color-dark);
  }
`;

const MenuWrap = styled.div`
  transition: all 0.3s ease-in-out;
  animation: ${WrapAnimation} 1.8s ease-in-out;
  display: none;
  @media (max-width: 800px) {
    position: absolute;
    top: 0.5vh;
    height: 4vh;
    width: 4vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &.show-menu {
      transform: rotate(90deg);
    }
  }
`;

const WrapBar = styled.div`
  transition: all 0.3s ease-in-out;
  &.wrap-one {
    height: 0;
    width: 2vh;
    border-bottom: 0.75vh solid var(--color-dark);
    border-right: 1vh solid transparent;
    &.show-menu {
    }
  }
  &.wrap-two {
    transform-origin: center;
    width: 4vh;
    height: 0.75vh;
    background-color: var(--color-dark);
    &.show-menu {
      transform: scale(0);
      opacity: 0;
    }
  }
  &.wrap-three {
    align-self: flex-end;
    height: 0;
    width: 2vh;
    border-top: 0.75vh solid var(--color-dark);
    border-left: 1vh solid transparent;
    &.show-menu {
    }
  }
`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [navStatus, setNavStatus] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 1000);
  }, [open, setOpen]);

  useEffect(() => {
    let profile = document.getElementById("profile");
    let experiences = document.getElementById("experiences");
    let skills = document.getElementById("skills");
    let projects = document.getElementById("previous");
    let contact = document.getElementById("contact");

    document.body.onscroll = () => {
      profile.classList.contains("in-viewport") && setNavStatus("profile");
      experiences.classList.contains("in-viewport") &&
        setNavStatus("experiences");
      skills.classList.contains("in-viewport") && setNavStatus("skills");
      projects.classList.contains("in-viewport") && setNavStatus("projects");
      contact.classList.contains("in-viewport") && setNavStatus("contact");
    };
  }, [navStatus]);

  return (
    <MainContainer>
      <LogoContainer isOpened={open}>
        <LogoPart className="logo-top" />
        <LogoPart className="logo-right" />
        <LogoPart className="logo-bot" />
        <LogoPart className="logo-left" />
        <LogoPart className="logo-mid" isOpened={open} />
      </LogoContainer>
      <Navigation isOpened={open} className={showMenu ? "show-menu" : ""}>
        <NavigationLink
          href="#profile"
          className={navStatus === "profile" ? "active-nav" : ""}
        />
        <NavigationLink
          href="#experiences"
          className={navStatus === "experiences" ? "active-nav" : ""}
        />
        <NavigationLink
          href="#skills"
          className={navStatus === "skills" ? "active-nav" : ""}
        />
        <NavigationLink
          href="#previous"
          className={navStatus === "projects" ? "active-nav" : ""}
        />
        <NavigationLink
          href="#contact"
          className={navStatus === "contact" ? "active-nav" : ""}
        />
      </Navigation>
      <MenuWrap
        className={showMenu ? "show-menu" : ""}
        onClick={() => setShowMenu(showMenu ? false : true)}
      >
        <WrapBar className={showMenu ? "show-menu wrap-one" : "wrap-one"} />
        <WrapBar className={showMenu ? "show-menu wrap-two" : "wrap-two"} />
        <WrapBar className={showMenu ? "show-menu wrap-three" : "wrap-three"} />
      </MenuWrap>
    </MainContainer>
  );
}
