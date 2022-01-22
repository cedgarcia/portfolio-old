import styled from 'styled-components';

export const NavWrap = styled.nav`
  position: fixed;
  top: 7rem;
  left: 0;
  right: 0;
  padding: 0 8rem;
  /* bottom: 0; */

  width: 100vw;
  /* height: 10rem; */
  /* background-color: red; */
  z-index: 1000;

  .activeLink {
    &::after {
      transition: 2s;
      content: '';
      position: absolute;
      left: 0;
      bottom: -2px;
      background: white;
      height: 1px;
      right: auto;
      width: 100%;
    }
  }
  ul {
    display: flex;
    justify-content: space-between;
  }
  a {
    font-size: 1.5rem;
    position: relative;
    overflow: hidden;
    letter-spacing: 2px;

    display: inline;
    position: relative;
    overflow: hidden;
  }
  a::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    background: white;
    width: 0;
    height: 1px;

    transition: width 0.4s ease-out;
  }
  a:active::after,
  a:focus::after,
  a:hover::after {
    left: 0;
    right: auto;
    width: 100%;
  }
`;

export const NavList = styled.div`
  z-index: 1000;
  display: flex;
  /* height: 7rem; */
  font-size: 3rem;
  /* a {
    position: relative;
    overflow: hidden;

    display: inline;
    position: relative;
    overflow: hidden;
  }
  a::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    background: white;
    width: 0;
    height: 3px;

    transition: width 0.4s ease-out;
  }
  a:active::after,
  a:focus::after,
  a:hover::after {
    left: 0;
    right: auto;
    width: 100%;
  } */
`;
