(function () {
  try {
    var stored = localStorage.getItem("drawboard-theme") || localStorage.getItem("scelerity-theme");
    var theme =
      stored ||
      (window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark");
    var root = document.documentElement;
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    var locale = localStorage.getItem("drawboard-locale") || localStorage.getItem("scelerity-locale");
    if (locale === "es" || locale === "en") root.lang = locale;
  } catch (_e) {
    /* localStorage blocked — default theme from HTML applies */
  }
})();
