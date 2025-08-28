// Fee chart (update these values as per your real RTO fees)
const fees = {
  LMV: 500,
  MCWG: 400,
  Trans: 700,
  Trailer: 750,
  Forklift: 600,
  Crane: 800,
  Excavator: 1000
};

const calcBtn = document.getElementById("calc");
const totalDiv = document.getElementById("total");

calcBtn.addEventListener("click", () => {
  let total = 0;

  // Detect active checklist (fresher OR endorsement)
  const activeChecklist = document.querySelector(
    "#checklist-fresher:not(.hidden), #checklist-endorsement:not(.hidden)"
  );

  if (activeChecklist) {
    const checked = activeChecklist.querySelectorAll("input[type=checkbox]:checked");

    checked.forEach(item => {
      const value = item.value.trim(); // clean value
      if (fees[value]) {
        total += fees[value];
      }
    });
  }

  // Show total
  totalDiv.textContent = `Total Fees: ₹${total}`;
});
