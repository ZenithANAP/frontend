import React, { Component } from "react";
import { connect } from "react-redux";

export class CompleteReceiverRegistration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      phone: "",
      aadhar: "",
      address: "",
      blood_group: "",
      gender: "",
      age: "",
      weight: "",
      medical_conditions: "",
      covid_report: "",
      medical_report: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("form submitted!");
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
    console.log(value, name);
  }

  render() {
    return (
      <div>
        <p
          className=" container text-center font-weight-bold "
          style={{
            fontSize: "1.5rem",
            padding: "20px",
            background: "rgb(53, 34, 65)",
            color: "white",
          }}
        >
          Hey Receiver! Complete your registration.
        </p>
        <div className="container mt-5">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label
                htmlFor="username"
                style={{ fontSize: "1.5rem", color: "#201140" }}
              >
                Username:
              </label>
              <input
                className="form-control"
                type="text"
                name="username"
                id="username"
                placeholder="Enter your name: "
                required
                onChange={this.handleUserInput}
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="phone"
                style={{ fontSize: "1.5rem", color: "#201140" }}
              >
                Phone Number:
              </label>
              <input
                className="form-control"
                type="number"
                name="phone"
                id="phone"
                placeholder="Enter your phone number: "
                required
                onChange={this.handleUserInput}
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="aadhar"
                style={{ fontSize: "1.5rem", color: "#201140" }}
              >
                Aadhar Number:
              </label>
              <input
                className="form-control"
                type="text"
                name="aadhar"
                id="aadhar"
                placeholder="Enter your Aadhar Number: "
                required
                onChange={this.handleUserInput}
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="address"
                style={{ fontSize: "1.5rem", color: "#201140" }}
              >
                Address:
              </label>
              <textarea
                className="form-control"
                id="address"
                name="address"
                placeholder="Enter your address: "
                rows="3"
                required
                onChange={this.handleUserInput}
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="bloodgroup"
                style={{ fontSize: "1.5rem", color: "#201140" }}
              >
                Blood Group:
              </label>
              <select
                className="form-control"
                id="blood_group"
                name="blood_group"
                required
                onChange={this.handleUserInput}
              >
                <option value="">Select your blood group</option>
                <option value="A+"> A+ </option>
                <option value="A-"> A- </option>
                <option value="B+"> B+ </option>
                <option value="B-"> B- </option>
                <option value="AB+"> AB+ </option>
                <option value="AB-"> AB- </option>
                <option value="O+"> O+ </option>
                <option value="O-"> O- </option>
              </select>
            </div>
            <div className="form-group">
              <label
                htmlFor="gender"
                style={{ fontSize: "1.5rem", color: "#201140" }}
              >
                Gender:
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="Male"
                  onChange={this.handleUserInput}
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input "
                  type="radio"
                  name="gender"
                  id="female"
                  value="Female"
                  onChange={this.handleUserInput}
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="other"
                  value="Others"
                  onChange={this.handleUserInput}
                />
                <label className="form-check-label" htmlFor="other">
                  Others
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="not_to_say"
                  value="Prefer not to say"
                  onChange={this.handleUserInput}
                />
                <label className="form-check-label" htmlFor="not_to_say">
                  Prefer not to say
                </label>
              </div>
            </div>
            <div className="form-group">
              <label
                htmlFor="age"
                style={{ fontSize: "1.5rem", color: "#201140" }}
              >
                Age:
              </label>
              <input
                className="form-control"
                type="age"
                name="age"
                id="age"
                placeholder="Enter your age: "
                required
                onChange={this.handleUserInput}
              />
            </div>
            <div
              className="form-group"
              style={{ fontSize: "1.5rem", color: "#201140" }}
            >
              <label htmlFor="weight">Weight:</label>
              <input
                className="form-control"
                type="weight"
                name="weight"
                id="weight"
                placeholder="Enter your weight: "
                required
                onChange={this.handleUserInput}
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="address"
                style={{ fontSize: "1.5rem", color: "#201140" }}
              >
                Medical Conditions:
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Diabetes"
                  id="diabetes"
                  onChange={this.handleUserInput}
                />
                <label className="form-check-label" htmlFor="diabetes">
                  Diabetes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Hypertension"
                  id="hypertension"
                  onChange={this.handleUserInput}
                />
                <label className="form-check-label" htmlFor="hypertension">
                  Hypertension
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Cancer"
                  id="cancer"
                  onChange={this.handleUserInput}
                />
                <label className="form-check-label" htmlFor="cancer">
                  Cancer
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Nah. I'm healthy"
                  id="none"
                  onChange={this.handleUserInput}
                />
                <label className="form-check-label" htmlFor="none">
                  Nah. I'm healthy
                </label>
              </div>
              {/* comorbidities such as diabetes, hypertension, and cancer are also excluded. */}
              {/* <textarea
                className="form-control"
                id="medical_conditions"
                name="medical_conditions"
                placeholder="Mention any medical conditions you have/had experienced: "
                rows="3"
                required
                onChange={this.handleUserInput}
              /> */}
            </div>
            <div className="form-group">
              <label
                htmlFor="covid_report"
                style={{ fontSize: "1.5rem", color: "#201140" }}
              >
                Covid Report
              </label>
              <input
                type="file"
                className="form-control-file"
                id="covid_report"
              />
            </div>
            <div
              className="form-group"
              style={{ fontSize: "1.5rem", color: "#201140" }}
            >
              <label htmlFor="medical_report">Medical Report</label>
              <input
                type="file"
                className="form-control-file"
                id="medical_report"
              />
            </div>
            <div className="form-group text-center">
              <input
                type="submit"
                className="btn btn-outline-success"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompleteReceiverRegistration);
