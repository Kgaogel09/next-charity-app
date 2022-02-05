import Image from "next/image";
import Link from "next/link";
import "/styles/helpers.module.scss";
import classes from "./donation-item.module.scss";

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
    <div className="border-bottom p2">
      <li className="display-flex flex-row justify-between align-center">
        <div className={classes.image}>
          <Image src={image} alt={heading} width={90} height={90} />
        </div>
        <div className={cta ? "w30" : "w50"}>
          <h2>{heading}</h2>
          <h4>{subHeading}</h4>
          <p>{description}</p>
        </div>
        {cta && (
          <div className="w10">
            <Link href={`/donation/${id}`}>Donate Again</Link>
          </div>
        )}
      </li>
    </div>
  );
}

export default DonationItem;
