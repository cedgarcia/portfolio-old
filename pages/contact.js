import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import { Background } from '../components/Background';
import { ContactContent } from '../components/pages/ContactContent';

export default function contact() {
  return (
    <>
      <Head>
        <title>Cedrick Garcia | Contact me</title>
      </Head>
      <Navbar />
      <Background />
      <ContactContent />
    </>
  );
}
