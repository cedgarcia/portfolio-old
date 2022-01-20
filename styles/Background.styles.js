import styled from 'styled-components';
import { Horizontal, Vertical, Hide } from '../styles/animations';

export const BG = styled.div`
  position: fixed;
  z-index: 0;
  .lines {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  .horizontal {
    height: 1px;
    width: 100vw;
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
`;

export const Desktop = styled.div`
  z-index: -4;
  @media (max-width: 768px) {
    display: none;
  }
  .horizontal:nth-child(1) {
    top: 10vh;
    animation-duration: 1s;
  }
  .horizontal:nth-child(2) {
    top: 40vh;
    animation-duration: 1.5s;
  }
  .horizontal:nth-child(3) {
    top: 70vh;
    animation-duration: 2s;
  }

  .vertical:nth-child(1) {
    right: 10vw;
    animation-duration: 1s;
  }
  .vertical:nth-child(2) {
    left: 30vw;
    animation-duration: 1s;
  }
  .vertical:nth-child(3) {
    left: 50vw;
  }
  .vertical:nth-child(4) {
    left: 95vw;
  }
`;
