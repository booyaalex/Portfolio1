import './App.css';

import headerImage from "./assets/img/headerImage.jpg";
import aboutMeImage from "./assets/img/aboutMeImage.jpg";
import blooketLeaderboard from "./assets/img/blooketLeaderboard.png";
import crystalClicker from "./assets/img/crystalClicker.png";
import musicApp from "./assets/img/musicApp.png";
import matchThreeGame from "./assets/img/matchThreeGame.png";
import flappyBird from "./assets/img/flappyBird.png";
import calculatorApp from "./assets/img/calculatorApp.png";
import ticTacToeGame from "./assets/img/ticTacToeGame.png";
import schoolCertificate from "./assets/img/schoolCertificate.jpg";
import certiportCertificate1 from "./assets/img/certiportCertificate1.png";
import certiportCertificate2 from "./assets/img/certiportCertificate2.png";
import contactHeaderImage from "./assets/img/contactHeaderImage.jpg";

export function Home() {
  return (
    <>
      <header>
        <div className="flex evenly">
          <div>
            <div className="section-alt round center">
              <img id="header-image" className="round" src={headerImage} alt="Header Image" title="Yes I have red contacts. No I'm not high in this picture."></img>
            </div>
          </div>
          <div className="split">
            <div className="flex column around center text-center">
              <div>
                <h1>Austin Isidoro-Rossini</h1>
                <h2>Programmer and Web Developer</h2>
              </div>
              <div>
                <p>I create simple interactive websites for people who want a clean and modern look. I excel at using html5 to create websites that look and feel great.</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="about-background-image" className="flex column center vertical-center">
        <h1>About Me</h1>
        <br></br>
        <div className="section round">
          <p>My name is Austin Isidoro-Rossini. I&apos;m a programmer with a strong passion for learning and creating. Starting in 5th grade, I&apos;ve learned to code in a variety of languages, including JavaScript, C#, and Java. Overcoming challenges is part of what I do, and I work to make our pro... <a href="./about">Continue Reading -&gt;</a></p>
        </div>
      </div>
    </>
  );
}

export function About() {
  return (
    <>
      <header>
        <h1 className="text-center">About Me</h1>
      </header>
      <div className="duel-container flex nowrap">
        <img className="about-me-image" src={aboutMeImage} alt="About Me Image"></img>
        <div className="section-alt center flex vertical-around">
          <h3>My name is Austin Isidoro-Rossini. I&apos;m a programmer with a strong passion for learning and creating. Starting in 5th grade, I&apos;ve learned to code in a variety of languages, including JavaScript, C#, and Java. Overcoming challenges is part of what I do, and I work to make our problems into your success.</h3>
          <div className="section full flex between center round">
            <div className="flex split vertical-center center">
              <i className="fa-regular fa-handshake"></i>
              <h2>Teamwork</h2>
            </div>
            <div className="flex split center vertical-center">
              <p className="text-center">I work well with others in a work environment.</p>
            </div>
          </div>
          <div className="section full flex between center round">
            <div className="flex split vertical-center center">
              <i className="fa-regular fa-user"></i>
              <h2>Leadership</h2>
            </div>
            <div className="flex split center vertical-center">
              <p className="text-center">I am able to take control of a situation and lead others to success.</p>
            </div>
          </div>
          <div className="section full flex between center round">
            <div className="flex split vertical-center center">
              <i className="fa-regular fa-comment"></i>
              <h2>Open Minded</h2>
            </div>
            <div className="flex split center vertical-center">
              <p className="text-center">I&apos;m able to take criticism and feedback well, and I&apos;m able to apply that feedback into my work.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Projects() {
  return (
    <>
      <header>
        <h1 className="text-center">My Projects</h1>
        <h3 className="text-center">Here are some projects that I've created.</h3>
      </header>
      <div className="duel-container flex nowrap">
        <img className="about-me-image" src={blooketLeaderboard} alt="Blooket Leaderboards"></img>
        <div className="section-alt split center text-center">
          <h1>Blooket Leaderboards</h1>
          <br></br>
          <h3>A website inspired by blooket that allows you to upload your blooket stats and comapre them with others. It ranks these players based on how well you do, and it updates automatically apon user upload. You can also try to break world records with video proof, giving more insentive to participate.</h3>
          <br></br>
          <a href="https://blooket-leaderboards.pages.dev/" target="_blank">Check out the Website Here!</a>
        </div>
      </div>
      <div className="duel-container flex nowrap">
        <img className="about-me-image" src={crystalClicker} alt="Crystal Clicker"></img>
        <div className="section-alt split center text-center">
          <h1>Crystal Clicker</h1>
          <br></br>
          <h3>A basic clicker game I created in JavaScript. Click the crystal to get crystals, and spend those crystals to get upgrades to get more crystals.</h3>
          <br></br>
          <a href="https://booyaalex.github.io/Clicker-Project/" target="_blank">Play the Game Here!</a>
        </div>
      </div>
      <div className="duel-container flex nowrap">
        <img className="about-me-image" src={musicApp} alt="The Bester Music App"></img>
        <div className="section-alt split center text-center">
          <h1>The Bester Music App</h1>
          <br></br>
          <h3>An application I created in C# that let's you play music from your music folder. It allows you to look up and play music, as well as create playlists. It uses SQLite to manage your music quickly and efficently.</h3>
          <br></br>
          <a href="https://github.com/booyaalex/TheBesterMusicApp/archive/refs/tags/v1.2.0.3.zip" target="_self">Download the Application Here!</a>
        </div>
      </div>
      <div className="flex around text-center">
        <div className="certificate center section round">
          <img className="round" src={matchThreeGame} alt="Match 3 Game"></img>
          <h1>Match 3 Game</h1>
          <h3>A simple version of a match 3 game made in JavaScript. It's similar to Candy Crush.</h3>
          <a href="https://booyaalex.github.io/Match-3-Game/" target="_blank">Play the Game Here!</a>
        </div>
        <div className="certificate center section round">
          <img className="round" src={flappyBird} alt="Flappy Bird"></img>
          <h1>Flappy Birb</h1>
          <h3>A simplified version of the game Flappy Bird made in JavaScript created for showcases.</h3>
          <a href="https://booyaalex.github.io/Flappy-Birb/" target="_blank">Play the Game Here!</a>
        </div>
        <div className="certificate center section round">
          <img className="round" src={calculatorApp} alt="Calculator App"></img>
          <h1>Calculator App</h1>
          <h3>A calculator app I made in Java to learn the language.</h3>
          <a href="https://github.com/booyaalex/Calculator" target="_blank">See the Code Here!</a>
        </div>
        <div className="certificate center section round">
          <img className="round" src={ticTacToeGame} alt="Tic Tac Toe Game"></img>
          <h1>Tic Tac Toe Game</h1>
          <h3>A recreation of the Tic Tac Toe game I made in Java.</h3>
          <a href="https://github.com/booyaalex/TicTacToe" target="_blank">See the Code Here!</a>
        </div>
      </div>
    </>
  );
}

export function Resume() {
  return (
    <>
    </>
  );
}

export function Certification() {
  return (
    <>
      <header>
        <h1 className="text-center">My Certificates</h1>
        <h3 className="text-center">Here are my Awards and Certificates that show off my abilities.</h3>
      </header>
      <div className="flex around text-center">
        <div className="certificate center section round">
          <img className="round" src={schoolCertificate} alt="School Certificate"></img>
          <h1>Certificate of Achievement</h1>
          <h3>Most Outstanding: Programming and Web Development</h3>
        </div>
        <div className="certificate center section round">
          <img className="round" src={certiportCertificate1} alt="Certiport Certificate"></img>
          <h1 >HTML and CSS Certification</h1>
          <h3>Information Technology Specialist in HTML and CSS</h3>
        </div>
        <div className="certificate center section round">
          <img className="round" src={certiportCertificate2} alt="Certiport Certificate"></img>
          <h1>Javascript Certification</h1>
          <h3>Information Technology Specialist in Javascript</h3>
        </div>
      </div>
    </>
  );
}

export function Contact() {
  return (
    <>
      <header>
        <div className="flex evenly">
          <div>
            <div className="section-alt round">
              <img id="header-image" className="round" src={contactHeaderImage} alt="Header Image"></img>
            </div>
          </div>
          <div className="split">
            <div className="flex column around center text-center">
              <div>
                <h1>Contact Me</h1>
                <h2>I&apos;m more than happy to hear from you!</h2>
              </div>
              <div>
                <h3>You can reach me from:</h3>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="section round center">
        <div className="flex vertical-center between">
          <div className="flex vertical-center">
            <i className="fa-solid fa-phone"></i>
            <h2>Phone</h2>
          </div>
          <a href="tel:7742311759">774-231-1759</a>
        </div>
        <div className="flex vertical-center between">
          <div className="flex vertical-center">
            <i className="fa-solid fa-envelope"></i>
            <h2>Home Email</h2>
          </div>
          <a href="mailto:isidororossinia@gmail.com">isidororossinia@gmail.com</a>
        </div>
        <div className="flex vertical-center between">
          <div className="flex vertical-center">
            <i className="fa-solid fa-envelope"></i>
            <h2>School Email</h2>
          </div>
          <a href="mailto:aisidororossini2027@jpkeefehs.org" target="_blank">aisidororossini2027@jpkeefehs.org</a>
        </div>
      </div>
    </>
  );
}
