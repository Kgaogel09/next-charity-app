import Link from "next/link";

function Header({ home }) {
  return (
    <header className="p1 font-md bold text-align-left">
      {home ? <div>Featured Charity</div> : <Link href="/">Back</Link>}
    </header>
  );
}

export default Header;
