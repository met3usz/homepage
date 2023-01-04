{
  const button = document.querySelector('.js-button');
  const header = document.querySelector('.header');
  const main = document.querySelector('.main');
  const footer = document.querySelector('.footer');
  const buttonSpan = document.querySelector('.js-buttonSpan');

  button.addEventListener('click', () => {
    header.classList.toggle('bright');
    main.classList.toggle('bright');
    footer.classList.toggle('bright');

    header.classList.contains('bright')
      ? (buttonSpan.innerText = 'Wyłącz')
      : (buttonSpan.innerText = 'Włącz');
  });
}
