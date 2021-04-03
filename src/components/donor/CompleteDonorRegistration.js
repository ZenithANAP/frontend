import React, { Component } from "react";
import { connect } from "react-redux";

export class CompleteDonorRegistration extends Component {
  render() {
    return (
      <div>
        <p>Complete donor registration</p>
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
