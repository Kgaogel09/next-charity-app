import React, { Fragment } from "react";
import DonationList from "../components/donation/donation-list";
import Header from "../components/layout/header";
import { getAllDonations } from "../dummy-data";

function HomePage() {
  const allDonations = getAllDonations();
  console.log(allDonations);
  return (
    <Fragment>
      <Header home />
      <DonationList items={allDonations} />
    </Fragment>
  );
}

export default HomePage;
