(function () {
  document.documentElement.classList.add('js');
  const phone = '+12675974084';

  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function setupSlider(root, intervalMs) {
    if (!root) return;
    const items = Array.from(root.querySelectorAll('.slide, .testimonial'));
    const dotsWrap = root.querySelector('.slider-dots');
    if (!items.length) return;
    let index = Math.max(0, items.findIndex((item) => item.classList.contains('active')));
    if (index < 0) index = 0;
    let timer = null;

    function render(nextIndex) {
      index = (nextIndex + items.length) % items.length;
      items.forEach((item, itemIndex) => item.classList.toggle('active', itemIndex === index));
      if (dotsWrap) {
        Array.from(dotsWrap.children).forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === index));
      }
    }

    if (dotsWrap) {
      dotsWrap.innerHTML = '';
      items.forEach((_, dotIndex) => {
        const dot = document.createElement('span');
        dot.addEventListener('click', () => {
          render(dotIndex);
          restart();
        });
        dotsWrap.appendChild(dot);
      });
    }

    function next() { render(index + 1); }
    function restart() {
      if (timer) window.clearInterval(timer);
      timer = window.setInterval(next, intervalMs);
    }

    const prevBtn = root.querySelector('.prev');
    const nextBtn = root.querySelector('.next');
    if (prevBtn) prevBtn.addEventListener('click', () => { render(index - 1); restart(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { render(index + 1); restart(); });

    render(index);
    restart();
  }

  setupSlider(document.querySelector('[data-slider="hero"]'), 4200);
  setupSlider(document.querySelector('[data-slider="testimonials"]'), 3500);

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealItems.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('in-view'));
  }

  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(quoteForm);
      const name = String(formData.get('name') || '').trim();
      const service = String(formData.get('service') || '').trim();
      const location = String(formData.get('location') || '').trim();
      const details = String(formData.get('details') || '').trim();
      const message = [
        'Hi Handyman FixSmart, I need a free estimate.',
        name ? `Name: ${name}` : '',
        service ? `Service: ${service}` : '',
        location ? `Location: ${location}` : '',
        details ? `Details: ${details}` : ''
      ].filter(Boolean).join('\n');
      window.location.href = `sms:${phone}?body=${encodeURIComponent(message)}`;
    });
  }
})();
