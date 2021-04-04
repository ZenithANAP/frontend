import React, { Component } from "react";
import { connect } from "react-redux";
import { auth } from "@config/firebase config";
import server from "@config/server";
import { NotificationManager } from "react-notifications";

export class CompleteReceiverRegistration2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      covid_report: "",
      medical_report: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleImagePreview = (e) => {
    if (e.target.name === "covid_report") {
      let image_as_base64 = URL.createObjectURL(e.target.files[0]);
      let image_as_files = e.target.files[0];
      this.setState({
        image_preview: image_as_base64,
        covid_report: image_as_files,
      });
    }
    if (e.target.name === "medical_report") {
      let image_as_base642 = URL.createObjectURL(e.target.files[0]);
      let image_as_files2 = e.target.files[0];
      this.setState({
        image_preview2: image_as_base642,
        medical_report: image_as_files2,
      });
    }
  };

  componentDidMount() {
    this.setState({ loading: false });
  }

  getToken = async () => {
    const user = auth.currentUser;
    const token = user && (await user.getIdToken());
    const payloadHeader = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    return payloadHeader;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // check all fields
    this.setState({ loading: true }, async () => {
      let formData = new FormData();
      formData.append("covid_report", this.state.covid_report);
      formData.append("medical_report", this.state.medical_report);

      server
        .post("receivers/add2", formData, await this.getToken())
        .then(({ data }) => {
          NotificationManager.success(data);
          // this.props.location.reload();
        })
        .catch((err) => {
          NotificationManager.error(err.message);
          this.setState({ loading: false });
        });
    });
  };

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
    // console.log(value, name);
  }

  render() {
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
          Hey Receiver! Complete your registration.
        </p>
        <div className="container mt-5">
          {/* <form onSubmit={this.handleSubmit}> */}
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="form-group">
              {this.state.image_preview && (
                <img
                  src={this.state.image_preview}
                  alt="preview"
                  style={{
                    width: `40vw`,
                    height: `50vh`,
                    padding: `10px`,
                  }}
                />
              )}
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="covid_report"
                  name="covid_report"
                  onChange={this.handleImagePreview}
                />
                <label
                  className="custom-file-label"
                  for="covid_report"
                  aria-describedby="covid_report"
                >
                  Covid report
                </label>
              </div>
            </div>
            <div className="form-group">
              {this.state.image_preview2 && (
                <img
                  src={this.state.image_preview2}
                  alt="preview"
                  style={{
                    width: `40vw`,
                    height: `50vh`,
                  }}
                />
              )}
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="medical_report"
                  name="medical_report"
                  onChange={this.handleImagePreview}
                />
                <label
                  className="custom-file-label"
                  for="medical_report"
                  aria-describedby="medical_report"
                >
                  Medical report
                </label>
              </div>
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
)(CompleteReceiverRegistration2);
