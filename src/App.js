import { Loading } from "@components/shared/Loading";
import React, { Component } from "react";
import { connect } from "react-redux";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: null,
      loading: true,
    };
  }

  /*  
  user = {
    uid: string
    email: string
    phone: tel 
    aadhaar_card: number
    address: string
    user_type: enum(donor, receiver)
    blood_group: enum
    plasma_type: ?
    gender: enum
    medical_conditions: select[]
    age: number
    weight: number
    covid_report: image
    medical_report:
    recory_date: date

    * donor
    last_donation: datetime
    donations: {
      donation_id: {
        when: datetime
        test_reports: image
        used: [
          {
            by:
            bank_id:
            quantity:
          },
        ]
      }
    }

    * receiver
    received_data: {
      received_id: {
        when: datetime
        test_reports: image
        used: [
          {
            of: 
            bank_id: 
            quantity:
          }
        ]
      }
    }
  }

  blood_bank = {
    id: string
    bank_name: string
    location: string
    types: {
      a+: {
        available: quantity
      }
    }
  }


  landing page:
    welcome --> to login or register (donor or receiver) 2-step process

  not authenticated:
    login, register, forgot password

  authenticated:
    donor:
      dashboard
        your details
        donate?
          blood banks list, sorted by location, nearest
        update details  
    
    receiver:
      dashboard
        stats
      
    FAQ page
  
  */

  render() {
    if (this.state.loading) return <Loading />;
    return (
      <div>
        <p>Welcome to plasma</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
