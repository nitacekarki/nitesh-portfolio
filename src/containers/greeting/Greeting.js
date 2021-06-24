import React from "react";
import "./Greeting.css";
// import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import BannerImg from "./BannerImg";
import Typewriter from "typewriter-effect";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import { competitiveSites } from "../../portfolio";
export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.orange }}>
                {greeting.title}
              </h1>
              <h1 className="greeting-sub" style={{ color: theme.grayText }}>
                I'm <mark data-entity="person">{greeting.sub}</mark>
              </h1>
              <h1 className="greeting-typewriter" style={{color: theme.blue}}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("DevOps Engineer")
                      .pauseFor(100)
                      .deleteAll()
                      .typeString("AWS/Azure Expert")
                      .pauseFor(100)
                      .deleteAll()
                      .typeString("Penetration Tester")
                      .pauseFor(100)
                      .deleteAll()
                      .typeString("IT Engineer")
                      .pauseFor(100)
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <span
                className="greeting-text-span subTitle"
                style={{ color: theme.text }}>
                <div className="entities">
                  A <mark data-entity="noun">DevOps Engineer</mark>{" "}
                  who thrives to{" "}
                  <mark data-entity="verb">leverage Startups</mark> using
                  modern cloud technology following{" "}
                  <mark data-entity="skill">DevOps Practice</mark> and a blend
                  of <mark data-entity="freelance">Cyber Security</mark>
                </div>
              </span>
              <CompetitiveSites logos={competitiveSites.competitiveSites} />
              <div className="button-greeting-div">
                <Button text="Contact me" href="/contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href="https://drive.google.com/file/d/1VMDoeUN9sWz3fv3iG6iN0s2mU4PTahmp/view?usp=sharing"
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <BannerImg />
          </div>
        </div>
      </div>
    </Fade>
  );
}
