import React, { Component } from "react";
import { connect } from "react-redux";

export class ReceiverHome extends Component {
  render() {
    return (
      <div>
        <p>Receiver statistics</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ReceiverHome);
