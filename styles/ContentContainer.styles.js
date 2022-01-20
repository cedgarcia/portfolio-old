import styled from 'styled-components';

export const ContentWrap = styled.div`
  /* height: 100vh;
  color: white;
  font-size: 5rem;
  z-index: 200; */
  padding: 4rem;
  .background {
    z-index: 100;
    /* margin: 4rem; */
    /* padding: 4rem; */
    height: 70vh;
    width: 70vw;
    background-color: rgb(22, 22, 22);
  }
  .text {
    display: flex;
    align-self: center;
    justify-self: center;
    position: relative;
    /* padding: 3rem; */
    z-index: 1000;
    font-size: 5rem;
  }

  img {
    position: relative;
    z-index: 100;
  }
`;
