import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavWrap } from '../styles/Navigation.styles';
const navLinks = [
  { title: 'Works', path: '/' },
  { title: 'About me', path: '/about' },
  { title: 'Contact', path: '/contact' },
];

export const Navigation = () => {
  const router = useRouter();
  return (
    <NavWrap>
      <ul>
        {navLinks.map((link) => (
          <li key={link.title}>
            <Link href={link.path} passHref>
              <a className={router.pathname === link.path ? 'activeLink' : ''}>
                {link.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </NavWrap>
  );
};
