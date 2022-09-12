import Header from "../../components/molecules/header";
import "./main.scss";

function Main(): JSX.Element {
  return (
    <>
      <Header />
      <div className="presentation">
        <h1>Hello! I am Manuel Garrido Rodríguez</h1>
        <br />
        <h1>
          I like to say that I work as a developer, but I enjoy it so much that
          in the end it is more like a hobby
        </h1>
      </div>
    </>
  );
}

export default Main;
