import React, { Component } from "react";
import { connect } from "react-redux";
export class KnowMore extends Component {
  render() {
    return (
      <div className="knowmore-wrapper">
        <div className="container know-more-container min-vh-100">
          <div
            className="text-center font-weight-bold mt-5 animate__fadeIn animate__animated"
            style={{
              fontSize: "1.5rem",
              padding: "60px",
              background: "rgb(53, 34, 65)",
              color: "white",
            }}
          >
            Convalescent Plasma Therapy & COVID-19 - All you need to know about
            it
          </div>
          <div className="py-5 mt-3 animate__fadeIn animate__animated text-justify">
            The convalescent plasma therapy has been used to treat people with
            severe COVID-19 caused by the novel corona virus or SARS-Cov-2
            virus. With no vaccine or specific treatment for the dreaded virus,
            researchers are exploring various approaches – such as convalescent
            plasma therapy – to fight the respiratory illness. The experimental
            therapy has shown to be beneficial in some COVID-19 patients,
            including in India. But, what is plasma therapy and how it can be
            useful is a common question lingering in most people’s mind. Here is
            all you need to know about it.
          </div>
          <div className="mt-5 text-justify">
            <div className="accordion" id="faq">
              <div className="card shadow">
                <div className="card-header" id="faqhead1">
                  <a
                    href="#"
                    className="btn btn-header-link animate__fadeIn animate__animated"
                    data-toggle="collapse"
                    data-target="#faq1"
                    aria-expanded="true"
                    aria-controls="faq1"
                  >
                    What is plasma and what is its function
                  </a>
                </div>

                <div
                  id="faq1"
                  className="collapse show"
                  aria-labelledby="faqhead1"
                  data-parent="#faq"
                >
                  <div className="card-body animate__fadeIn animate__animated">
                    Plasma is the pale yellowish liquid part of the blood that
                    holds the blood cells in whole blood in suspension. It
                    carries protein, minerals, nutrients and hormones to the
                    different parts of the body. It makes up about 55 per cent
                    of the body’s total blood volume. Plasma itself is made up
                    of 90% water, the remaining portion is composed of proteins
                    such as albumin, gamma globulin, anti-haemophilic factor,
                    and mineral, salts, sugars, fats, hormones and vitamins. The
                    major function of plasma is to maintain normal blood
                    pressure, supply proteins to different parts of the body for
                    blood clotting and immunity, carry electrolytes such as
                    sodium and potassium to our muscles and to maintain a proper
                    pH balance in the body.
                  </div>
                </div>
              </div>
              <div className="card shadow">
                <div className="card-header" id="faqhead2">
                  <a
                    href="#"
                    className="btn btn-header-link collapsed animate__fadeIn animate__animated"
                    data-toggle="collapse"
                    data-target="#faq2"
                    aria-expanded="true"
                    aria-controls="faq2"
                  >
                    How plasma therapy helps COVID-19 patients?
                  </a>
                </div>

                <div
                  id="faq2"
                  className="collapse"
                  aria-labelledby="faqhead2"
                  data-parent="#faq"
                >
                  <div className="card-body animate__fadeIn animate__animated">
                    This therapy’s concept is simple and is based on the premise
                    that the blood of a patient who has recovered from COVID-19
                    contains antibodies with the specific ability of fighting
                    novel coronavirus. The theory is that the recovered
                    patient’s antibodies, once ingested into somebody under
                    treatment, will begin targeting and fighting the novel
                    coronavirus in the second patient.
                    <br />
                    <br />
                    The convalescent plasma therapy is akin to passive
                    immunisation as, according to researchers, it is a
                    preventive measure and not a treatment for the COVID-19
                    disease.
                  </div>
                </div>
              </div>
              <div className="card shadow">
                <div className="card-header" id="faqhead3">
                  <a
                    href="#"
                    className="btn btn-header-link collapsed animate__fadeIn animate__animated"
                    data-toggle="collapse"
                    data-target="#faq3"
                    aria-expanded="true"
                    aria-controls="faq3"
                  >
                    The technique of plasma donation
                  </a>
                </div>

                <div
                  id="faq3"
                  className="collapse"
                  aria-labelledby="faqhead3"
                  data-parent="#faq"
                >
                  <div className="card-body animate__fadeIn animate__animated">
                    Donating plasma is not the same as donating blood. The two
                    are different and require different techniques.
                    <br />
                    <br />
                    The blood donation process is simpler as compared to plasma
                    donation. During blood donation, the whole blood is
                    collected in a bag and its components are later separated in
                    the laboratory. However, in plasma donation, blood that is
                    drawn from the arm has to go through a special machine where
                    plasma is separated from the rest of the part of the blood.
                    Only the plasma is stored and the rest of the components
                    including donor’s red blood cells and platelets are then
                    returned to the body along with some saline. Due to its
                    complexity, plasma donation takes more time than blood
                    donation. While it takes only 30 minutes to donate whole
                    blood, plasma donation is an hour and a half long procedure.
                    <br />
                    <br />
                    The collected plasma should be transfused in the patient’s
                    body within 8 hours or it should be immediately frozen.
                    <br />
                    <br />
                    Fresh frozen plasma (FFP) can be stored for close to a year
                    at -18 degree Celsius. Although plasma can be stored, but
                    the doctors do not recommend it, as storing plasma makes the
                    antibodies present in it less effective.
                  </div>
                </div>
              </div>
              <div className="card shadow">
                <div className="card-header" id="faqhead4">
                  <a
                    href="#"
                    className="btn btn-header-link collapsed animate__fadeIn animate__animated"
                    data-toggle="collapse"
                    data-target="#faq4"
                    aria-expanded="true"
                    aria-controls="faq4"
                  >
                    Who can donate plasma?
                  </a>
                </div>

                <div
                  id="faq4"
                  className="collapse"
                  aria-labelledby="faqhead4"
                  data-parent="#faq4"
                >
                  <div className="card-body animate__fadeIn animate__animated">
                    Those who had the disease, but have recovered at least 14
                    days before the donation can be considered — although
                    doctors prefer a time of three weeks between recovery and
                    donation. Individuals must have had a prior diagnosis of
                    COVID-19 documented by a laboratory test while also meeting
                    other donor criteria.
                    <br />
                    <br />
                    People between the ages of 18 and 60, and weighing not less
                    than 50 kg are eligible. Women who have given birth are not
                    eligible, as the antibodies they produce during pregnancy
                    (after being exposed to the blood of the foetus) can
                    interfere with lung function.
                    <br />
                    <br />
                    People with comorbidities such as diabetes, hypertension,
                    and cancer are also excluded. A detailed medical history
                    will be taken along with physical examination (height,
                    weight, blood pressure, temperature, adequate veins for
                    phlebotomy).
                  </div>
                </div>
              </div>
              <div className="card shadow">
                <div className="card-header" id="faqhead5">
                  <a
                    href="#"
                    className="btn btn-header-link collapsed animate__fadeIn animate__animated"
                    data-toggle="collapse"
                    data-target="#faq5"
                    aria-expanded="true"
                    aria-controls="faq5"
                  >
                    What tests are carried out before donating plasma?
                  </a>
                </div>

                <div
                  id="faq5"
                  className="collapse"
                  aria-labelledby="faqhead5"
                  data-parent="#faq"
                >
                  <div className="card-body animate__fadeIn animate__animated">
                    Laboratory tests are carried out to assess various
                    conditions — serum protein and CBC, TTI testing for
                    hepatitis B virus, hepatitis C virus, HIV, malaria, and
                    syphilis — and for blood grouping and antibody screening.
                    Serum COVID-19 specific IgG antibody concentration higher
                    than 80 is preferred.
                  </div>
                </div>
              </div>
              <div className="card shadow">
                <div className="card-header" id="faqhead6">
                  <a
                    href="#"
                    className="btn btn-header-link collapsed animate__fadeIn animate__animated"
                    data-toggle="collapse"
                    data-target="#faq6"
                    aria-expanded="true"
                    aria-controls="faq6"
                  >
                    How many people would be benefitted by one person’s
                    donation?
                  </a>
                </div>

                <div
                  id="faq6"
                  className="collapse"
                  aria-labelledby="faqhead6"
                  data-parent="#faq"
                >
                  <div className="card-body animate__fadeIn animate__animated">
                    Each plasma donation would be used to treat 2 patients. The
                    bank collects 500 ml of plasma, depending on weight.
                  </div>
                </div>
              </div>
              <div className="card shadow">
                <div className="card-header" id="faqhead7">
                  <a
                    href="#"
                    className="btn btn-header-link collapsed animate__fadeIn animate__animated"
                    data-toggle="collapse"
                    data-target="#faq7"
                    aria-expanded="true"
                    aria-controls="faq7"
                  >
                    How often can a recovered patient donate plasma?
                  </a>
                </div>

                <div
                  id="faq7"
                  className="collapse"
                  aria-labelledby="faqhead7"
                  data-parent="#faq"
                >
                  <div className="card-body animate__fadeIn animate__animated">
                    500 ml of plasma can be donated every two weeks, while blood
                    can be donated once in three months. Plasma can be stored
                    for a year, as frozen plasma will still have antibodies. The
                    antibody level doesn’t decrease in a person’s body.
                  </div>
                </div>
              </div>
              <div className="card shadow">
                <div className="card-header" id="faqhead8">
                  <a
                    href="#"
                    className="btn btn-header-link collapsed animate__fadeIn animate__animated"
                    data-toggle="collapse"
                    data-target="#faq8"
                    aria-expanded="true"
                    aria-controls="faq8"
                  >
                    What to do before donating plasma
                  </a>
                </div>

                <div
                  id="faq8"
                  className="collapse"
                  aria-labelledby="faqhead8"
                  data-parent="#faq"
                >
                  <div className="card-body animate__fadeIn animate__animated">
                    Here are a few things one must do before donating plasma:
                    <ul>
                      <li>Drink plenty of water</li>
                      <li>Inform if you recently had a surgery</li>
                      <li>Inform if you are taking any specific drugs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(KnowMore);
