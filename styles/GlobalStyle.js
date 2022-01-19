import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`


:root{
  --black:#000000;
  --gray:#0E0E0E;
  --white:#FFFFFF;
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

}
body {
  background: var(--black);
  
}

`;
