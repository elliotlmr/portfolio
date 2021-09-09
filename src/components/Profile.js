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
  }
  &.in-viewport {
    animation: ${FadeIn} 0.5s ease-in-out both;
  }
`;

const Container = styled.div`
  transform: translateX(-50%);
  opacity: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1% 10%;
  & svg {
    height: 40px;
    width: 40px;
    overflow: visible;
  }
  &.in-viewport {
    animation: ${FadeIn} 0.5s ease-in-out both;
  }
`;

const Text = styled.p`
  transform-origin: 25% 50%;
  font-size: 1.5rem;
  margin: 0 10px;
  padding-left: 10px;
  border-left: 2px solid var(--color-dark);
  & span {
    color: var(--color-warm);
  }
  @media (max-width: 800px) {
    font-size: 0.8rem;
  }
`;

export default function Profile() {
  return (
    <Section id="profile">
      <Title id="profile-title">An atypical profile :</Title>
      <Container id="profile-ctn-one">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-music-note-list"
          viewBox="0 0 16 16"
        >
          <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
          <path fillRule="evenodd" d="M12 3v10h-1V3h1z" />
          <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z" />
          <path
            fillRule="evenodd"
            d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"
          />
        </svg>
        <Text>
          fifteen years of <span>musician</span> experiences, practicing
          trombone.
        </Text>
      </Container>
      <Container id="profile-ctn-two">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-life-preserver"
          viewBox="0 0 16 16"
        >
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm6.43-5.228a7.025 7.025 0 0 1-3.658 3.658l-1.115-2.788a4.015 4.015 0 0 0 1.985-1.985l2.788 1.115zM5.228 14.43a7.025 7.025 0 0 1-3.658-3.658l2.788-1.115a4.015 4.015 0 0 0 1.985 1.985L5.228 14.43zm9.202-9.202-2.788 1.115a4.015 4.015 0 0 0-1.985-1.985l1.115-2.788a7.025 7.025 0 0 1 3.658 3.658zm-8.087-.87a4.015 4.015 0 0 0-1.985 1.985L1.57 5.228A7.025 7.025 0 0 1 5.228 1.57l1.115 2.788zM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
        </svg>
        <Text>
          trained to become a <span>sea rescuer</span> ( I am basically like
          Dwayne Johnson in "Baywatch", but without the muscles and fame ).
        </Text>
      </Container>
      <Container id="profile-ctn-three">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-braces"
          viewBox="0 0 16 16"
        >
          <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6zM13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6z" />
        </svg>
        <Text>
          from now on, a passionated <span>web developer</span>, who loves to
          create stylish interfaces and experiences, but also able to take care
          of backend tasks.
        </Text>
      </Container>
    </Section>
  );
}
