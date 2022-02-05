import { useRouter } from "next/router";
import { Fragment } from "react";
import Layout from "../../components/layout/layout";
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
    <Layout>
      <div>{donation.description}</div>
    </Layout>
  );
}

export default DonationDetailPage;
