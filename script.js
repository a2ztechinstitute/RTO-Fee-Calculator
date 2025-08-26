
(() => {
  const modes = {
    fresher: { first: 900, extra: 450 },
    endorsement: { first: 1150, extra: 900 }
  };

  let currentMode = 'fresher';

  const btnFresher = document.getElementById('btn-fresher');
  const btnEndorse = document.getElementById('btn-endorsement');
  const totalEl = document.getElementById('total');
  const calcBtn = document.getElementById('calc');
  const checklist = document.getElementById('checklist');

  function setMode(mode){
    currentMode = mode;
    btnFresher.classList.toggle('active', mode==='fresher');
    btnEndorse.classList.toggle('active', mode==='endorsement');
    btnFresher.setAttribute('aria-pressed', mode==='fresher');
    btnEndorse.setAttribute('aria-pressed', mode==='endorsement');
    // clear previous total when switching modes
    totalEl.textContent = '';
  }

  btnFresher.addEventListener('click', () => setMode('fresher'));
  btnEndorse.addEventListener('click', () => setMode('endorsement'));

  function computeTotal(count, mode){
    if(count <= 0) return 0;
    const plan = modes[mode];
    return plan.first + Math.max(0, count-1) * plan.extra;
  }

  calcBtn.addEventListener('click', () => {
    const checked = checklist.querySelectorAll('input[type="checkbox"]:checked').length;
    const total = computeTotal(checked, currentMode);
    // Only show the final total, no per-item values
    totalEl.textContent = 'Total: ₹' + total.toLocaleString('en-IN');
  });

})();
