import Link from "next/link";
import classes from "./donation-item.module.css";
Link;

function DonationItem({
  id,
  image,
  heading,
  subHeading,
  description,
  cta,
  goal,
  days,
  progress,
  contributions,
}) {
  return (
    <div className={classes.card}>
      <li className={classes.list}>
        <div className={classes.iconContainer}>
          <img src={image} alt={heading} />
        </div>
        <di>
          <h2>{heading}</h2>
          <h4>{subHeading}</h4>
          <p>{description}</p>
        </di>
        {cta && (
          <div>
            <Link href={`/donation/${id}`}>Donate Again</Link>
          </div>
        )}
      </li>
    </div>
  );
}

export default DonationItem;
