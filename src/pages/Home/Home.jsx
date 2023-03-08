import Layout from '@components/Layout';

import Banner from './Banner';
import LocalServices from './LocalServices';
import JoinUs from './JoinUs';
import Footer from '@components/Footer';

function Home() {
  return (
    <Layout>
      <Banner />
      <LocalServices />
      <JoinUs />
      <Footer />
    </Layout>
  );
}

export default Home;
