const gradientTextTitle = function () {
  const titleContainer = document.createElement('p');
  const spanContainer = document.createElement('span');
  const titleMain = document.createElement('span');
  const titleInvi = document.createElement('span');

  titleContainer.setAttribute('class', 'hero-title__overlay');
  spanContainer.setAttribute(
    'style',
    'display: inline-block position: relative'
  );
  titleMain.setAttribute('class', 'custom-gradient-text');
  titleInvi.style.visibility = 'hidden';

  titleMain.textContent = 'Web Developer';
  titleInvi.textContent = 'Web Developer';

  titleContainer.appendChild(spanContainer);
  spanContainer.appendChild(titleMain);
  spanContainer.appendChild(titleInvi);

  console.log(titleContainer);

  return titleContainer;
};

export default gradientTextTitle();
