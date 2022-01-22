import { BackgroundContainer } from '../components/BackgroundContainer';
import { Navigation } from '../components/Navigation';
import { AboutWrap } from '../styles/About.styles';
export default function about() {
  return (
    <div>
      <>
        <Navigation />
        <BackgroundContainer />
        <AboutWrap>
          <div className="heading">
            <h1>Ced</h1>
            <img className="content" src="/images/logo.png" />
          </div>
        </AboutWrap>
      </>
    </div>
  );
}
