import React from 'react';
import { Link } from 'gatsby';

import Layout from '../layouts/layout';
import SEO from '../components/seo';

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Welcome to the blog page</h1>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default BlogPage;
