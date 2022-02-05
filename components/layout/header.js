import Link from "next/link";

function Header({ home }) {
  return (
    <header className="px1 pt1 font-sm bold text-align-left">
      {home ? <div>Featured Charity</div> : <Link href="/">Back</Link>}
    </header>
  );
}

export default Header;
