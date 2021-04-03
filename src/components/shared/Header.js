import { auth } from "@config/firebase config";
import React, { Component } from "react";
import { connect } from "react-redux";

export class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="navbar navbar-expand-lg navbar-light bg-white shadow-sm mb-2">
            <div className="navbar-brand">
              <h1 role="button" onClick={() => this.props.history.push("/")}>
                Plasma
              </h1>
            </div>
            <div className="ml-auto">
              <div
                className="dropdown"
                style={{
                  width: `3.2rem`,
                  height: `3.2rem`,
                }}
              >
                <img
                  src="https://api.multiavatar.com/87004020d070f1ef11.svg"
                  alt="User"
                  className="rounded-circle w-100 shadow img-responsive"
                  data-toggle="dropdown"
                  role="button"
                />
                <div className="dropdown-menu dropdown-menu-right mt-2 border-0 shadow">
                  <div
                    className="dropdown-item"
                    role="button"
                    onClick={() => auth.signOut()}
                  >
                    Logout
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
