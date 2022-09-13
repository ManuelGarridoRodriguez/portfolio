import Header from "../../components/molecules/header/header";
import "./about.scss";

function About(): JSX.Element {
  return (
    <>
      <Header />
      <div className="about_list">
        <ul>
          <h2>Personal information</h2>
          <li>I am from Seville, Dos Hermanas, Spain</li>
          <li>I love videogames and technology</li>
          <li>
            I have studied a lot of subjects in my life, but the best thing I
            have done is coding
          </li>
          <li>
            I am in love with remote working, but I like seeing my coworkers
            once in a while
          </li>
          <li>
            I love rolplaying games, like D&D and more. I really enjoy been a
            Dungeon Master
          </li>
        </ul>

        <ul>
          <h2>Profesional information</h2>
          <li>I like codding because you can develop the world's change</li>
          <li>
            I am a front end developer, but I want to be Fullstack Developer
          </li>
          <li>I like React, Typescript, MongoDB, NestJs, Storybook...</li>
          <li>
            I don't like Java or PHP (but I prefer PHP over Java, I think)
          </li>
          <li>
            I love working in company projects, I don't mind working for IT
            Consulting companies, but I prefer the ones that are their own
            projects
          </li>
        </ul>
      </div>
    </>
  );
}

export default About;
