function toggleMode() {
  // (1) toggle dark e light mode
  const html = document.documentElement;

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light");
  // } else {
  //   html.classList.add("light");
  // }

  html.classList.toggle('light');

  // (2) mudar src de acordo com o theme
  const avatar = document.querySelector('#profile img');
  if (html.classList.contains('light')) {
    avatar.setAttribute('src', './assets/avatar-light.png');
  } else {
    avatar.setAttribute('src', './assets/avatar.png');
  }

  // (3) mudar o alt de acordo com o theme
  if (html.classList.contains('light')) {
    avatar.setAttribute('alt', 'Light Mode');
  } else {
    avatar.setAttribute('alt', 'Dark Mode');
  }
}
