import { Intro } from './Intro';
import { Projects } from './Projects';
import { BackgroundContainer } from './BackgroundContainer';
export const ContentContainer = () => {
  return (
    <div>
      <Intro />
      <Projects />
      <Projects />
      <BackgroundContainer>
        <Projects />
      </BackgroundContainer>
    </div>
  );
};
