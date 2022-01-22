import styled from 'styled-components';
const ProjectsWrap = styled.div`
  font-size: 4rem;
  padding: 3rem;
  background-color: #161616;
  margin: 2rem;
  width: 50vw;
  div {
    position: relative;
  }
`;
export const Projects = () => {
  return (
    <ProjectsWrap>
      <div>
        Jump to navigationJump to search Welcome to Wikipedia, the free
        encyclopedia that anyone can edit. 6,441,693 articles in English The
        artsBiographyGeographyHi storyMathematics ScienceSocietyTechnologyAll
      </div>
    </ProjectsWrap>
  );
};
