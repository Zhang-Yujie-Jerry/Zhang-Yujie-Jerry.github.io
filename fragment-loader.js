(function () {
  const target = document.querySelector("[data-fragment]");
  if (!target) return;
  fetch(target.dataset.fragment, { cache: "no-store" })
    .then((response) => {
      if (!response.ok) throw new Error("Unable to load page content");
      return response.text();
    })
    .then((html) => { target.innerHTML = html; })
    .catch(() => { target.innerHTML = "<p>Preview content could not be loaded.</p>"; });
})();
