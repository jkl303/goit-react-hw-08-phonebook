import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import { variables } from './variables';
import { animations } from './animations';

export const GlobalStyle = createGlobalStyle`

${variables}
${animations}

body {
  line-height: 1.5;
 font-family: 'Rubik', sans-serif;
}

h1,
h2,
h3,
p {
  margin: 0;
  color: var(--title);
}

a {text-decoration: none;}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;
