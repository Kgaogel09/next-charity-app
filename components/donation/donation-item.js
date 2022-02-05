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
        <div className={cta ? "w20" : "w60"}>
          <p className="font-md">{heading}</p>
          <p className="font-sm grey">{subHeading}</p>
          <p className="font-xs bold">{description}</p>
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
