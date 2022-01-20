import styled from 'styled-components';
import { useState } from 'react';
const BurgerWrap = styled.div`
  /* position: absolute; */
  /* left: 5rem; */
  cursor: pointer;
  .lines {
    height: 3px;
    width: 30px;
    background: var(--white);
    margin: 6px 0;
    transition: 0.6s;
  }
  .lines:nth-child(1) {
    width: ${({ open }) => (open ? '0px' : '30px')};
  }
  .lines:nth-child(2) {
    width: ${({ open }) => (open ? '0px' : '25px')};
  }
  .lines:nth-child(3) {
    width: ${({ open }) => (open ? '0px' : '20px')};
  }
`;

export const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <div  className='burger' open={open} onClick={() => setOpen(!open)}>
      <div className="lines"></div>
      <div className="lines"></div>
      <div className="lines"></div>
    </div>
  );
};
