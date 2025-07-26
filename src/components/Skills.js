import React, { useEffect} from 'react';
import '../styles/Skills.css';

const Skills = () => {
    useEffect(() => {
        const charts = document.querySelectorAll('.chart');
        charts.forEach(chart => {
          const percent = parseFloat(chart.dataset.percent);
          const circle = chart.querySelector('.outer');
          const radius = circle.r.baseVal.value;
          const circumference = 2 * Math.PI * radius;

          circle.style.strokeDasharray = `${circumference}`;
          circle.style.strokeDashoffset = circumference;

          setTimeout(() => {
            const offset = circumference - (percent / 100) * circumference;
            circle.style.transition = 'stroke-dashoffset 2s ease';
            circle.style.strokeDashoffset = offset;
          }, 100);
        });
      }, []);

      return (
        <section id="skills" className="skills">
            <h2>Knowledge & Skills</h2>
            <p>Despite being predominantly self-taught, I have experience with a variety of technologies.</p>
            <p>The following is a list of languages, libraries, and frameworks I am familiar with and my believed proficiency in each:</p>
            <div id="skills-container">
              <div className="skill">
              <figure className="chart" data-percent="85">
                <figcaption>HTML</figcaption>
                <img className="html" src="https://img.icons8.com/?size=100&id=v8RpPQUwv0N8&format=png&color=000000" alt="HTML" />
                <svg width="200" height="200">
                  <circle className="outer" cx="95" cy="95" r="85" transform='rotate(-90 95 95)' />
                </svg>
              </figure>
            </div>

              <div className="skill">
                <figure className="chart" data-percent="75">
                  <figcaption>CSS</figcaption>
                  <img className="css" src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000" alt="CSS" />
                  <svg width="200" height="200">
                    <circle className="outer" cx="95" cy="95" r="85" transform='rotate(-90 95 95)' />
                  </svg>
                </figure>
              </div>

              <div className="skill">
                <figure className="chart" data-percent="75">
                  <figcaption>JavaScript</figcaption>
                  <img className="javascript" src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" alt="JavaScript" />
                  <svg width="200" height="200">
                    <circle className="outer" cx="95" cy="95" r="85" transform='rotate(-90 95 95)' />
                  </svg>
                </figure>
              </div>

              <div className="skill">
                <figure className="chart" data-percent="30">
                  <figcaption>React</figcaption>
                  <img className="react" src="https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000" alt="React" />
                  <svg width="200" height="200">
                    <circle className="outer" cx="95" cy="95" r="85" transform='rotate(-90 95 95)' />
                  </svg>
                </figure>
              </div>

              <div className="skill">
                <figure className="chart" data-percent="20">
                  <figcaption>Node.js</figcaption>
                  <img className="nodejs" src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000" alt="Node.js" />
                  <svg width="200" height="200">
                    <circle className="outer" cx="95" cy="95" r="85" transform='rotate(-90 95 95)' />
                  </svg>
                </figure>
              </div>

              <div className="skill">
                <figure className="chart" data-percent="40">
                  <figcaption>PHP</figcaption>
                  <img className="php" src="https://img.icons8.com/?size=100&id=fAMVO_fuoOuC&format=png&color=000000" alt="PHP" />
                  <svg width="200" height="200">
                    <circle className="outer" cx="95" cy="95" r="85" transform='rotate(-90 95 95)' />
                  </svg>
                </figure>
              </div>

              <div className="skill">
                <figure className="chart" data-percent="25">
                  <figcaption>Flask</figcaption>
                  <img className="flask" src="https://img.icons8.com/?size=100&id=MHcMYTljfKOr&format=png&color=000000" alt="Flask" />
                  <svg width="200" height="200">
                    <circle className="outer" cx="95" cy="95" r="85" transform='rotate(-90 95 95)' />
                  </svg>
                </figure>
              </div>

              <div className="skill">
                <figure className="chart" data-percent="80">
                  <figcaption>Python</figcaption>
                  <img className="python" src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000" alt="Python" />
                  <svg width="200" height="200">
                    <circle className="outer" cx="95" cy="95" r="85" transform='rotate(-90 95 95)' />
                  </svg>
                </figure>
              </div>
            </div>
        </section>
    );
};

export default Skills;