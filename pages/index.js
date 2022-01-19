import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { Background } from '../components/Background';
import { Content } from '../components/Content';

const BackgroundWrap = styled.div`
  /* background: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 100%
  ); */

  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export default function Home() {
  return (
    <>
      <BackgroundWrap>
        <Background />
      </BackgroundWrap>
      <Content />
    </>
  );
}
