import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const NavWrap = styled.nav`
  position: absolute;
  left: 0;
  right: 0;
  padding: 8rem 3.5rem;
  height: 100%;
  z-index: 1000;
  writing-mode: vertical-rl;
  text-orientation: sideways;
  display: flex;
  justify-content: space-between;
  .activeLink {
    filter: brightness(150%);
    color: var(--green);
    &::after {
      transition: 2s;
      content: '';
      position: absolute;
      top: 0;
      bottom: -3px;
      background: var(--green);
      right: auto;
      height: 100%;
      width: 1px;
    }
  }
`;
const NavLink = styled.div`
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
    bottom: 0;
    left: 0;
    background: white;
    width: 1px;
    height: 0;
    transition: height 0.4s ease-out;
  }
  a:active::after,
  a:focus::after,
  a:hover::after {
    top: 0;
    bottom: auto;
    height: 100%;
  }
`;

const navLinks = [
  { title: 'Works', path: '/' },
  { title: 'About me', path: '/about' },
  { title: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const router = useRouter();
  return (
    <NavWrap>
      {navLinks.map((link) => (
        <NavLink key={link.title}>
          <Link href={link.path} passHref>
            <a className={router.pathname === link.path ? 'activeLink' : ''}>
              {link.title}
            </a>
          </Link>
        </NavLink>
      ))}
    </NavWrap>
  );
};
