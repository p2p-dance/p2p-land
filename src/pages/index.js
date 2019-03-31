import React, { useState } from 'react';
import hax from '../images/hax.jpg';
import p2pnodes from '../images/p2p-nodes.png';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
  const [bool, setBool] = useState(true);

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 500,
        }}
      >
        {bool ? (
          <img
            src={p2pnodes}
            alt="p2p-nodes-graph"
            onClick={() => setBool(!bool)}
          />
        ) : (
          <img src={hax} alt="p2p-hax" onClick={() => setBool(!bool)} />
        )}
        <p>{bool}</p>
      </div>
    </Layout>
  );
};

export default IndexPage;
