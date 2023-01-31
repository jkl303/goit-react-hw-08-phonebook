import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  line-height: 1.5;
 
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
button {
  color: whitesmoke;
  font-size: 18px;
  font-weight: 400;
  background-color: darkcyan;
  border-color: darkcyan;
  border-radius: 4px;
  transition: border-color 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  :hover {cursor: pointer;
    border-color: #da5d05;
  }
}
ul,
ol {
  margin: 0;
  padding: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;
