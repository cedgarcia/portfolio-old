import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import { Background } from '../components/Background';
import { AboutContent } from '../components/pages/AboutContent';
export default function about() {
  return (
    <>
      <Head>
        <title>Cedrick Garcia | About Me</title>
      </Head>
      <Navbar />
      <Background />
      <AboutContent />
    </>
  );
}
