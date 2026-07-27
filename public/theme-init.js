(function () {
  try {
    var stored = localStorage.getItem("scelerity-theme");
    var theme =
      stored ||
      (window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark");
    document.documentElement.dataset.theme = theme;
    var locale = localStorage.getItem("scelerity-locale");
    if (locale === "es" || locale === "en") document.documentElement.lang = locale;
  } catch (_e) {
    /* localStorage blocked — default theme from HTML applies */
  }
})();
