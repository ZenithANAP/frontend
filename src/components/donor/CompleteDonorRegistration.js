import { auth } from "@config/firebase config";
import server from "@config/server";
import React, { Component } from "react";
import { connect } from "react-redux";
import { NotificationManager } from "react-notifications";

export class CompleteDonorRegistration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image_file: null,
      image_file2: null,
      image_preview: "",
      image_preview2: "",
      // username: "",
      // phone: "",
      // aadhar: "",
      // address: "",
      // blood_group: "",
      // gender: "",
      // age: "",
      // weight: "",
      // medical_conditions: "",
      // covid_report: "",
      // medical_report: "",
      // recovery_date: "",
    };
  }
  // Image Preview Handler
  handleImagePreview = (e) => {
    let image_as_base64 = URL.createObjectURL(e.target.files[0]);
    let image_as_base642 = URL.createObjectURL(e.target.files[1]);
    let image_as_files = e.target.files[0];
    let image_as_files2 = e.target.files[1];

    this.setState({
      image_preview: image_as_base64,
      image_preview2: image_as_base642,
      image_file: image_as_files,
      image_file2: image_as_files2,
    });
  };

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

  // handleInputChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   this.setState({ [name]: value });
  //   console.log(value, name);
  // };

  // Image/File Submit Handler
  handleSubmitFile = async () => {
    if (this.state.image_file !== null && this.state.image_file2 !== null) {
      let formData = new FormData();
      formData.append("customFile", this.state.image_file);
      formData.append("customFile2", this.state.image_file2);
      // the image field name should be similar to your api endpoint field name
      // in my case here the field name is customFile

      console.log(await this.getToken());

      server
        .post("donors/image", formData, await this.getToken())
        .then((res) => {
          NotificationManager.success(`Success` + res.data);
        })
        .catch((err) => {
          NotificationManager.error(err.message);
        });
    }
  };

  render() {
    return (
      <div>
        <p
          className="text-center font-weight-bold text-primary"
          style={{ fontSize: "1.5rem" }}
        >
          Hey Donor! Complete your registration.
        </p>
        {/* image preview */}
        <img
          src={this.state.image_preview}
          alt="preview"
          style={{
            width: `40vw`,
            height: `50vh`,
          }}
        />
        <img
          src={this.state.image_preview2}
          alt="preview"
          style={{
            width: `40vw`,
            height: `50vh`,
          }}
        />

        {/* image input field */}
        <input type="file" multiple onChange={this.handleImagePreview} />
        <label>Upload file</label>
        <input type="submit" onClick={this.handleSubmitFile} value="Submit" />
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
