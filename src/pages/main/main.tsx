import Header from "../../components/molecules/header/header";
import "./main.scss";

function Main(): JSX.Element {
  return (
    <>
      <Header />
      <div className="presentation">
        <h1>Hello! I am Manuel Garrido Rodríguez</h1>
        <br />
        <br />
        <h1>
          I work as web developer <br /> and this is my portfolio.
          <br />
          <br />I hope you find something useful for you.
        </h1>
      </div>
    </>
  );
}

export default Main;
