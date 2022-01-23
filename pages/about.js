import { Navbar } from '../components/Navbar';
import { BackgroundContainer } from '../components/BackgroundContainer';
import { AboutWrap } from '../styles/About.styles';
export default function about() {
  return (
    <div>
      <>
        <Navbar />
        <BackgroundContainer />
        <AboutWrap>
          <div className="text-container">Ced</div>
          <div className="img-container">
            <img
              src="https://www.unilad.co.uk/wp-content/uploads/2016/10/54645UNILAD-imageoptim-Leonardo-DiCaprio.jpg"
              alt=""
            />
            <div className="overlay"></div>
          </div>
        </AboutWrap>
      </>
    </div>
  );
}
