import { useRouter } from "next/router";
import { Fragment } from "react";
import Header from "../../components/layout/header";
import { getDonationById } from "/dummy-data";

function DonationDetailPage() {
  const router = useRouter();
  const donationId = router.query.slug;
  const donation = getDonationById(donationId);

  if (!donation) {
    return (
      <Fragment>
        <p>No donation found!</p>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <Header />
      <div>{donation.description}</div>
    </Fragment>
  );
}

export default DonationDetailPage;
