import getBackgroundIcon from '../component/backgroundIcon';

const header = function () {
  return `
  <header class="hero-container">
    <div class="hero-container__overlay">
      ${getBackgroundIcon()}
    </div>  
  </header>`;
};

export default header();
