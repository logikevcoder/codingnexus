import React from 'react';
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => (
  <header>
    <Link className="px-10" to="/blog/">
      Blog
    </Link>
    <Link className="px-10" to="/about/">
      About
    </Link>
    <Link className="px-10" to="/bootcamp/">
      Bootcamp
    </Link>
    <Link className="px-10" to="/contact/">
      Contact
    </Link>
    <Link className="px-10" to="/login/">
      Login
    </Link>
  </header>
);

export default Header;
