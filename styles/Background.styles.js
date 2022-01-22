import styled from 'styled-components';
import { Horizontal, Vertical, Hide } from '../styles/animations';
export const BG = styled.div`
  position: fixed;
  z-index: 0;
  height: 100vh;
  width: 100vw;

  .horizontal {
    height: 1px;
    width: 100vw;
    /* right: 0; */
    animation: ${Horizontal} linear forwards;
  }
  .vertical {
    width: 1px;
    height: 100vh;
    animation: ${Vertical} linear forwards;
  }
  .lines .horizontal,
  .lines .vertical {
    background-color: var(--gray);
    position: absolute;
  }
  .green {
    opacity: 0;
    animation: ${Hide} 4s linear forwards;
  }
  .lines.green .horizontal,
  .lines.green .vertical {
    background-color: var(--green);
  }
  .lines.green {
    z-index: 2;
    clip-path: circle(8rem at var(--x) var(--y));
  }
  .horizontal:nth-child(1) {
    top: 7rem;
    animation-duration: 0.75s;
  }
  .horizontal:nth-child(2) {
    /* left: 0; */
    top: 41vh;
    animation-duration: 1s;
  }
  .horizontal:nth-child(3) {
    top: 70vh;
    animation-duration: 1.25s;
  }

  .vertical:nth-child(1) {
    /* bottom: 0; */
    left: 7rem;
    animation-duration: 0.5s;
  }
  /* .vertical:nth-child(2) {
    left: 21.5vw;
    animation-duration: 1s;
  }
  .vertical:nth-child(3) {
    left: 39.3vw;
    animation-duration: 1.25s;
  }
  .vertical:nth-child(4) {
    right: 42.70833vw;
    animation-duration: 1.5s;
  }
  .vertical:nth-child(5) {
    right: 19vw;
    animation-duration: 1.75s;
  }
  .vertical:nth-child(6) {
    right: 16vw;
    animation-duration: 2s;
  } */
  .vertical:nth-child(7) {
    right: 7rem;
    animation-duration: 2.5s;
  }
`;

export const Desktop = styled.div`
  z-index: -4;
  @media (max-width: 768px) {
    /* display: none; */
  }
`;
