import React, { Component } from "react";

import Header from "partials/Header";
import Hero from "partials/Hero";
import MostPicked from "partials/MostPicked";

import landingPage from "json/landingPage.json";
import Categories from "partials/Categories";
import Testimoni from "partials/Testimoni";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPage.mostPicked}
        />
        <Categories data={landingPage.categories} />
        <Testimoni data={landingPage.testimonial} />
      </>
    );
  }
}
