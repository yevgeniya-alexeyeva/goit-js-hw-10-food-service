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
    return;
  }
  refs.body.classList.add(Theme.LIGHT);
  localStorage.setItem('theme', 'light');
};
checkSavedTheme();

refs.checkBox.addEventListener('change', () => {
  if (refs.body.classList.contains(Theme.DARK)) {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', 'light');
    return;
  }
  if (refs.body.classList.contains(Theme.LIGHT))
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
  localStorage.setItem('theme', 'dark');
});
