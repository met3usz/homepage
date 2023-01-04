{
  const button = document.querySelector('.js-button');
  const header = document.querySelector('.header');
  const main = document.querySelector('.main');
  const article = document.querySelector('.article');
  const footer = document.querySelector('.footer');
  const buttonSpan = document.querySelector('.js-buttonSpan');

  const spanButtonChange = () => {
    header.classList.contains('bright')
      ? (buttonSpan.innerText = 'Wyłącz')
      : (buttonSpan.innerText = 'Włącz');
  };

  button.addEventListener('click', () => {
    header.classList.toggle('bright');
    main.classList.toggle('bright');
    article.classList.toggle('bright');
    footer.classList.toggle('bright');

    spanButtonChange(header);
  });
}
