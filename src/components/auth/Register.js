import React, { Component } from "react";
import { connect } from "react-redux";
// import RegisterImage from "@assets/register.jpg";
import RegisterImage from "@assets/register.gif";
import { Link } from "react-router-dom";
import { auth } from "@config/firebase config";
import { NotificationManager } from "react-notifications";
import { setLoading } from "@redux/action creators/auth";
import { Loading } from "@components/shared/Loading";
import server from "@config/server";
import createToken from "@config/headerCreator";

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      email: "",
      password: "",
      type: "donor",
    };
  }

  handleChange = (e) => {
    // e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.loading === false) {
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.type !== "donor" && this.state.type !== "receiver") {
      NotificationManager.warning("Please select type");
    } else
      this.setState({ loading: true }, () => {
        NotificationManager.info("Creating your account");
        auth
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(async ({ user }) => {
            server
              .post(
                "register",
                {
                  type: this.state.type,
                },
                await createToken()
              )
              .then(({ data }) => {
                NotificationManager.success("Account created");
              })
              .catch((er) => {
                user.delete();
                NotificationManager.error("Error creating user");
              });
          })
          .catch((er) => {
            NotificationManager.error(er.message);
            this.setState({ loading: false });
          });
      });
  };

  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) return <Loading />;
    return (
      <div id="Register">
        <div className="min-vh-100 d-flex justify-content-center align-items-center">
          <div
            className="w-100"
            style={{
              position: "absolute",
              zIndex: 0,
              height: "100vh",
              background: `url(${RegisterImage})`,
              backgroundColor: `#000000ff`,
              backgroundSize: `cover`,
              //   opacity: `.8`,
            }}
          />
          <div
            className="card shadow animate__fadeIn animate__animated"
            style={{
              backdropFilter: `blur(10px)`,
              background: `rgba(255,255,255,.7)`,
              borderRadius: `1rem`,
              width: `40vw`,
              height: `73vh`,
              border: `none`,
              overflow: `auto`,
            }}
          >
            <div className="card-header border-0">
              <div
                className="card-title text-center p-0 m-0"
                style={{
                  fontFamily: `'Kiwi Maru', serif`,
                  fontSize: `2rem`,
                  fontWeight: `600`,
                }}
              >
                Register
              </div>
            </div>
            <div className="card-body">
              <form
                onSubmit={this.handleSubmit}
                autoComplete="off"
                className=" p-3"
              >
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="type">Select account type</label>
                  <select
                    className="custom-select"
                    onChange={this.handleChange}
                    id="type"
                    name="type"
                  >
                    <option selected value="donor">
                      Donor
                    </option>
                    <option value="receiver">Receiver</option>
                  </select>
                </div>
                <div className="form-group text-center pt-3">
                  <button className="btn btn-success">Register</button>
                </div>
                <div className="form-group text-center p-1">
                  <Link to="/login">Already have an account?</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authReducer }) => ({
  loading: authReducer.loading,
});

const mapDispatchToProps = {
  setLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
