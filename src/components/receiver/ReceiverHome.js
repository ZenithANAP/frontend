import createToken from "@config/headerCreator";
import server from "@config/server";
import React, { Component } from "react";
import { NotificationManager } from "react-notifications";
import { connect } from "react-redux";
import _ from "lodash";
export class ReceiverHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      banks: [],
    };
  }

  async componentDidMount() {
    server
      .get("donors/getbankdetails", await createToken())
      .then(({ data }) => {
        this.setState({ banks: data });
      })
      .catch(({ message }) => {
        NotificationManager.error(message);
      });
  }

  render() {
    return (
      <div>
        <div className="container">
          {/* <div className="form-group d-flex align-items-center">
            <label htmlFor="q" className="mr-2">
              Search:
            </label>
            <input type="search" name="q" id="q" className="form-control" />
          </div> */}
          <div className="d-flex flex-column my-5">
            <div
              style={{
                position: "absolute",
                bottom: "1.2rem",
                right: "1.2rem",
                width: "2rem",
                height: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="rounded-circle bg-primary p-0 m-0 shadow"
            >
              <span>👏</span>
            </div>
            {this.state.banks.length !== 0 ? (
              this.state.banks.map((bank, i) => (
                <div
                  className="card my-2 shadow border-0"
                  style={{ borderRadius: "0.4rem" }}
                >
                  <div className="card-body">
                    <div className="mr-2" style={{ fontSize: "1.5rem" }}>
                      <span className="font-weight-bold">Bank Name:</span>{" "}
                      {bank.name}
                    </div>
                    <div className="mr-2" style={{ fontSize: "1.5rem" }}>
                      <span className="font-weight-bold">Bank Location: </span>{" "}
                      {bank.city}
                    </div>
                    <button
                      type="button"
                      className="btn btn-dark font-weight-bold float-right"
                      data-toggle="modal"
                      data-target="#detailsModal"
                      // data-backdrop="false"
                    >
                      Details
                    </button>
                    <div
                      className="modal fade"
                      id="detailsModal"
                      tabIndex="-1"
                      role="dialog"
                      aria-labelledby="detailsModalLabel"
                      aria-hidden="true"
                    >
                      <div
                        className="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div
                          className="modal-content border-0 shadow"
                          style={{
                            overflow: "hidden",
                            // backdropFilter: "blur(10px)",
                            // background: "rgba(255,255,255,.7)",
                            borderRadius: "1rem",
                          }}
                        >
                          <div
                            className="modal-header"
                            style={{
                              background: "rgb(53, 34, 65)",
                              color: "white",
                            }}
                          >
                            <h5
                              className="modal-title font-weight-bold"
                              id="detailsModalLabel"
                            >
                              {bank.name}
                            </h5>
                            <button
                              type="button"
                              className="close text-white "
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body" px-3>
                            <h5 className="mx-1 font-weight-bold">
                              Availability:{" "}
                            </h5>
                            <div>
                              {_.map(bank.availability, function (value, key) {
                                return { blood_type: key, quantity: value };
                              }).map((p) => (
                                <p>
                                  {/* {JSON.stringify(p)} */}
                                  <span className="ml-2">
                                    {p["blood_type"]} : {p["quantity"]} l
                                  </span>{" "}
                                </p>
                              ))}
                            </div>
                            <h5 className="mx-1 my-1 font-weight-bold">
                              Contact Details:
                            </h5>
                            <span className="ml-2">{bank.contact}</span>{" "}
                            <h5 className="mx-1 my-1 font-weight-bold">
                              Bank Location:{" "}
                            </h5>
                            <span className="ml-2">{bank.city}</span>
                          </div>
                          <div
                            className="modal-footer"
                            style={{
                              background: "rgb(53, 34, 65)",
                              color: "white",
                            }}
                          >
                            <button
                              type="button"
                              className="btn btn-light"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No banks</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ReceiverHome);
