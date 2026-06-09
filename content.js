(() => {
  const PROCESSED_CLASS = 'slack-mathjax-processed';
  const PROCESS_CLASS = 'slack-mathjax-process';

  const MESSAGE_SELECTORS = [
    '[data-qa="message-text"]',
    '.c-message_kit__text',
    '.p-rich_text_section',
    '.p-rich_text_block'
  ];

  let rendering = false;
  let pending = false;

  function containsLatex(text) {
    if (!text) return false;

    return (
      (text.includes('\\(') && text.includes('\\)')) ||
      (text.includes('\\[') && text.includes('\\]'))
    );
  }

  function isInsideIgnoredArea(element) {
    return Boolean(
      element.closest('pre, code, textarea, script, style')
    );
  }

  function findCandidateElements(root = document) {
    const elements = [];

    for (const selector of MESSAGE_SELECTORS) {
      root.querySelectorAll(selector).forEach((el) => {
        if (isInsideIgnoredArea(el)) return;
        if (el.classList.contains(PROCESSED_CLASS)) return;

        const text = el.innerText || el.textContent || '';
        if (!containsLatex(text)) return;

        elements.push(el);
      });
    }

    return elements;
  }

  async function renderCandidates() {
    if (rendering) {
      pending = true;
      return;
    }

    rendering = true;

    try {
      const candidates = findCandidateElements();

      if (candidates.length > 0) {
        for (const el of candidates) {
          el.classList.add(PROCESSED_CLASS);
          el.classList.add(PROCESS_CLASS);
        }

        if (window.MathJax && window.MathJax.typesetPromise) {
          await window.MathJax.typesetPromise(candidates);
        } else {
          console.warn('MathJax is not ready yet.');
        }
      }
    } catch (error) {
      console.error('Slack MathJax rendering failed:', error);
    } finally {
      rendering = false;

      if (pending) {
        pending = false;
        setTimeout(renderCandidates, 200);
      }
    }
  }

  function scheduleRender() {
    clearTimeout(scheduleRender.timer);
    scheduleRender.timer = setTimeout(renderCandidates, 300);
  }

  const observer = new MutationObserver(() => {
    scheduleRender();
  });

  function start() {
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    scheduleRender();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
