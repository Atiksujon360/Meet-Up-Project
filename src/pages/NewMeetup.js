import React, { Component } from "react";
import NewMeetupForm from "../myComponents/meetup/NewMeetupForm";
import { useHistory } from "react-router-dom";

function NewMeetup() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch("https://to-do-25677-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetup;
