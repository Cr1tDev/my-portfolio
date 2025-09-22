import getBackgroundIcon from '../component/backgroundIcon';
import gradientTextTitle from '../component/gradientText';

const header = function () {
  return `
  <header class="hero-container">
    <div class="hero-container__overlay">
      ${getBackgroundIcon()}
    </div>  
    <div class="hero-container__box">
      <div class="hero-container__title">
        ${gradientTextTitle}
      </div>
    </div>
  </header>`;
};

export default header();
