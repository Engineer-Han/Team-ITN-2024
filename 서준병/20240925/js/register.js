const autoSizingSelect = document.getElementById("autoSizingSelect");
const customDomainInput = document.getElementById("customDomainInput");

autoSizingSelect.addEventListener("change", () => {
  const val = autoSizingSelect.value;
  if (val === "direct") {
    customDomainInput.value = "직접입력";
  } else {
    customDomainInput.value = val;
  }
});
