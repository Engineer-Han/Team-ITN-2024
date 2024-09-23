let likeCount = 0; // 초기 좋아요 수

document.getElementById("like-btn").addEventListener("click", function (event) {
  event.preventDefault(); // 기본 링크 동작 방지
  likeCount++; // 좋아요 수 증가
  document.getElementById("like-count").textContent = likeCount; // 숫자 업데이트
});
