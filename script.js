// Example fee rules (adjust as per your real values)
const fees = {
  LMV: 500,
  MCWG: 400,
  Forklift: 600,
  Crane: 800,
  Excavator: 1000
};

const calcBtn = document.getElementById("calc");
const totalDiv = document.getElementById("total");

calcBtn.addEventListener("click", () => {
  let total = 0;

  // Check which checklist is active
  const activeChecklist = document.querySelector(
    "#checklist-fresher:not(.hidden), #checklist-endorsement:not(.hidden)"
  );

  if (activeChecklist) {
    const checked = activeChecklist.querySelectorAll("input[type=checkbox]:checked");

    checked.forEach(item => {
      const value = item.value;
      if (fees[value]) {
        total += fees[value];
      }
    });
  }

  totalDiv.textContent = `Total Fees: ₹${total}`;
});
