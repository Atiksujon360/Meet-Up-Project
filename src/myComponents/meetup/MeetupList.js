import React, { Component } from "react";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

export default class MeetupList extends Component {
  render() {
    return (
      <ul className={classes.list}>
        {this.props.meetups.map((meetup) => (
          <MeetupItem
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
          />
        ))}
      </ul>
    );
  }
}
