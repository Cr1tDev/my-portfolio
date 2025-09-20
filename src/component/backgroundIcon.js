import IconPath from './svgIconPath';

const getBackgroundIcon = function () {
  const svgProperties = {
    react: [
      'xmlns="http://www.w3.org/2000/svg"',
      'viewBox="0 0 24 24"',
      'role="img"',
      'height="1em"',
      'width="1em"',
      'stroke="currentColor"',
      'fill="currentColor"',
      'stroke-width="0"',
    ],
    tailwind: [
      'xmlns="http://www.w3.org/2000/svg"',
      'viewBox="0 0 48 48"',
      'role="img"',
      'height="1em"',
      'width="1em"',
    ],
    javascript: [
      'xmlns="http://www.w3.org/2000/svg"',
      'viewBox="0 0 24 24"',
      'role="img"',
      'height="1em"',
      'width="1em"',
    ],
    sass: [
      'xmlns="http://www.w3.org/2000/svg"',
      'viewBox="0 0 24 24"',
      'role="img"',
      'width="1em"',
      'height="1em"',
      'fill="currentColor"',
    ],
    vercel: [
      'stroke="currentColor"',
      'fill="currentColor"',
      'stroke-width="0"',
      'role="img"',
      'viewBox="0 0 24 24"',
      'height="1em"',
      'width="1em"',
      'xmlns="http://www.w3.org/2000/svg"',
    ],
  };

  const getProperty = function (property) {
    return property.join(' ');
  };

  const iconSVGHTML = `
      <svg class="logo-react" ${getProperty(svgProperties.react)}>${
    IconPath.react
  }</svg>
      <svg class="logo-tailwind" ${getProperty(svgProperties.tailwind)}>${
    IconPath.tailwind
  }</svg>
      <svg class="logo-javascript" ${getProperty(svgProperties.javascript)}>${
    IconPath.javascript
  }</svg>
      <svg class="logo-sass" ${getProperty(svgProperties.sass)}>${
    IconPath.sass
  }</svg>
      <svg class="logo-vercel" ${getProperty(svgProperties.vercel)}>${
    IconPath.vercel
  }</svg>
      
    `;
  return iconSVGHTML;
};

export default getBackgroundIcon;
