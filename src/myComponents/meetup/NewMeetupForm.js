import React, { Component } from "react";
import Card from "../layout/ui/Card";
import classes from "./NewMeetupForm.module.css";

export default class NewMeetupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getValue = (event) => {
    //   console.log('event',event.target.value);
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit value", this.state);
    const meetupDate = {
      title: this.state.Title,
      image: this.state.Image,
      address: this.state.Address,
      description: this.state.Description,
    };
    this.props.onAddMeetup(meetupDate);
  };

  render() {
    return (
      <div>
        <br />
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <div className={classes.control}>
            <label htmlFor="title">Meetup Title</label>
            <input
              onChange={this.getValue}
              placeholder="Title"
              type="text"
              name="Title"
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="image">Meetup Image</label>
            <input
              onChange={this.getValue}
              placeholder="Image"
              type="text"
              name="Image"
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="address">Address</label>
            <input
              onChange={this.getValue}
              placeholder="Address"
              type="text"
              name="Address"
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="description">Description</label>
            <textarea
              onChange={this.getValue}
              placeholder="Description"
              required
              rows="5"
              type="text"
              name="Description"
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button>Add Meetup</button>
          </div>
        </form>
      </div>
    );
  }
}
