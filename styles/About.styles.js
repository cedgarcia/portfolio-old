import styled, { keyframes } from 'styled-components';

const headingReveal = keyframes`

0%{
    transform: translateY(100%)}
  100%{
    transform: translateY(0)}

`;

const translate = keyframes` {
  from {
        transform: translate(-400px);

  }
    to {
      transform: translate(0px);
    }
  }`;

const pic = keyframes`{
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    51% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }`;

const anim = keyframes` {
    0% {
      transform: scaleX(0);
      transform-origin: 0% 50%;
    }
    50% {
      transform: scaleX(1);
      transform-origin: 0% 50%;
    }
    51% {
      transform: scaleX(1);
      transform-origin: 100% 50%;
    }
    100% {
      transform: scaleX(0);
      transform-origin: 100% 50%;
    }
  }`;

export const AboutWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7rem;
  .img-container {
    width: 400px;
    height: 200px;
    border-radius: 2px;
    overflow: hidden;

    animation: ${translate} 2s;
    animation-fill-mode: forwards;
    z-index: -3000;
  }
  .img-container img {
    filter: grayscale(100%);
    width: 120%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(1.6);
    animation: ${pic} 2s;
    transform-origin: 50% 50%;
    animation-fill-mode: forwards;
  }
  .img-container .overlay {
    width: 100%;
    height: 100%;
    background: var(--green);
    position: absolute;
    transform: scaleX(0);
    transform-origin: 0% 50%;
    animation: ${anim} 2s;
  }
`;
