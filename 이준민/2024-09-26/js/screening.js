// 모든 toggleShowtime 버튼에 클릭 이벤트 추가
document.querySelectorAll('.toggleShowtime').forEach(button => {
    button.addEventListener('click', () => {
        const showtimeStatus = button.nextElementSibling; // 버튼 바로 다음에 있는 요소 선택

        if (button.classList.contains('active')) {
            button.classList.remove('active');
            button.classList.add('inactive');
            showtimeStatus.textContent = '상영이 비활성화 상태입니다.';
        } else {
            button.classList.remove('inactive');
            button.classList.add('active');
            showtimeStatus.textContent = '상영이 활성화 상태입니다.';
        }
    });
});
