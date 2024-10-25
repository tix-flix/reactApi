import React from "react";
import st from "./Nav.module.css";
import NavLink from "../UI/NavLink/NavLink";
import Logo from "../UI/Logo/Logo";

function Nav() {
  return (
    <nav className={st.nav}>
      <div className={st.log}>
      <Logo/>
      </div>
      <ul className={st.list}>
        <li className={st.item}>
          <NavLink to="#" text="Home" color="white" size="30px" />
        </li>
        <li className={st.item}>
          <NavLink to="#" text="Main" color="white" size="30px" />
        </li>
        <li className={st.item}>
          <NavLink to="#" text="About" color="white" size="30px" />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
