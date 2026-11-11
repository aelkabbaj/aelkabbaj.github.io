// On a Mac, show the search shortcut as ⌘K (instead of Ctrl+K) in the search button's tooltip
document.addEventListener("readystatechange", () => {
  if (document.readyState === "interactive") {
    let isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
    let searchToggle = document.querySelector("#search-toggle");
    if (searchToggle && isMac) {
      searchToggle.title = "Search (⌘K)";
    }
  }
});
