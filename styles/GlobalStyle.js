import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root{
  --black:#000000;
  --gray:#212121;
  --white:#FFFFFF;
  --green:#1FEA00;
  --darkGreen:#27A102;

}
::-webkit-scrollbar {
  display: none;
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
  font-family: 'Orbitron', sans-serif;
}
body {
  background: var(--black);
  color:var(--white); 
}
h1{
  font-family: 'Audiowide', cursive;
}
li {
list-style:none;
}
a{
  text-decoration:none;
  color:var(--white);
}
img {
  width:100%;
}
`;
