import React from "react";
import firebase from "firebase";

class Attendees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displaAttendees: [],
    };
  }

  componentDidMount() {
    const ref = firebase
      .database()
      .ref(`meetings/${this.props.userID}/${this.props.meetingID}/attendees`);
    ref.on("value", (snapshot) => {
      let attendees = snapshot.val();
      let attendeesList = [];
      for (let item in attendees) {
        attendeesList.push({
          attendeeID: item,
          attendeeName: attendees[item].attedeeName,
          attendeeEmail: attendees[item].email,
        });
      }
      this.setState({
        displaAttendees: attendeesList,
      });
    });
  }

  render() {
    return (
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="font-weight-light text-center">Attendees</h1>
          </div>
        </div>
        List Goes Here
      </div>
    );
  }
}

export default Attendees;
