import React, { useEffect } from 'react';

import styled, { keyframes } from 'styled-components';
import { Content } from './Content';

const BgAnimation = keyframes`
0%{
width:0;
}
100% {
width:100vw;
}`;

const BG = styled.div`
  .lines {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  .lines .horizontal,
  .lines .vertical {
    background-color: rgb(44, 44, 44);
    position: absolute;
    opacity: 0.5;
    /* box-shadow: rgb(31, 31, 31) 1px 1px; */
  }

  .text {
    position: relative;
    padding: 3rem;
    z-index: 1000;
    font-size: 5rem;
  }

  .background {
    z-index: 100;
    margin: 4rem;
    /* padding: 5rem; */
    height: 70vh;
    width: 70vw;
    background-color: rgb(22, 22, 22);
  }
  .horizontal {
    height: 2px;
    animation: ${BgAnimation} 2s linear forwards;
  }
  .vertical {
    height: 100vh;
    width: 2px;
  }
  .lines.blue {
    z-index: 2;
    clip-path: circle(4rem at var(--x) var(--y));
  }
  .lines.blue .horizontal {
    /* line-height: -1; */
    /* height: 2px; */
  }
  .lines.blue .horizontal,
  .lines.blue .vertical {
    /* background-color: rgb(70, 187, 255); */
    /* box-shadow: rgb(99, 252, 239)  1
  px 1px; */
    background-color: green;
    opacity: 1;
  }

  .horizontal:nth-child(1) {
    top: 10vh;
  }

  .horizontal:nth-child(2) {
    top: 11vh;
  }
  .horizontal:nth-child(3) {
    top: 50vh;
  }
  .horizontal:nth-child(4) {
    top: 75vh;
  }
  nav ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  nav {
    background-color: white;
    height: 5rem;
  }
  .vertical:nth-child(1) {
    left: 4.5vw;
  }
  .vertical:nth-child(2) {
    left: 15vw;
  }
  .vertical:nth-child(3) {
    left: 35vw;
  }
  .vertical:nth-child(4) {
    right: 45vw;
  }
  .vertical:nth-child(5) {
    right: 35vw;
  }
  .vertical:nth-child(6) {
    right: 5vw;
  }
  .vertical:nth-child(7) {
    right: 4.5vw;
  }
  .vertical:nth-child(8) {
    right: 4vw;
  }
`;

export const Background = () => {
  if (typeof window === 'object') {
    const pos = document.documentElement;
    pos.addEventListener('mousemove', (e) => {
      pos.style.setProperty('--x', +e.clientX + 'px');
      pos.style.setProperty('--y', +e.clientY + 'px');
    });
  }
  return (
    <>
      <BG>
        <div className="lines-wrap">
          <div className="lines white">
            <div className="horizontals">
              <div className="horizontal"></div>
              <div className="horizontal"></div>
              <div className="horizontal"></div>
            </div>
            <div className="verticals">
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
            </div>
          </div>

          <div className="lines blue">
            <div className="horizontals">
              <div className="horizontal"></div>
              <div className="horizontal"></div>
              <div className="horizontal"></div>
              <div className="horizontal"></div>
            </div>
            <div className="verticals">
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
            </div>
          </div>
        </div>
      </BG>
    </>
  );
};
