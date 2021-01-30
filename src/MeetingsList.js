import React, { Component } from "react";
import { navigate } from "@reach/router";
import firebase from "firebase";
import { GoTrashcan } from "react-icons/go";
import { FaLink } from "react-icons/fa";

class MeetingsList extends Component {
  constructor(props) {
    super(props);
    this.deleteMeeting = this.deleteMeeting.bind(this);
  }

  deleteMeeting(e, whichMeeting) {
    e.preventDefault();
    const ref = firebase
      .database()
      .ref(`meetings/${this.props.userID}/${whichMeeting}`);
    ref.remove();
  }
  render() {
    const { meetings } = this.props;
    const myMeetings = meetings.map((item) => {
      return (
        <div>
          <div className="list-group-item d-flex" key={item.meetingID}>
            <section
              className="btn-group align-self-center"
              role="group"
              aria-label="Meetings Options"
            >
              <button
                className="btn btn-sm btn-outline-secondary"
                title="Delete Meeting"
                onClick={(e) => this.deleteMeeting(e, item.meetingID)}
              >
                <GoTrashcan></GoTrashcan>
              </button>
              <button
                className="btn btn-sm btn-outline-secondary"
                title="Check in"
                onClick={() =>
                  navigate(`/checkin/${this.props.userID}/${item.meetingID}`)
                }
              >
                <FaLink></FaLink>
              </button>
            </section>

            <section className="pl-3 text-left align-self-center">
              {item.meetingName}
            </section>
          </div>
        </div>
      );
    });

    return <div>{myMeetings}</div>;
  }
}

export default MeetingsList;
