import createToken from "@config/headerCreator";
import server from "@config/server";
import _ from "lodash";
import React, { Component } from "react";
import { NotificationManager } from "react-notifications";
import { connect } from "react-redux";

export class YourDonations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      donations: [],
      banks: [],
    };
  }

  async componentDidMount() {
    server
      .get("donors/yourdonations", await createToken())
      .then(({ data }) => {
        // var merged = _.merge(_.keyBy(donations, "to"), _.keyBy(banks, "_id"));
        // var values = _.values(merged);
        this.setState({ donations: data });
      })
      .catch(({ message }) => NotificationManager.error(message));
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="d-flex flex-column my-5">
            {this.state.donations.length !== 0
              ? this.state.donations.map((donation, i) => (
                  /* amount: 200
time: "2021-04-03T18:30:00.000Z"
to: "606928d091efa23bed6a9b1c"
_id: "6069293d91efa23bed6a9b1d" */
                  <div
                    className="card my-2 shadow border-0"
                    style={{ borderRadius: "0.4rem" }}
                  >
                    <div className="card-body">
                      <div className="mr-2" style={{ fontSize: "1.5rem" }}>
                        <span className="font-weight-bold">
                          Quantity donated:
                        </span>{" "}
                        {donation.amount} <span>ml</span>
                      </div>
                      <div className="mr-2" style={{ fontSize: "1.5rem" }}>
                        <span className="font-weight-bold">
                          Donation Time:{" "}
                        </span>{" "}
                        {new Date(donation.time).toLocaleString()}
                      </div>
                      {/* <div className="mr-2" style={{ fontSize: "1.5rem" }}>
                        <span className="font-weight-bold">
                          Donation To Bank name:{" "}
                        </span>{" "}
                        {donation.to}
                      </div> */}
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(YourDonations);
