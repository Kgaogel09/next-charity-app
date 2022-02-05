import Link from "next/link";
import { Fragment } from "react";
import "../../styles/helpers.module.scss";

function Layout({ children, home }) {
  return (
    <Fragment>
      <header className="px1 pt1 font-sm bold text-align-left">
        {home ? <div>Featured Charity</div> : <Link href="/">Back</Link>}
      </header>
      <main>{children}</main>
    </Fragment>
  );
}

export default Layout;
