import React from 'react';
import { Link } from 'gatsby';

import Layout from '../layouts/layout';
import SEO from '../components/seo';

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>Welcome to the about page</h1>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default AboutPage;
