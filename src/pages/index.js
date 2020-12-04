import React from 'react';
import '../styles/tailwind.css';

import Layout from '../layouts/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="font-xl">
      Welcome to Coding Nexus. Please check back later
    </h1>

    <div>
      <Image />
    </div>
  </Layout>
);

export default IndexPage;
