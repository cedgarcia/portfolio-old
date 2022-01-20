import React, { useEffect } from 'react';
import { BG, Desktop } from '../styles/Background.styles';

export const BackgroundContainer = (props) => {
  if (typeof window === 'object') {
    const pos = document.documentElement;
    pos.addEventListener('mousemove', (e) => {
      pos.style.setProperty('--x', +e.clientX + 'px');
      pos.style.setProperty('--y', +e.clientY + 'px');
    });
  }
  // Desktop
  const Dhorizontals = ['', '', '', ''];
  const Dverticals = ['', '', '', ''];

  return (
    <BG>
      <Desktop>
        <div className="lines">
          <div>
            {Dhorizontals.map((index, i) => {
              return <div key={index + i} className="horizontal"></div>;
            })}
          </div>
          <div>
            {Dverticals.map((index, i) => {
              return <div key={index + i} className="vertical"></div>;
            })}
          </div>
        </div>

        <div className="lines green">
          <div>
            {Dhorizontals.map((index, i) => {
              return <div key={index + i} className="horizontal"></div>;
            })}
          </div>
          <div>
            {Dverticals.map((index, i) => {
              return <div key={index + i} className="vertical"></div>;
            })}
          </div>
        </div>
      </Desktop>
    </BG>
  );
};
