import React, { Component } from "react";
import { Button, Card } from "antd";
import classes from "./MeetupItem.module.css";
export default class MeetupItem extends Component {
  render() {
    return (
      <li className={classes.item}>
        <Card>
          <div className={classes.image}>
            <img src={this.props.image} alt={this.props.title} />
          </div>
          <div className={classes.content}>
            <h3>{this.props.title}</h3>
            <address>{this.props.address}</address>
            <p>{this.props.description}</p>
          </div>
        </Card>
      </li>
    );
  }
}
