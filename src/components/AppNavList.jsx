import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import GeneralContext from "../contexts/GlobalContext";

export default function AppNavList() {
  const { NavMenu } = useContext(GeneralContext);
  return (
    <nav>
      {NavMenu.map((curElem) => (
        <NavLink key={curElem.title} to={curElem.path}>
          {curElem.title}
        </NavLink>
      ))}
    </nav>
  );
}
