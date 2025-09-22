const gradientTextTitle = function () {
  const p = document.createElement('p');
  const span = document.createElement('span');

  p.setAttribute('class', 'hero-title__overlay');
  span.style.display = 'inline-block';
  span.style.position = 'relative';

  p.appendChild(span);

  console.log(p);

  return 'still fixing';
};

export default gradientTextTitle();
