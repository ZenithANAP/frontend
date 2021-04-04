import React, { Component } from "react";
import { connect } from "react-redux";

import landingimg from "@assets/landingPagewebp.webp";
import { Link } from "react-router-dom";

export class Landing extends Component {
  render() {
    return (
      <div>
        <div className="row min-vh-100">
          <div className="col-12 col-md-7 shadow home-no-padding">
            {/* img here */}
            <img
              src={landingimg}
              alt="home-img"
              className="img-responsive landing-img animate__fadeIn animate__animated"
            />
          </div>
          <div className="col-12 col-md-5 align-self-center order-md-first home-text-container">
            {/* text here */}
            <blockquote className="home-quote animate__fadeIn animate__animated">
              They're willing to lend an arm to help somebody they probably will
              never even have the opportunity to meet.
            </blockquote>
            <div className="d-flex flex-column p-5">
              <Link to="/register">
                <button className="btn w-100 shadow btn-outline-pinky my-3 mx-2 font-weight-bold py-2 animate__fadeIn animate__animated">
                  Ready to be a member?
                </button>
              </Link>
              <Link to="/login">
                <button className="btn w-100 shadow btn-outline-pinky my-3 mx-2 font-weight-bold py-2 animate__fadeIn animate__animated">
                  Are you a member?
                </button>
              </Link>
              <Link to="/knowmore">
                <button className="btn w-100 shadow btn-outline-pinky my-3 mx-2 font-weight-bold py-2 animate__fadeIn animate__animated">
                  Know More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
