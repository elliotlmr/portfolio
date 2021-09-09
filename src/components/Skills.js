import styled, { keyframes } from "styled-components";
import Carousel from "./Carousel";

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
  }
  &.in-viewport {
    animation: ${FadeIn} 0.5s ease-in-out both;
  }
`;

const SkillsContainer = styled.div`
  transform: translateX(-50%);
  opacity: 0;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 4% 10% 0 10%;
  &::before {
    content: "";
    height: 100%;
    width: 20px;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 4px solid var(--color-dark);
    border-right: none;
  }
  &::after {
    content: "";
    height: 100%;
    width: 20px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 4px solid var(--color-dark);
    border-left: none;
  }
  &.in-viewport {
    animation: ${FadeIn} 0.5s ease-in-out both;
  }
`;

const Skill = styled.a`
  transition: all 0.3s ease-in-out;
  font-size: 1.5rem;
  margin: 5px 15px;
  text-decoration: none;
  color: var(--color-dark);
  &:hover,
  :active {
    color: var(--color-blue);
  }
  @media (max-width: 800px) {
    font-size: 0.8rem;
  }
`;

const Text = styled.p`
  transform: translateX(-50%);
  opacity: 0;
  font-size: 1.5rem;
  margin: 10px 10% 4% 10%;
  @media (max-width: 800px) {
    font-size: 1rem;
  }
  &.in-viewport {
    animation: ${FadeIn} 0.5s ease-in-out both;
  }
`;

export default function Skills() {
  return (
    <Section id="skills">
      <Title id="skills-title">What can I use ?</Title>
      <SkillsContainer id="skills-content">
        <Skill target="_blank" href="https://www.w3schools.com/html/">
          HTML
        </Skill>
        <Skill target="_blank" href="https://www.w3schools.com/css/">
          CSS
        </Skill>
        <Skill
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        >
          JAVASCRIPT
        </Skill>
        <Skill target="_blank" href="https://reactjs.org/">
          REACT.JS
        </Skill>
        <Skill target="_blank" href="https://nextjs.org/">
          NEXT.JS
        </Skill>
        <Skill target="_blank" href="https://en.wikipedia.org/wiki/API">
          API
        </Skill>
        <Skill target="_blank" href="https://nodejs.org/en/about/">
          NODE.JS
        </Skill>
        <Skill target="_blank" href="https://expressjs.com/">
          EXPRESS
        </Skill>
        <Skill target="_blank" href="http://sequelize.org/">
          SEQUELIZE
        </Skill>
        <Skill target="_blank" href="https://www.mongodb.com/">
          MONGODB
        </Skill>
        <Skill target="_blank" href="https://www.mysql.com/">
          MYSQL
        </Skill>
        <Skill target="_blank" href="https://styled-components.com/">
          STYLED COMPONENTS
        </Skill>
        <Skill target="_blank" href="https://getbootstrap.com/">
          BOOTSTRAP
        </Skill>
        <Skill target="_blank" href="https://sass-lang.com/">
          SASS
        </Skill>
        <Skill target="_blank" href="https://github.com/">
          GITHUB
        </Skill>
        <Skill target="_blank" href="https://www.heroku.com/">
          HEROKU
        </Skill>
        <Skill target="_blank" href="https://vercel.com/">
          VERCEL
        </Skill>
      </SkillsContainer>
      <Text id="skills-text">+ any technology you need me to learn.</Text>
      <Carousel />
    </Section>
  );
}
