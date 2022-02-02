import Head from 'next/head';

import { Navbar } from '../components/Navbar';
import { Background } from '../components/Background';
import { HomeContent } from '../components/pages/HomeContent';

const Home = () => (
  <>
    <Head>
      <title>Cedrick Garcia | Projects</title>
    </Head>
    <Navbar />
    <Background />
    <HomeContent />
  </>
);

export default Home;
