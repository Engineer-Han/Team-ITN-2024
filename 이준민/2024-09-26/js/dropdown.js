document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.getElementById('menu4');
    const dropdownContent = document.querySelector('.dropdown-content');
    const movieManageLink = document.getElementById('menu4');
    let activeDropdownItem = null; // 현재 활성화된 드롭다운 항목 추적

    // 드롭다운 토글
    dropdownToggle.addEventListener('click', function (event) {
        event.preventDefault(); // 기본 링크 동작 방지
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
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
            activeDropdownItem = target; // 현재 활성화된 드롭다운 항목 업데이트

            // 페이지 이동
            if (target.id === 'menu4_1') {
                window.location.href = 'add_movie.html'; // 영화 추가 페이지로 이동
            } else if (target.id === 'menu4_2') {
                window.location.href = 'movie_list.html'; // 영화 리스트 페이지로 이동
            }

            event.stopPropagation(); // 클릭 이벤트 전파 방지
        }
    });

    // 클릭 외부 시 드롭다운 닫기
    document.addEventListener('click', function (event) {
        if (dropdownContent.style.display === 'block' && !dropdownToggle.contains(event.target) && !dropdownContent.contains(event.target)) {
            // 드롭다운과 버튼 외 클릭 시 닫지 않음
            return; // 아무 것도 하지 않음 (드롭다운을 닫지 않음)
        }
    });

    // 현재 페이지 확인 및 스타일 변경
    const currentPage = window.location.pathname.split('/').pop(); // 현재 페이지 파일 이름

    if (currentPage === 'add_movie.html') {
        // 드롭다운 항목만 활성화, 영화 관리 메뉴는 원래 스타일 유지
        const dropdownItem = document.getElementById('menu4_1'); // 영화 추가 항목
        dropdownItem.classList.add('active'); // 드롭다운 항목 활성화
        dropdownContent.style.display = 'block'; // 드롭다운 열기
    } else if (currentPage === 'movie_list.html') {
        // 드롭다운 항목만 활성화, 영화 관리 메뉴는 원래 스타일 유지
        const dropdownItem = document.getElementById('menu4_2'); // 영화 리스트 항목
        dropdownItem.classList.add('active');
        dropdownContent.style.display = 'block'; // 드롭다운 열기
    } else {
        // 드롭다운 숨기기
        dropdownContent.style.display = 'none';
    }

    // 영화 관리 메뉴는 항상 원래 스타일로 복구
    movieManageLink.classList.remove('active'); // 영화 관리 메뉴는 항상 원래 상태 유지
});
