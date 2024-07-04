if (window.location.hostname === "www.kleinanzeigen.de") {
  const observer = new MutationObserver((mutationList) => {
    for (const mutation of mutationList) {
      /**
       * Deliberately not using querySelectorAll because we only need to remove
       * one to trigger this mutation effect again, which has the effect of
       * looping over all children.
       */
      const ad = document.querySelector(
        [
          ".j-liberty-wrapper", // Search page leading ads
          ".ad-listitem:not(:has(article))", // Inline search-result ads
          "[data-liberty-position-name='home-billboard']", // Header ads
          "[data-liberty-position-name='srps-btf-billboard']", // Footer ads
          ".site-base--left-banner--full", // Left margin ads
          ".site-base--right-banner--full", // Right margin ads
        ].join(", ")
      );
      if (ad) {
        ad.remove();
      }
    }
  });

  const body = document.querySelector("body");
  if (body) {
    observer.observe(body, {
      attributes: false,
      childList: true,
      subtree: true,
    });
  }
}
