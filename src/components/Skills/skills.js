import React from "react";
import "./skills.css";
import ReactImg from "../../assets/reactImg.png";
import Flutter from "../../assets/flutter.png";
import HtmlCss from "../../assets/html-css.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I'm an enthusiastic and motivated person transitioning from content
        writing to pursuing a career in front-end development. What keeps me on
        this journey is that I always find learning new things exciting and
        facing unfamiliar challenges. While my commercial experience is limited
        for now, I thrive on the opportunity to delve into side projects
        alongside my partner. These not only serve as a platform for honing my
        craft, but also as a playground for unleashing my creativity.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={ReactImg} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>React</h2>
            <ul>
              <li>
                Proficient in <b>React Hooks </b>for state management and
                component logic simplification.
              </li>
              <li>
                Skilled in <b>CRUD</b> operations implementation.
              </li>
              <li>
                Experienced in <b>API data </b>fetching and <b>Firebase </b>
                integration for dynamic content rendering and real-time updates.
              </li>
              <li>
                Familiar with <b>React Redux</b> for centralized state
                management.
              </li>
            </ul>
          </div>
        </div>
        <div className="skillBar">
          <img src={Flutter} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Flutter</h2>
            <ul>
              <li>
                Expertise in <b>BLoC pattern</b> for efficient state management.
              </li>
              <li>
                Skilled in <b>SharedPreferences</b> for data caching and offline
                functionality.
              </li>
              <li>
                Proficient in crafting visually appealing UIs using
                <b>Cupertino </b>
                and <b>Material Design widgets.</b>
              </li>
              <li>
                Experience in{" "}
                <b>
                  API integration with Supabase, PostgreSQL, and
                  TheMovieDatabase.
                </b>
              </li>
            </ul>
          </div>
        </div>
        <div className="skillBar">
          <img src={HtmlCss} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>HTML/CSS</h2>
            <ul>
              <li>
                Proficient in <b>semantic HTML markup</b> for accessibility and
                SEO.
              </li>
              <li>
                Skilled in responsive web design using{" "}
                <b>CSS media queries and flexbox/grid layouts.</b>
              </li>
              <li>
                Familiar with <b>Tailwind CSS</b> for expedited development and
                consistent design.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
