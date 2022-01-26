import { Intro } from '../Intro';
import { Button } from '../Button';

import { ImageContainer } from '../../styles/About.styles';

export const AboutContent = () => {
  return (
    <div>
      <Intro
        sub1="Hello,"
        sub2="I'm Cedrick Garcia"
        sub3="Front end Developer"
      />
      <ImageContainer>
        <div className="img-container">
          <img src="/images/me.jpg" alt="" />
          <div className="overlay"></div>
        </div>
      </ImageContainer>
      <Button text="Skills" />
    </div>
  );
};
