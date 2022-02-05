import React, { Fragment } from "react";
import DonationList from "../components/donation/donation-list";
import Layout from "../components/layout/layout";
import { getAllDonations } from "../dummy-data";

function HomePage() {
  const allDonations = getAllDonations();
  console.log(allDonations);
  return (
    <Layout home>
      <Fragment>
        <DonationList items={allDonations} />
      </Fragment>
    </Layout>
  );
}

export default HomePage;
