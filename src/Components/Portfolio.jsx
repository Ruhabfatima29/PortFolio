/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/a man typing on the laptop.avif";

const imageAltText = "someone typing on laptop with dark theme";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Business Application: Election and Voting management system",
    description:
      "My first Business application project in C++. It is a CLI based application that is used to manage the election and voting system. The basic purpose of this application is to basically fascilitate voting systems in this digital era.",
    url: "https://github.com/Ruhabfatima29/Week4PD/blob/master/PFfinal/BuisnessApp.cpp",
  },
  {
    title: "Business Application: Using OOP in C#",
    description:
      "My first Business application project in C# was the second version of my first business application. It is a desktop based application that is used to manage the election and voting system. The coding style in this project was more optimized as we used 3 Tier model and class object relations in it.",
    url: "https://github.com/Ruhabfatima29/2nd-Semester-OOP-projects/tree/master/BuisnessApplication/VotingSystem",
  },
  {
    title: "Game: Mickey the Savior",
    description:
      "My first desktop based game project in C#. The WinForms technology was used to develop this game. It is a game in which the mickey has to save Minnie from the enemies and collect the coins to increase the score, before his lives finish",
    url: "https://github.com/Ruhabfatima29/2nd-Semester-OOP-projects/tree/master/MickeyGame/Mickey",
  },
  {
    title: "Airline Optimization System",
    description:
      "It was a team project in DSA, we used pythonlanguage and Qt designer  to develop this project. It is a desktop based application that is used to manage the airline system. The basic purpose of this application is to basically optimize airline systems in this digital era. The time complexity of this application is much less using amazing data structures such as graphs, hashtables and avl tree.",
    url: "https://gitlab.com/mwaliahmad/dsafinalprojectpid29",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
