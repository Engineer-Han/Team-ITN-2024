document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.getElementById('menu4');
    const dropdownContent = document.querySelector('.dropdown-content');
    const movieManageLink = document.getElementById('menu4');
    let dropdownOpen = false; // 드롭다운 상태를 추적하는 변수 추가

    // 드롭다운 토글
    dropdownToggle.addEventListener('click', function (event) {
        event.preventDefault(); // 기본 링크 동작 방지
        dropdownOpen = !dropdownOpen; // 드롭다운 상태 반전
        dropdownContent.style.display = dropdownOpen ? 'block' : 'none'; // 상태에 따라 드롭다운 표시
        event.stopPropagation(); // 클릭 이벤트 전파 방지
    });

    // 드롭다운 항목 클릭 시 페이지 이동 및 스타일 변경
    dropdownContent.addEventListener('click', function (event) {
        const target = event.target;

        if (target.classList.contains('dropdown-item')) {
            // 모든 항목의 active 클래스 제거
            const items = dropdownContent.querySelectorAll('.dropdown-item');
            items.forEach(item => {
                item.classList.remove('active');
            });

            // 클릭한 항목에 active 클래스 추가
            target.classList.add('active');

            // 페이지 이동
            let targetUrl = '';
            if (target.id === 'menu4_1') {
                targetUrl = 'new_add_movie.html'; // 영화 추가 페이지로 이동
            } else if (target.id === 'menu4_2') {
                targetUrl = 'add_screening_list.html'; // 상영 목록 추가 페이지로 이동
            } else if (target.id === 'menu4_3') {
                targetUrl = 'movie_list.html'; // 영화 리스트 페이지로 이동
            }

            // 페이지 이동 후 드롭다운 닫지 않도록 설정
            window.location.href = targetUrl;
        }
    });



    // 현재 페이지 확인 및 스타일 변경
    const currentPage = window.location.pathname.split('/').pop(); // 현재 페이지 파일 이름

    // 현재 페이지에 따라 드롭다운 활성화
    if (currentPage === 'new_add_movie.html') {
        const dropdownItem = document.getElementById('menu4_1'); // 신규 영화 추가 항목
        dropdownItem.classList.add('active'); // 드롭다운 항목 활성화
        dropdownContent.style.display = 'block'; // 드롭다운 열기
        dropdownOpen = true; // 드롭다운 상태 업데이트
    } else if (currentPage === 'add_screening_list.html') {
        const dropdownItem = document.getElementById('menu4_2'); // 상영 목록 추가 항목
        dropdownItem.classList.add('active');
        dropdownContent.style.display = 'block'; // 드롭다운 열기
        dropdownOpen = true; // 드롭다운 상태 업데이트
    } else if (currentPage === 'movie_list.html') {
        const dropdownItem = document.getElementById('menu4_3'); // 영화 리스트 항목
        dropdownItem.classList.add('active');
        dropdownContent.style.display = 'block'; // 드롭다운 열기
        dropdownOpen = true; // 드롭다운 상태 업데이트
    } else {
        dropdownContent.style.display = 'none'; // 드롭다운 숨기기
        dropdownOpen = false; // 드롭다운 상태 업데이트
    }
});
