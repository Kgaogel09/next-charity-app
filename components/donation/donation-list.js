import DonationItem from "./donation-item";
import classes from "./donation-list.module.css";

function DonationList({ items }) {
  return (
    <div className={classes.card}>
      <ul className={classes.list}>
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
