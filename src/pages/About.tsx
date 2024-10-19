import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/sinha.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Hi, I am Abhishek Kumar Sinha</h1>
      <h2 className="profile-text">The creator of this awesome website.</h2>
      <h4 className="profile-text">
        You are welcome to explore a captivating Pokémon platform<br />that enables you to effortlessly compare different species and <br /> curate your very own list of favorites.
      </h4>
      <div className="profile-links">
        <a href="https://github.com/AbhishekSinhaa17" target='_blank' rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/sin.abhishek17/" target='_blank' rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/abhisheksinha17/" target='_blank' rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
