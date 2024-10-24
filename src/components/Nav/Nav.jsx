import React from "react";
import st from "./Nav.module.css";
import NavLink from "../UI/NavLink/NavLink";

function Nav() {
  return (
    <nav className={st.nav}>
      <ul className={st.list}>
        <li className={st.item}>
          <NavLink to="#" text="Link" color="white" size="30px" />
        </li>
        <li className={st.item}>
          <NavLink to="#" text="Link" color="white" size="30px" />
        </li>
        <li className={st.item}>
          <NavLink to="#" text="Link" color="white" size="30px" />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
