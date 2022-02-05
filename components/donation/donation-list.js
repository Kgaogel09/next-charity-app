import DonationItem from "./donation-item";

function DonationList({ items }) {
  return (
    <div>
      <ul>
        {items.map((donation) => (
          <DonationItem
            key={donation.id}
            id={donation.id}
            image={donation.image}
            heading={donation.heading}
            subHeading={donation.subHeading}
            description={donation.description}
            cta={donation.cta}
            goal={donation.goal}
            days={donation.days}
            progress={donation.progress}
            contributions={donation.contributions}
          />
        ))}
      </ul>
    </div>
  );
}

export default DonationList;
