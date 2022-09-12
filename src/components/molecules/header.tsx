import ProfileAvatar from "../atoms/avatar/avatar";
import NavMenu from "../atoms/menu/menu";
import "./header.scss";

function Header(): JSX.Element {
  return (
    <div className="header">
      <ProfileAvatar />
      <NavMenu />
    </div>
  );
}

export default Header;
