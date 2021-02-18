// const { registerDecorator } = require('handlebars');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  checkBox: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

const checkSavedTheme = () => {
  if (localStorage.getItem('theme') === 'dark') {
    refs.checkBox.setAttribute('checked', 'true');
    refs.body.classList.add(Theme.DARK);
  }
};
checkSavedTheme();

refs.checkBox.addEventListener('change', () => {
  if (refs.body.classList.contains(Theme.DARK)) {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
    localStorage.removeItem('theme');
    return;
  }
  refs.body.classList.add(Theme.DARK);
  localStorage.setItem('theme', 'dark');
  if (refs.body.classList.contains(Theme.LIGHT))
    refs.body.classList.remove(Theme.LIGHT);
});
