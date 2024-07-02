import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chaitanya Emani </span>
            from <span className="purple"> Visakhapatnam, Andhra Pradesh, India.</span>
            <br />
            I am currently looking for <span className="purple">opportunities.</span>
            <br />
            <br />
            I previously worked as a <span className="purple">Python Development Intern</span> at <span className="purple">I & T Labs</span> for <span className="purple">four months </span>and <span className="purple">Web Development Intern </span>at <span className="purple">OctaNet</span> for <span className="purple">One month.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Articles
            </li>
            <li className="about-activity">
              <ImPointRight /> Enjoying with friends
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Chaitanya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
