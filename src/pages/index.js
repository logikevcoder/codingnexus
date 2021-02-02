import React from 'react';
import '../styles/tailwind.css';
import SectionBlock from '../components/SectionBlock/index.js';

import Layout from '../layouts/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to Coding Nexus. Please check back later</h1>
    <p>Testing</p>
    <div>
      <Image />
    </div>
    <SectionBlock />
  </Layout>
);

export default IndexPage;
