import React, { Component } from "react";
import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <MainNavigation />
        <main className={classes.main}>{this.props.children}</main>
      </div>
    );
  }
}
