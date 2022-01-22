import styled, { keyframes } from 'styled-components';

const headingReveal = keyframes`

0%{
    transform: translateY(100%)}
  100%{
    transform: translateY(0)}

`;

export const AboutWrap = styled.div`
  .heading {
    margin: 0 20px;
    overflow: hidden;

    .content {
      transform: translateY(100%);
      animation: ${headingReveal} 1.7s cubic-bezier(1, 0, 0.3, 0.9) forwards;
    }
  }
`;
