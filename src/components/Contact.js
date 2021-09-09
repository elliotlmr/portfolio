import styled, { keyframes } from "styled-components";

const FadeIn = keyframes`
  from {
    transform: translateX(-50%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
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

const Title = styled.h2`
  transform: translateX(-50%);
  opacity: 0;
  transform-origin: 25% 50%;
  font-size: 4rem;
  font-family: "Orbitron-B", Arial, Helvetica, sans-serif;
  margin: 4% 10%;
  @media (max-width: 800px) {
    font-size: 1.5rem;
    margin: 10%;
  }
  &.in-viewport {
    animation: ${FadeIn} 0.5s ease-in-out both;
  }
`;

const Subtitle = styled.h3`
  font-size: 2rem;
  font-family: "Orbitron-B", Arial, Helvetica, sans-serif;
  @media (max-width: 1024px) {
    position: absolute;
    left: 0;
    right: 0;
    top: -25px;
    margin: auto;
    width: fit-content;
  }
  @media (max-width: 575px) {
    font-size: 1rem;
    top: -10px;
  }
`;

const Link = styled.a`
  font-size: 1.5rem;
  text-decoration: none;
  color: var(--color-blue);
  @media (max-width: 575px) {
    font-size: 0.8rem;
  }
`;

const Container = styled.div`
  transform: translateX(-50%);
  opacity: 0;
  position: relative;
  width: 80%;
  margin: 4% 10%;
  padding: 15px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  &::before {
    content: "";
    height: 100%;
    width: 20px;
    position: absolute;
    left: -2px;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 2px solid var(--color-dark);
    border-right: none;
  }
  &::after {
    content: "";
    height: 100%;
    width: 20px;
    position: absolute;
    right: -2px;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 2px solid var(--color-dark);
    border-left: none;
  }
  @media (max-width: 1024px) {
    padding-top: 30px;
  }
  &.in-viewport {
    animation: ${FadeIn} 0.5s ease-in-out both;
  }
`;

const LinkButton = styled.a`
  font-family: "Orbitron-B", Arial, Helvetica, sans-serif;
  text-align: center;
  text-decoration: none;
`;

const Logo = styled.img`
  transition: all 0.3s ease-in-out;
  height: 50px;
  width: 50px;
  cursor: pointer;
  &:hover {
    filter: opacity(0.5);
  }
`;

export default function Contact() {
  function handleCopy() {
    let text = document.getElementById("mymail").innerText;

    navigator.clipboard.writeText(text).then(() => {
      alert("Mail copied to clipboard !");
    });
  }

  return (
    <Section id="contact">
      <Title id="contact-title">Let's get in touch !</Title>
      <Container id="contact-mail">
        <Subtitle>Contact me by mail :</Subtitle>
        <Link id="mymail" href="mailto:lemaireelliot@gmail.com">
          lemaireelliot@gmail.com
        </Link>
        <Logo
          onClick={handleCopy}
          src="/images/clipboard.png"
          alt="Clipboard logo"
        />
      </Container>
      <Container id="contact-social">
        <Subtitle>Find me on the web :</Subtitle>
        <LinkButton
          target="_blank"
          href="https://www.linkedin.com/in/elliot-lemaire/"
        >
          <Logo src="/images/linkedin.png" alt="Logo LinkedIn" />
        </LinkButton>
        <LinkButton target="_blank" href="https://github.com/elliotlmr">
          <Logo src="/images/github-logo.png" alt="Logo Github" />
        </LinkButton>
        <LinkButton
          target="_blank"
          href="https://www.facebook.com/elliot.lemaire/"
        >
          <Logo src="/images/facebook.png" alt="Logo facebook" />
        </LinkButton>
      </Container>
    </Section>
  );
}
