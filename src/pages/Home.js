import { useEffect } from "react";
import Contact from "../components/Contact";
import Experiences from "../components/Experiences";
import Presentation from "../components/Presentation";
import Previous from "../components/Previous";
import Profile from "../components/Profile";
import Skills from "../components/Skills";

export default function Home() {
  useEffect(() => {
    function callbackFunc(entries, observer) {
      entries.forEach((entry) => {
        entry.target.classList.toggle("in-viewport", entry.isIntersecting);
      });
    }

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    let observer = new IntersectionObserver(callbackFunc, options);

    //Animations 'in-vieport'
    //Profile components
    observer.observe(document.getElementById("profile"));
    observer.observe(document.getElementById("profile-title"));
    observer.observe(document.getElementById("profile-ctn-one"));
    observer.observe(document.getElementById("profile-ctn-two"));
    observer.observe(document.getElementById("profile-ctn-three"));
    //Experiences components
    observer.observe(document.getElementById("experiences"));
    observer.observe(document.getElementById("exp-title"));
    observer.observe(document.getElementById("exp-1"));
    observer.observe(document.getElementById("exp-2"));
    observer.observe(document.getElementById("exp-3"));
    observer.observe(document.getElementById("exp-4"));
    observer.observe(document.getElementById("exp-5"));
    observer.observe(document.getElementById("exp-6"));
    //Skills components
    observer.observe(document.getElementById("skills"));
    observer.observe(document.getElementById("skills-title"));
    observer.observe(document.getElementById("skills-content"));
    observer.observe(document.getElementById("skills-text"));
    observer.observe(document.getElementById("skills-carousel"));
    //Previous components
    observer.observe(document.getElementById("previous"));
    observer.observe(document.getElementById("previous-title"));
    observer.observe(document.getElementById("previous-main-1"));
    observer.observe(document.getElementById("previous-main-2"));
    observer.observe(document.getElementById("previous-projects"));
    //Contact components
    observer.observe(document.getElementById("contact"));
    observer.observe(document.getElementById("contact-title"));
    observer.observe(document.getElementById("contact-mail"));
    observer.observe(document.getElementById("contact-social"));
  }, []);

  return (
    <>
      <Presentation />
      <Profile />
      <Experiences />
      <Skills />
      <Previous />
      <Contact />
    </>
  );
}
