import { Paper, Typography } from "@mui/material";
import Header from "../../components/molecules/header/header";
import "./contact.scss";

function Contact(): JSX.Element {
  return (
    <>
      <Header />
      <div className="contactBody">
        <Paper elevation={3} className="contactInformationBody">
          <Typography variant="h4">You may find me by this methods</Typography>
          <ul>
            <li>
              <h3>Email: </h3>
              <a href="mailto: manu.garri@gmail.com">manu.garri@gmail.com</a>
            </li>
            <li>
              <h3>Linkedin: </h3>
              <a href="https://www.linkedin.com/in/mangarrod/">
                https://www.linkedin.com/in/mangarrod/
              </a>
            </li>
            <li>
              <h3>Infojobs: </h3>
              <a href="https://www.infojobs.net/manuel-garrido-rodriguez.prf">
                https://www.infojobs.net/manuel-garrido-rodriguez.prf
              </a>
            </li>
            <li>
              <h3>Manfred: </h3>
              <a href="https://mnf.red/mangarrod">https://mnf.red/mangarrod</a>
            </li>
            <li>
              <h3>Mobile:</h3> (+34) 662 123 057
            </li>
          </ul>
        </Paper>
      </div>
    </>
  );
}

export default Contact;
