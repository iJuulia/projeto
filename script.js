function toggleMode() {
  // (1) toggle dark e light mode
  const html = document.documentElement;

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light");
  // } else {
  //   html.classList.add("light");
  // }

  html.classList.toggle('light');
}
