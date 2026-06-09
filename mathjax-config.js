const mathjaxBase = chrome.runtime.getURL('mathjax');

console.log('[Slack MathJax] MathJax base:', mathjaxBase);

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
    typeset: false,
    ready: () => {
      console.log('[Slack MathJax] startup.ready called');
      MathJax.startup.defaultReady();
      console.log('[Slack MathJax] MathJax is ready');
    }
  }
};
