import { Login } from "@components/auth/Login";
import { Register } from "@components/auth/Register";
import { KnowMore } from "@components/shared/KnowMore";
import { Landing } from "@components/shared/Landing";
import { Loading } from "@components/shared/Loading";
import { auth } from "@config/firebase config";
import server from "@config/server";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import "./App.scss";
import { NotificationManager } from "react-notifications";
import createToken from "@config/headerCreator";
import CompleteDonorRegistration from "@components/donor/CompleteDonorRegistration";
import CompleteDonorRegistration2 from "@components/donor/CompleteDonorRegistration2";
import Header from "@components/shared/Header";
import CompleteReceiverRegistration from "@components/receiver/CompleteReceiverRegistration";
import CompleteReceiverRegistration2 from "@components/receiver/CompleteReceiverRegistration2";
import DonorHome from "@components/donor/DonorHome";
import ReceiverHome from "@components/receiver/ReceiverHome";
import YourDonations from "@components/donor/YourDonations";
export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: null,
      loading: true,
      completed_registration_step2: null,
      user_type: null,
    };
  }

  /*  
  user = {
    uid: string
    email: string
    hone: tel 
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

  componentDidMount() {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        // console.log(user.uid);
        server
          .get("getType", await createToken())
          .then(({ data }) => {
            // console.log(data);
            this.setState(
              {
                loading: false,
                authenticated: true,
                user_type: data.type,
                completed_registration_step2: data.hasData,
              },
              () => {
                if (data.type === "donor") {
                  if (data.hasData) this.props.history.push("/");
                  else this.props.history.push("/completeDonorRegistration");
                } else {
                  if (data.hasData) this.props.history.push("/");
                  else this.props.history.push("/completeReceiverRegistration");
                }
              }
            );
          })
          .catch((er) => {
            // NotificationManager.error("Error fetching data");
            NotificationManager.error(er.message);
            auth.signOut();
          });
      } else {
        this.setState({ loading: false, authenticated: false });
      }
    });
  }

  render() {
    if (this.state.loading) return <Loading />;
    if (this.state.authenticated) {
      // authenticated
      if (this.state.user_type === "donor") {
        // donor
        if (this.state.completed_registration_step2) {
          // completed registration
          return (
            <div className="min-vh-100 d-flex flex-column">
              <Route component={(props) => <Header {...props} />} />
              <div className="flex-grow-1">
                <Route exact path="/" component={DonorHome} />
                <Route exact path="/yourdonations" component={YourDonations} />
              </div>
            </div>
          );
        } else {
          // not completed registration
          return (
            <div className="min-vh-100 d-flex flex-column">
              <Route component={(props) => <Header {...props} />} />
              <div className="flex-grow-1">
                <Switch>
                  <Route
                    exact
                    path="/completeDonorRegistration"
                    component={(props) => (
                      <CompleteDonorRegistration {...props} />
                    )}
                  />
                  <Route
                    exact
                    path="/completeDonorRegistration2"
                    component={(props) => (
                      <CompleteDonorRegistration2 {...props} />
                    )}
                  />
                  <Route exact path="/" component={ReceiverHome} />
                  <Redirect to="/" />
                </Switch>
              </div>
            </div>
          );
        }
      } else if (this.state.user_type === "receiver") {
        // receiver
        if (this.state.completed_registration_step2) {
          // completed registration
          return (
            <div className="min-vh-100 d-flex flex-column">
              <Route component={(props) => <Header {...props} />} />
              <div className="flex-grow-1">
                <Route exact path="/" component={ReceiverHome} />
              </div>
            </div>
          );
        } else {
          // not completed registration
          return (
            <div className="min-vh-100 d-flex flex-column">
              <Route component={(props) => <Header {...props} />} />
              <div className="flex-grow-1">
                <Switch>
                  <Route
                    exact
                    path="/completeReceiverRegistration"
                    component={(props) => (
                      <CompleteReceiverRegistration {...props} />
                    )}
                  />
                  <Route
                    exact
                    path="/completeReceiverRegistration2"
                    component={(props) => (
                      <CompleteReceiverRegistration2 {...props} />
                    )}
                  />

                  <Redirect to="/" />
                </Switch>
              </div>
            </div>
          );
        }
      } else {
        return (
          <div className="">
            <button
              className="btn btn-primary"
              onClick={() => {
                NotificationManager.error("An unexpected error has occured");
                auth.signOut();
              }}
            >
              goBack
            </button>
          </div>
        );
      }
    } else {
      // not authenticated
      return (
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/knowmore" component={KnowMore} />
          <Redirect to="/" />
        </Switch>
      );
    }
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
