const mathjaxBase = chrome.runtime.getURL('mathjax');

window.MathJax = {
  loader: {
    paths: {
      mathjax: mathjaxBase
    },
    load: [
      '[tex]/bussproofs'
    ]
  },

  tex: {
    packages: {
      '[+]': [
        'bussproofs'
      ]
    },

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
