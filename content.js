(() => {
  const PROCESSED_CLASS = 'slack-mathjax-processed';
  const RENDERED_CLASS = 'slack-mathjax-rendered';

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
        if (el.closest(`.${RENDERED_CLASS}`)) return;

        const text = el.innerText || el.textContent || '';
        if (!containsLatex(text)) return;

        elements.push(el);
      });
    }

    return elements;
  }

  function makeRenderBox(sourceElement) {
    const box = document.createElement('div');
    box.className = RENDERED_CLASS;

    const text = sourceElement.innerText || sourceElement.textContent || '';
    box.textContent = text;

    sourceElement.classList.add(PROCESSED_CLASS);
    sourceElement.after(box);

    return box;
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
        const boxes = candidates.map(makeRenderBox);

        if (window.MathJax && window.MathJax.typesetPromise) {
          await window.MathJax.typesetPromise(boxes);
        } else {
          console.warn('[Slack MathJax] MathJax is not ready yet.');
        }
      }
    } catch (error) {
      console.error('[Slack MathJax] rendering failed:', error);
    } finally {
      rendering = false;

      if (pending) {
        pending = false;
        setTimeout(renderCandidates, 500);
      }
    }
  }

  function scheduleRender() {
    clearTimeout(scheduleRender.timer);
    scheduleRender.timer = setTimeout(renderCandidates, 500);
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
