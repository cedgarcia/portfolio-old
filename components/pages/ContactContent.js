import Link from 'next/link';
import { Button } from '../Button';

import { Form } from '../Form';
import styled from 'styled-components';
const ContactWrap = styled.div`
  position: relative;
  padding: 0 8rem;
  /* top: 90%; */
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  z-index: 300;
  height: 16rem;
  position: absolute;
  transition: 0.5s;
  /* z-index: 3; */
  h1 {
    font-size: 3rem;
  }
`;

export const ContactContent = () => {
  return (
    <ContactWrap>
      <div className="heading">
        <h1>Get in Touch</h1>
      </div>

      <Form />
    </ContactWrap>
  );
};
