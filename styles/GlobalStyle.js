import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`


:root{
  --black:#000000;
  --gray:#212121;
  /* --gray:#CCCCCC; */
  --white:#FFFFFF;
  --green:#1DB954;
}


*,
*::after,
*::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html {
  font-size: 62.5%;
  overflow-x:hidden;

}
body {
  background: var(--black);
  color:var(--white);
  
}
img {
  width:100%;
}


`;
