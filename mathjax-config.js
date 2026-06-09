window.MathJax = {
  tex: {
    inlineMath: [
      ['\\(', '\\)']
    ],
    displayMath: [
      ['\\[', '\\]']
    ],
    processEscapes: true
  },

  options: {
    skipHtmlTags: [
      'script',
      'noscript',
      'style',
      'textarea',
      'pre',
      'code'
    ],
    ignoreHtmlClass: 'slack-mathjax-ignore',
    processHtmlClass: 'slack-mathjax-process'
  },

  svg: {
    fontCache: 'local'
  },

  startup: {
    typeset: false
  }
};
