const calcBtn = document.getElementById("calc");
const totalDiv = document.getElementById("total");

calcBtn.addEventListener("click", () => {
  let total = 0;

  // Detect which checklist is active
  const isFresherActive = !document.getElementById("checklist-fresher").classList.contains("hidden");
  const activeChecklist = isFresherActive 
    ? document.getElementById("checklist-fresher") 
    : document.getElementById("checklist-endorsement");

  const checked = activeChecklist.querySelectorAll("input[type=checkbox]:checked");
  const count = checked.length;

  if (count > 0) {
    if (isFresherActive) {
      // Fresher pricing
      total = 900 + (count - 1) * 450;
    } else {
      // Endorsement pricing
      total = 1150 + (count - 1) * 900;
    }
  }

  totalDiv.textContent = `Total Fees: ₹${total}`;
});
