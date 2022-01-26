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
  const donateAgain = `/donation/${id}`;
  return (
    <li>
      <div>
        <img src={image} alt={heading} />
      </div>
      <di>
        <h2>{heading}</h2>
        <h4>{subHeading}</h4>
        <p>{description}</p>
      </di>
      <div>
        <Link href={donateAgain}>Donate Again</Link>
      </div>
    </li>
  );
}

export default DonationItem;
