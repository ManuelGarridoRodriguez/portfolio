import { Card, CardContent, Typography } from "@mui/material";
import Header from "../../components/molecules/header/header";
import "./about.scss";

function About(): JSX.Element {
  return (
    <>
      <Header />
      <div className="about_list">
        <Card variant="outlined" className="informationCard">
          <CardContent className="informationCardContent">
            <Typography variant="h2">Personal information</Typography>
            <li>I am from Dos Hermanas, Seville, Spain</li>
            <li>I really like technology, programming and videogames</li>
            <li>
              I have studied a lot of subjects in my life, but the best thing I
              have done is learning to code
            </li>
            <li>
              I am in love with remote working, but I like seeing my coworkers
              once in a while
            </li>
            <li>
              I am a creative person, so I enjoy playing rolplaying games like
              D&D as Dungeon Master and player as well.
            </li>
          </CardContent>
        </Card>
        <Card variant="outlined" className="informationCard">
          <CardContent className="informationCardContent">
            <Typography variant="h2">Profesional information</Typography>
            <li></li>
            <li>
              I am mostly a Frontend Developer, but I have tryed Python, Java,
              SQL..
            </li>
            <li>
              I like React, Typescript, MongoDB, NestJs, Storybook, SASS...
            </li>
            <li>
              I love working in company projects, I don't mind working for IT
              Consulting companies, but I prefer the ones that are their own
              projects
            </li>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default About;
