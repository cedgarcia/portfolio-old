import React, { useState, useCallback, useEffect } from 'react';

import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { BackgroundContainer } from '../components/BackgroundContainer';
import { HomeContainer } from '../components/HomeContainer';
import { Intro } from '../components/Intro';
import { Navbar } from '../components/Navbar';
const BackgroundWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const Background = ({ setLoaded }) => {
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 100);
  }, [setLoaded]);

  return <BackgroundContainer />;
};

const HomeContent = () => <HomeContainer />;

export default function Home() {
  const [loadBookingList, setLoadBookingList] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Navbar />
      <Background setLoaded={setLoading} />
      {loading && <HomeContent />}
    </>
  );
}
