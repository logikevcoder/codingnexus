import React from 'react';
import { Link } from 'gatsby';

import Layout from '../layouts/layout';
import SEO from '../components/seo';

const LoginPage = () => (
  <Layout>
    <SEO title="Login" />
    <h1>Welcome to the login page</h1>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default LoginPage;
