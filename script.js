const totalDiv = document.getElementById("total");
const breakdownDiv = document.getElementById("breakdown");
const calcBtn = document.getElementById("calc");

function isFresherActive(){
  return !document.getElementById("checklist-fresher").classList.contains("hidden");
}
function activeChecklist(){
  return isFresherActive()
    ? document.getElementById("checklist-fresher")
    : document.getElementById("checklist-endorsement");
}
function formatINR(n){ return `₹${n}`; }

function computeTotal(count, fresher){
  if (count <= 0) return 0;
  if (fresher){
    // Fresher: first 900, others 450
    return 900 + (count - 1) * 450;
  } else {
    // Endorsement: first 1150, others 900
    return 1150 + (count - 1) * 900;
  }
}

function buildBreakdown(count, fresher){
  if (count <= 0) return "";
  if (fresher){
    if (count === 1) return `Breakdown: 1 × ₹900`;
    return `Breakdown: ₹900 (first) + ${count-1} × ₹450 = ${formatINR(900 + (count-1)*450)}`;
  } else {
    if (count === 1) return `Breakdown: 1 × ₹1150`;
    return `Breakdown: ₹1150 (first) + ${count-1} × ₹900 = ${formatINR(1150 + (count-1)*900)}`;
  }
}

function updateTotal(){
  const list = activeChecklist();
  const checked = list.querySelectorAll('input[type="checkbox"]:checked');
  const count = checked.length;
  const fresher = isFresherActive();

  const total = computeTotal(count, fresher);
  totalDiv.textContent = `Total Fees: ${formatINR(total)}`;
  breakdownDiv.textContent = buildBreakdown(count, fresher);
}

// live updates on tick/untick
document.querySelectorAll('#checklist-fresher input[type="checkbox"], #checklist-endorsement input[type="checkbox"]').forEach(cb=>{
  cb.addEventListener("change", updateTotal);
});

// button still works
calcBtn.addEventListener("click", updateTotal);

// expose for toggle script
window.updateTotal = updateTotal;

// initial
updateTotal();
