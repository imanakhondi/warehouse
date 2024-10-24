import React from "react";
import { HiChevronRight } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav>
      <ul className="flex text-2xl font-bold text-primary-900">
        <li>
          <Link to="/">Home </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li
              key={to}
              className={` ${isLast ? "text-black/80 dark:text-white/90" : ""}`}
            >
              <HiChevronRight className="mx-2 inline-block h-8 w-8" />
              <Link to={to}>{value}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Breadcrumb;
