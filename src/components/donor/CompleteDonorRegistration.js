import { auth } from "@config/firebase config";
import server from "@config/server";
import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "@components/shared/Loading";
import { NotificationManager } from "react-notifications";
export class CompleteDonorRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      username: "",
      phone: "",
      aadhar_card: "",
      address: "",
      blood_group: "",
      gender: "",
      age: "",
      weight: "",
      medical_conditions: "",
      recovery_date: "",
    };
  }
  componentDidMount() {
    this.setState({ loading: false });
  }

  getToken = async () => {
    const user = auth.currentUser;
    const token = user && (await user.getIdToken());
    const payloadHeader = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    return payloadHeader;
  };

  handleChange = (e) => {
    let options = e.target.options;
    let value = [];
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({ medical_conditions: value });
  };

  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true }, async () => {
      NotificationManager.info("Submitting form");
      // check all fields
      // let formData = new FormData();
      let data = {
        username: this.state.username,
        phone: this.state.phone,
        aadhar_card: this.state.aadhar_card,
        address: this.state.address,
        blood_group: this.state.blood_group,
        gender: this.state.gender,
        age: this.state.age,
        weight: this.state.weight,
        medical_conditions: this.state.medical_conditions,
        recovery_date: this.state.recovery_date,
      };
      // formData.append("username", this.state.username);
      // formData.append("phone", this.state.phone);
      // formData.append("aadhar_card", this.state.aadhar_card);
      // formData.append("address", this.state.address);
      // formData.append("blood_group", this.state.blood_group);
      // formData.append("gender", this.state.gender);
      // formData.append("age", this.state.age);
      // formData.append("weight", this.state.weight);
      // formData.append("medical_conditions", this.state.medical_conditions);
      // formData.append("recovery_date", this.state.recovery_date);

      server
        .post("donors/add1", data, await this.getToken())
        .then(({ data }) => {
          NotificationManager.success(data);
          this.props.history.push("/completeDonorRegistration2");
        })
        .catch((err) => {
          NotificationManager.error(err.message);
          this.setState({ loading: false });
        });
    });
  };
  render() {
    if (this.state.loading) return <Loading />;
    return (
      <div>
        <p
          className="container text-center font-weight-bold "
          style={{
            fontSize: "1.5rem",
            padding: "20px",
            background: "rgb(53, 34, 65)",
            color: "white",
          }}
        >
          Hey Donor! Complete your registration.
        </p>
        <div className="container mt-5">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
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
                onChange={this.handleInputChange}
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
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="aadhar_card"
                style={{ fontSize: "1.5rem", color: "#201140" }}
              >
                Aadhar Number:
              </label>
              <input
                className="form-control"
                type="text"
                name="aadhar_card"
                id="aadhar_card"
                placeholder="Enter your Aadhar Number: "
                onChange={this.handleInputChange}
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
                onChange={this.handleInputChange}
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
                className="custom-select"
                id="blood_group"
                name="blood_group"
                onChange={this.handleInputChange}
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
                  onChange={this.handleInputChange}
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
                  onChange={this.handleInputChange}
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
                  onChange={this.handleInputChange}
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
                  onChange={this.handleInputChange}
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
                onChange={this.handleInputChange}
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
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <select
                className="custom-select"
                multiple
                id="medical_conditions"
                name="medical_conditions"
                onChange={this.handleChange}
              >
                <option selected>Medical conditions</option>
                <option value="diabetes">Diabetes</option>
                <option value="hypertension">Hypertension</option>
                <option value="cancer">Cancer</option>
                <option value="comorbidity">Comorbidity</option>
                <option value="fine">Fine</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="recovery_date">Recovery Date:</label>
              <input
                className="form-control"
                type="date"
                name="recovery_date"
                id="recovery_date"
                placeholder="Enter your recovery date Number: "
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group text-center">
              <button type="submit" className="btn btn-outline-success">
                Submit
              </button>
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
)(CompleteDonorRegistration);
