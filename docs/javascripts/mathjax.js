window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  },
  startup: {
    // The navigation subscription handles the initial page as well.
    typeset: false,
    ready() {
      MathJax.startup.defaultReady();
      MathJax.startup.promise.then(() => {
        let typesetting = Promise.resolve();
        document$.subscribe(() => {
          // Serialize updates when readers navigate while typesetting is active.
          typesetting = typesetting.then(() => {
            MathJax.startup.output.clearCache();
            MathJax.typesetClear();
            MathJax.texReset();
            return MathJax.typesetPromise();
          }).catch(error => {
            console.error("MathJax typesetting failed:", error);
          });
        });
      });
    }
  }
};
