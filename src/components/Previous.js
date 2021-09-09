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

const ScaleIn = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const FadeFromBot = keyframes`
  from {
    transform: translateY(20%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Section = styled.section`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
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

const Subtitle = styled.h3`
  font-size: 1.2rem;
  font-family: "Orbitron-B", Arial, Helvetica, sans-serif;
  &.project-name {
    transform-origin: 25% 50%;
    font-size: 2rem;
    font-family: "Orbitron-B", Arial, Helvetica, sans-serif;
    margin: 10px;
    padding-left: 10px;
    border-left: 2px solid var(--color-dark);
    @media (max-width: 800px) {
      font-size: 1.2rem;
    }
  }
  &.sub-project {
    margin: 10px;
  }
  @media (max-width: 800px) {
    font-size: 1rem;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  &.sub-project {
    margin: 0 10px;
    max-width: 70%;
  }
  @media (max-width: 800px) {
    font-size: 0.8rem;
  }
`;

const MainProjectsContainer = styled.div`
  position: relative;
  width: 80%;
  margin: 0 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    height: 20px;
    width: 100%;
    border: 2px solid var(--color-dark);
    border-bottom: none;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 20px;
    width: 100%;
    border: 2px solid var(--color-dark);
    border-top: none;
  }
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const MainProject = styled.div`
  transform: scale(0);
  width: 49%;
  @media (max-width: 800px) {
    width: 100%;
    margin: 15px 0;
  }
  &.in-viewport {
    animation: ${ScaleIn} 0.5s ease-in-out both;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const ProjectLogo = styled.img`
  height: 50px;
  width: 50px;
`;

const BtnContainer = styled.div`
  transition: all 0.3s ease-in-out;
  height: 40px;
  width: 150px;
  color: var(--color-bg);
  border: 2px solid var(--color-dark);
  background-color: var(--color-dark);
  justify-self: center;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: var(--color-bg);
    color: var(--color-dark);
  }
`;

const LinkButton = styled.a`
  font-family: "Orbitron-B", Arial, Helvetica, sans-serif;
  text-align: center;
  text-decoration: none;
`;

const ProjectsContainer = styled.div`
  transition: all 0.3s ease-in-out;
  transform: translateY(20%);
  opacity: 0;
  position: relative;
  width: 80%;
  margin: 4% 10%;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
    @media (max-width: 800px) {
      left: 0;
    }
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
    @media (max-width: 800px) {
      right: -4px;
    }
  }
  &.in-viewport {
    animation: ${FadeFromBot} 0.5s ease-in-out both;
  }
`;

const Project = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
    margin: 10px 0;
  }
`;

export default function Previous() {
  return (
    <Section id="previous">
      <Title id="previous-title">What have I done ?</Title>
      <MainProjectsContainer>
        <MainProject id="previous-main-1">
          <Container>
            <ProjectLogo
              src="/images/leaf.png"
              alt="Logo Feuille Taille et Tonte"
            />
            <Subtitle className="project-name">
              Taille &amp; Tonte | Freelance Landscaper Website
            </Subtitle>
          </Container>
          <Text>
            This project was about remaking an old website, and giving it a
            brand new life and style. My client, a landscaper, asked me to
            create a beautiful web interface to attract his clients. It was
            obviously important to take care about S.E.O., in order to develop
            my client's image through the web.
          </Text>
          <Subtitle>Tech'Stack :</Subtitle>
          <Text>
            NEXT.JS - JAVASCRIPT - STYLED COMPONENTS - HTML / CSS - VERCEL
          </Text>
          <LinkButton
            target="_blank"
            href="https://taille-et-tonte.vercel.app/"
          >
            <BtnContainer>Check it out !</BtnContainer>
          </LinkButton>
        </MainProject>
        <MainProject id="previous-main-2">
          <Container>
            <ProjectLogo src="/images/cube.png" alt="Logo de Cube" />
            <Subtitle className="project-name">
              Shiro-e | Interactive Profile Cube
            </Subtitle>
          </Container>
          <Text>
            Have you already seen an interactive cube, used as a resume ? Then
            you should check my profile cube. This application was for me a
            sansbox website, which let me experience and learn a lot about
            javascript, and discover Matter.js. It might not be finished yet,
            but the desktop experience is pretty funny, so I am happy with the
            result.
          </Text>
          <Subtitle>Tech'Stack :</Subtitle>
          <Text>
            REACT.JS - JAVASCRIPT - MATTER.JS - STYLED COMPONENTS - HTML / CSS -
            SPRITES - PISKELAPP.COM
          </Text>
          <LinkButton target="_blank" href="https://shiro-e-cube.vercel.app/">
            <BtnContainer>Check it out !</BtnContainer>
          </LinkButton>
        </MainProject>
      </MainProjectsContainer>
      <ProjectsContainer id="previous-projects">
        <Container>
          <ProjectLogo src="/images/certificat.png" alt="Logo de certificat" />
          <Subtitle className="project-name">
            Projects developed during my formation :
          </Subtitle>
        </Container>
        <Subtitle className="sub-project">&#9679; API | So Pekocko</Subtitle>
        <Project>
          <Text className="sub-project">
            This project was about creating an API in order to be able to post,
            modify and delete 'sauce recipes' for sharing with other users.
            People could at the end like, dislike a recipe from other users. A
            moderator account was also needed.
          </Text>
          <LinkButton
            target="_blank"
            href="https://github.com/elliotlmr/SoPekocko_backend"
          >
            <BtnContainer>Github</BtnContainer>
          </LinkButton>
        </Project>
        <Subtitle className="sub-project">
          &#9679; SEO | La Chouette Agence
        </Subtitle>
        <Project>
          <Text className="sub-project">
            This project was about optimizing a website that was already
            created. I had mainly to reorganize the HTML code, compress the JS
            code, compress images, replace the black-hat code into S.E.O
            firendly one, and finally make the website accessible.
          </Text>
          <LinkButton target="_blank" href="https://github.com/elliotlmr">
            <BtnContainer>Github</BtnContainer>
          </LinkButton>
        </Project>
        <Subtitle className="sub-project">
          &#9679; API + UI / UX | Orinoco
        </Subtitle>
        <Project>
          <Text className="sub-project">
            This project was about designing a user interface, for an e-commerce
            website, able to display the content from a provided API. I created
            a minimalist interface displaying each item on sale on a single page
            item list. This website was indeed following the S.E.O good
            practices.
          </Text>
          <LinkButton target="_blank" href="https://github.com/elliotlmr">
            <BtnContainer>Github</BtnContainer>
          </LinkButton>
        </Project>
        <Subtitle className="sub-project">
          &#9679; API + UI / UX | Groupomania
        </Subtitle>
        <Project>
          <Text className="sub-project">
            This project was about creating an entire social media website for a
            company. It was probably the most complete project, as I had to
            develop both backend and frontend parts of the application (using
            React.js). Manipulating an SQL database was the most challenging
            part of the project.
          </Text>
          <LinkButton
            target="_blank"
            href="https://github.com/elliotlmr/Groupomania_frontend"
          >
            <BtnContainer>Github</BtnContainer>
          </LinkButton>
        </Project>
      </ProjectsContainer>
    </Section>
  );
}
