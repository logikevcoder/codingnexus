import React from 'react';
import { Link } from 'gatsby';

import Layout from '../layouts/layout';
import SEO from '../components/seo';

const ContactPage = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Hi from the second page</h1>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default ContactPage;
