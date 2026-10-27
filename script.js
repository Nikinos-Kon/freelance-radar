/**
 * Lightweight, Ultra-Fast Interactive Logic for Freelance Radar
 * Zero dependencies, pure native vanilla JS (< 2KB)
 */

document.addEventListener('DOMContentLoaded', () => {
  initDemoTabs();
  initCalculator();
  initFaqAccordion();
});

/**
 * Interactive Demo Tabs Switcher
 */
function initDemoTabs() {
  const tabButtons = document.querySelectorAll('.demo-tab-btn');
  const panels = document.querySelectorAll('.demo-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');

      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      panels.forEach(panel => {
        if (panel.id === targetId) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });
}

/**
 * Time-Saver & Extra Earnings Calculator
 */
function initCalculator() {
  const slider = document.getElementById('hoursSlider');
  const hoursValueDisplay = document.getElementById('sliderHoursValue');
  const monthlyHoursSaved = document.getElementById('calcHoursSaved');
  const speedBonus = document.getElementById('calcSpeedBonus');
  const extraRevenue = document.getElementById('calcExtraRevenue');

  if (!slider) return;

  function updateCalc() {
    const hoursPerDay = parseFloat(slider.value);
    if (hoursValueDisplay) {
      hoursValueDisplay.textContent = `${hoursPerDay} ч.`;
    }

    // Average 22 working days per month
    const hoursSavedMonth = Math.round(hoursPerDay * 0.85 * 22);
    // Reaction speed improvement (instant notification vs delayed browsing)
    const speedRatio = Math.round(hoursPerDay * 12);
    // Estimated additional earnings from reclaimed hours (conservative 1500 RUB / hour)
    const extraMoney = (hoursSavedMonth * 1500).toLocaleString('ru-RU');

    if (monthlyHoursSaved) monthlyHoursSaved.textContent = `~${hoursSavedMonth} ч.`;
    if (speedBonus) speedBonus.textContent = `В ${speedRatio}×`;
    if (extraRevenue) extraRevenue.textContent = `+${extraMoney} ₽`;
  }

  slider.addEventListener('input', updateCalc);
  updateCalc();
}

/**
 * FAQ Accordion Expand/Collapse
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close other items for a clean single-open view
      faqItems.forEach(other => other.classList.remove('active'));

      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });
}
