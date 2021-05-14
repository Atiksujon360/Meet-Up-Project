import React, { Component } from "react";
import { Link } from "react-router-dom";
import css from "./MainNavigation.module.css";
export default class MainNavigation extends Component {
  render() {
    return (
      <header className={css.header}>
        <div className={css.logo}>Meet-Up</div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Meet-Up</Link>
            </li>
            <li>
              <Link to="/NewMeetup">Add New Meet-up</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
