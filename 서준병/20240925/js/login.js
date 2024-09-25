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

// 선택된 이메일 도메인에 따라 직접 입력 필드의 값을 동적으로 변경하는 JavaScript 코드
