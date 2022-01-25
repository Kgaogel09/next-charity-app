import React, { Fragment } from "react";
import DonationList from "../components/donation/donation-list";
import { getAllDonations } from "../dummy-data";

function HomePage() {
  const allDonations = getAllDonations();
  return (
    <Fragment>
      <DonationList items={allDonations} />
    </Fragment>
  );
}

export default HomePage;
