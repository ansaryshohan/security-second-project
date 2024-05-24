import React, { Component } from "react";
import Hero from "../components/hero/Hero";
import ReviewSection from "../components/review/ReviewSection";
import ServiceSection from "../components/services/ServiceSection";
import InfoSectionOne from "../components/infoSections/InfoSectionOne";
import InfoSectionTwo from "../components/infoSections/InfoSectionTwo";
import Footer from "../components/shared/Footer";
import SubscriptionSection from "../components/subscriptionSection/SubscriptionSection";
import GetStartedSection from "../components/getStartedSection/GetStartedSection";

class HomePage extends Component {
  render() {
    return (
      <>
        <Hero />
        <ServiceSection/>
        <InfoSectionOne/>
        <InfoSectionTwo/>
        <ReviewSection />
        <SubscriptionSection/>
        <GetStartedSection/>
        <Footer/>
      </>
    );
  }
}

export default HomePage;
