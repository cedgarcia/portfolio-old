import styled, { keyframes } from 'styled-components';
import { BackgroundContainer } from './BackgroundContainer';
const subTextReveal = keyframes`
    100% {
      color: white;
    }
`;
const subHeadReveal = keyframes`

    50% {
      width: 100%;
      left: 0;
    }
    100% {
      left: 100%;
      width: 0%;
    }`;

const headingReveal = keyframes`

0%{
    transform: translateY(100%)}
  100%{
    transform: translateY(0)}

`;

const IntroWrap = styled.div`
  user-select: none;
  display: flex;
  align-items: center;
  height: 100vh;

  .sub-heading {
    display: flex;
    flex-direction: column;
    h2 {
      position: relative;
      color: transparent;
      animation: ${subTextReveal} 0s ease forwards;
      display: inline-block;
    }
    h2 span {
      content: '';
      position: absolute;
      height: 100%;
      width: 0;
      left: 0;
      top: 0;
      background: var(--black);
      animation: ${subHeadReveal} 1s ease forwards;
      animation-delay: 0.5s;
    }
  }

  h2:nth-child(1) {
    animation-delay: 1s;
  }
  h2:nth-child(2) {
    animation-delay: 1s;
  }
  h2:nth-child(3) {
    animation-delay: 1.5s;
  }

  h2:nth-child(1) span {
    animation-delay: 0.5s;
  }
  h2:nth-child(2) span {
    /* animation-direction: reverse; */
    animation-delay: 0.5s;
  }
  h2:nth-child(3) span {
    animation-delay: 1s;
  }

  .heading {
    margin: 0 20px;
    overflow: hidden;
    h1 {
      transform: translateY(100%);
      animation: ${headingReveal} 1.7s cubic-bezier(1, 0, 0.3, 0.9) forwards;
    }
  }
`;

export const Intro = () => {
  return (
    <IntroWrap>
      <div className="heading">
        <h1>Ced</h1>
      </div>
      <div className="sub-heading">
        <h2>
          Coder <span></span>
        </h2>
        <h2>
          Explorer<span></span>
        </h2>
        <h2>
          Developer <span></span>
        </h2>
      </div>
    </IntroWrap>
  );
};
