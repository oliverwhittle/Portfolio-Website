import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: "TicTacToe",
    image: "https://cdn.pixabay.com/photo/2023/01/22/23/16/tic-tac-toe-7737546_960_720.jpg",
    description: "A simple TicTacToe game built with socket.io to provide online multiplayer.",
    link: "https://github.com/oliverwhittle/Tic-Tac-Toe"
  },
  {
    title: "Duck-n-Jump",
    image: "https://cdn.pixabay.com/photo/2019/04/14/20/05/duck-meet-4127713_960_720.jpg",
    description: "A silly little duck themed platformer built for my University's Hackathon.",
    link: "https://github.com/oliverwhittle/Duck-n-Jump"
  },
  {
    title: "ToDo App",
    image: "https://cdn.pixabay.com/photo/2020/05/30/09/53/todo-lists-5238324_960_720.jpg",
    description: "A simple ToDo app I built to help me learn Vue.js.",
    link: "https://github.com/oliverwhittle/Todo"
  },
  {
    title: "Wordle Clone",
    image: "https://cdn.pixabay.com/photo/2016/11/12/23/34/learn-1820039_960_720.jpg",
    description: "A clone of the popular word-guessing game built using pygame.",
    link: "https://github.com/oliverwhittle/Wordle-clone"
  },
  {
    title: "Holiday Manager",
    image: "https://cdn.pixabay.com/photo/2016/03/14/18/22/calendar-1255953_960_720.jpg",
    description: "A holiday management system for my work made using php and mysql.",
    link: "https://github.com/oliverwhittle/Holiday-manager"
  },
  {
    title: "Insulin Calculator",
    image: "https://cdn.pixabay.com/photo/2014/11/12/19/25/diabetes-528678_960_720.jpg",
    description: "A tool for calculating insulin dosages.",
    link: "https://github.com/oliverwhittle/Insulin-Calculator"
  }
];

const Projects = () => (
  <section id="projects" className="projects">
    <h2>My Projects</h2>
    <p id="project-intro">
      Here are some of the projects I've worked on. Click on a project to view its repository.
    </p>
    <div className="project-grid">
      {projects.map((project, index) => (
        <a
          key={index}
          className="project-tile"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="project-image-container">
            <img className="project-image" src={project.image} alt={project.title} />
          </div>
          <div className="project-body">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        </a>
      ))}
    </div>
    <button onClick={() => window.location.href='https://github.com/oliverwhittle?tab=repositories'} id="more-projects-button">
      View All Projects →
    </button>
  </section>
);

export default Projects;
