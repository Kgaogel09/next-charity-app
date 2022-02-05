import Link from "next/link";
import "/styles/helpers.module.scss";

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
        <div className="w40">
          <img src={image} alt={heading} />
        </div>
        <div className="w40">
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
