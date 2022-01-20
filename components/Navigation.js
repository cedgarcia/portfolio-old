import { NavWrap, NavLogo, NavList } from '../styles/Navigation.styles';
import { useState } from 'react';
import { Burger } from './Burger';
export const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <NavWrap>
      <NavLogo open={open} onClick={() => setOpen(!open)}>
        <div className="arrow prev"></div>
        <div className="burger" open={open} onClick={() => setOpen(!open)}>
          <div className="lines"></div>
          <div className="lines"></div>
          <div className="lines"></div>
        </div>{' '}
        <div className="slash"></div>
        <div className="arrow next"></div>
      </NavLogo>
      <NavList>
        <div className="link">Projects</div>
        <div className="link">Projects</div>
        <div className="link">Projects</div>
      </NavList>
      <NavLogo>
        <div className="arrow prev"></div>

        <div className="arrow next"></div>
      </NavLogo>
    </NavWrap>
  );
};
