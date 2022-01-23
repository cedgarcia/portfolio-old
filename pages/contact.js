import { BackgroundContainer } from '../components/BackgroundContainer';
import { Navbar } from '../components/Navbar';

import styled, { keyframes } from 'styled-components';
const headingReveal = keyframes`

0%{
    transform: translateY(100%)}
  100%{
    transform: translateY(0)}

`;

const ContactWrap = styled.div`
  padding: 20rem 20rem;

  .heading {
    margin: 0 20px;
    overflow: hidden;
    h1 {
      transform: translateY(100%);
      animation: ${headingReveal} 1.7s cubic-bezier(1, 0, 0.3, 0.9) forwards;
    }
  }
  h1 {
    font-size: 10rem;
    text-transform: uppercase;
    z-index: 5000;
  }
`;
export default function contact() {
  return (
    <div>
      <Navbar />
      <BackgroundContainer />
      <ContactWrap>
        <div className="heading">
          <h1>Get in touch</h1>
        </div>
      </ContactWrap>
    </div>
  );
}
