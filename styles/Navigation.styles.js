import styled from 'styled-components';

export const NavWrap = styled.nav`
  position: fixed;
  /* right: 5vw; */
  padding: 5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  z-index: 100;
  /* top: 5vh; */
  .arrow {
    display: inline-block;
    position: relative;
    width: 2rem;
    height: 2rem;
    background: transparent;
    text-indent: -9999px;
    border-top: 3px solid var(--white);
    border-left: 3px solid var(--white);
    /* border-radius: 8px; */
    transition: all 250ms ease-in-out;
    text-decoration: none;
    color: transparent;
  }
  .prev {
    /* position: absolute; */
    /* right: 2.7rem; */
    /* position: relative; */
    transform: rotate(-45deg);
  }
  .next {
    /* position: ${({ open }) => (open ? 'relative' : 'absolute')}; */
    /* position: absolute;
    left: 6rem; */
    /* width: ${({ open }) => (open ? '0px' : '30px')}; */
    /* left: 2.7rem; */
    /* position: absolute; */
    /* left: 2.7rem; */
    transform: rotate(135deg);
  }
`;

export const NavLogo = styled.div`
  border-radius: ${({ open }) => (open ? '50%' : '0%')};
  transition: 1s;
  cursor: pointer;
  color: black;
  /* padding: 0 1rem; */
  background: var(--green);
  height: 10rem;
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .burger {
    cursor: pointer;
    .lines {
      height: 3px;
      width: 30px;
      background: var(--white);
      margin: 6px 0;
      transition: 0.4s;
    }
    .lines:nth-child(1) {
      width: ${({ open }) => (open ? '0px' : '30px')};
      transition-delay: 0s;
    }
    .lines:nth-child(2) {
      width: ${({ open }) => (open ? '0px' : '25px')};
      transition-delay: 0.2s;
    }
    .lines:nth-child(3) {
      width: ${({ open }) => (open ? '0px' : '20px')};
      transition-delay: 0.3s;
    }
  }
  .slash {
    position: absolute;
    right: 2.6rem;
    background: var(--white);
    height: 4.5rem;
    transition: 0.5s;
    height: ${({ open }) => (open ? '0px' : '4.5rem')};

    transform: rotate(15deg);
    width: 3px;
  }
  /* position: absolute; */
`;
export const NavList = styled.div`
  writing-mode: vertical-rl;
  text-orientation: sideways;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  .link {
    font-size: 2rem;
  }
`;
