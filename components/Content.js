import styled from 'styled-components';

const ContentWrap = styled.div`
  height: 100vh;
  color: white;
  z-index: -200;
  img {
    z-index: -100;
  }
`;
export const Content = () => {
  return (
    <ContentWrap>{/* <img src="/images/logo.png" alt="hero" /> */}</ContentWrap>
  );
};
// #ffa31a
// #808080
// #2892929
// #1b1b1b
