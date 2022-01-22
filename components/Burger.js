import styled from 'styled-components';
import { useState } from 'react';
const BurgerWrap = styled.div`
  /* position: relative; */
  width: 5rem;
  height: 5rem;
  background: var(--white);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  .lines {
    left: 0;
    height: 3px;
    width: 30px;
    background: var(--green);
    margin: 6px 0;
    transition: 0.6s;
    &:hover {
      background: var(--white);
    }
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
    <BurgerWrap open={open} onClick={() => setOpen(!open)}>
      <div className="burger" open={open} onClick={() => setOpen(!open)}>
        <div className="lines"></div>
        <div className="lines"></div>
        <div className="lines"></div>
      </div>
    </BurgerWrap>
  );
};
