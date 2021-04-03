import React, { Component } from "react";
import { connect } from "react-redux";

export class DonorHome extends Component {
  render() {
    return (
      <div>
        <p>Statistics</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DonorHome);
