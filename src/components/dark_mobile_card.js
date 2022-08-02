import React from "react";

export default function mobile_dark() {
  return (
    <div className="mobile_gb">
      <div className="mobile_profile"></div>
      <div className="mobile_buttom"></div>
      <h3 className="Name">Dr. Ramzan Khan</h3>
      <div>
        <p className="Pation-discription">Backend Developer</p>
        <p className="discription">Backend and Frondend Developer</p>
      </div>
      <button className="email_button fa fa-envelope">Email</button>
      <button className="linkdin_button fa fa-linkedin-square">LinkdIn</button>
      <div className="info-section">
        <p className="about">About</p>
        <p className="about_info">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <p className="Interests">Interests</p>
        <p className="Interests_info">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
      <div className="buttom_icon">
        <i class="fa fa-twitter-square fa-3x twitter_icon "></i>
        <i class="fa fa-facebook-square fa-3x facebook_icon "></i>
        <i class="fa fa-instagram fa-3x instagram_icon "></i>
        <i class="fa fa-github-square fa-3x github_icon "></i>
      </div>
    </div>
  );
}
