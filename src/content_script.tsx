if (window.location.hostname === "www.kleinanzeigen.de") {
  const observer = new MutationObserver((mutationList) => {
    for (const mutation of mutationList) {
      /**
       * Deliberately not using querySelectorAll because we only need to remove
       * one to trigger this mutation effect again, which has the effect of
       * looping over all children.
       */
      const ad = document.querySelector(
        ".j-liberty-wrapper, .ad-listitem:not(:has(article))"
      );
      if (ad) {
        ad.remove();
      }
    }
  });

  const siteContent = document.querySelector("#site-content");
  if (siteContent) {
    observer.observe(siteContent, {
      attributes: false,
      childList: true,
      subtree: true,
    });
  }
}
