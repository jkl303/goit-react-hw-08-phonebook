import { Helmet } from 'react-helmet-async';
import { TitleStyled } from './Title.styled';

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <TitleStyled>
        Please, regist or log in to start working with your contacts!
      </TitleStyled>
    </div>
  );
}
