
// 날짜 선택 및 버튼 로직
document.addEventListener("DOMContentLoaded", function() {
    const dateItems = document.querySelectorAll('.date-item');
    let currentDateIndex = 0; // 기본값 인덱스 (1일 기준)

    // 기본적으로 첫 번째 날짜를 선택된 상태로 설정
    dateItems[currentDateIndex].classList.add('active');

    dateItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            // 모든 항목에서 'active' 클래스 제거
            dateItems.forEach(innerItem => {
                innerItem.classList.remove('active');
            });
            // 클릭한 항목에 'active' 클래스 추가
            this.classList.add('active');
            // 현재 날짜 인덱스를 업데이트
            currentDateIndex = index;
        });
    });

    // 앞 버튼 클릭 이벤트
    document.getElementById('time-button-left').addEventListener('click', function() {
        if (currentDateIndex > 0) {
            currentDateIndex--;
            updateActiveDate();
        }
    });

    // 뒤 버튼 클릭 이벤트
    document.getElementById('time-button-right').addEventListener('click', function() {
        if (currentDateIndex < dateItems.length - 1) {
            currentDateIndex++;
            updateActiveDate();
        }
    });

    // 선택된 날짜 업데이트 함수
    function updateActiveDate() {
        // 모든 항목에서 'active' 클래스 제거
        dateItems.forEach(innerItem => {
            innerItem.classList.remove('active');
        });
        // 현재 날짜 인덱스에 해당하는 항목에 'active' 클래스 추가
        dateItems[currentDateIndex].classList.add('active');
    }
});





// 영화 및 큐레이션 선택 기능
document.addEventListener("DOMContentLoaded", function() {
    const movieItems = document.querySelectorAll('.movie-item'); // 영화 아이템 선택
    const curationItems = document.querySelectorAll('.curation-item'); // 큐레이션 아이템 선택
    const movieList = document.querySelector('.movie-list'); // 영화 리스트
    const curationList = document.querySelector('.curation-list'); // 큐레이션 리스트
    const btnAll = document.getElementById('btnradio1'); // 전체 버튼
    const btnCuration = document.getElementById('btnradio2'); // 큐레이션 버튼

    // 기본적으로 첫 번째 영화를 선택된 상태로 설정
    movieItems[0].classList.add('selected');

    // 영화 아이템 클릭 이벤트
    movieItems.forEach((item) => {
        item.addEventListener('click', function() {
            // 모든 항목에서 'selected' 클래스 제거
            movieItems.forEach(innerItem => {
                innerItem.classList.remove('selected');
            });
            // 클릭한 항목에 'selected' 클래스 추가
            this.classList.add('selected');
        });
    });

    // 큐레이션 아이템 클릭 이벤트
    curationItems.forEach((item) => {
        item.addEventListener('click', function() {
            // 모든 항목에서 'selected' 클래스 제거
            curationItems.forEach(innerItem => {
                innerItem.classList.remove('selected');
            });
            // 클릭한 항목에 'selected' 클래스 추가
            this.classList.add('selected');
        });
    });

    // 전체 버튼 클릭 시 영화 리스트 보이기
    btnAll.addEventListener('click', function() {
        movieList.style.display = 'block'; // 영화 리스트 보이기
        curationList.style.display = 'none'; // 큐레이션 리스트 숨기기
        // 선택된 상태 초기화
        movieItems.forEach(item => item.classList.remove('selected'));
        movieItems[0].classList.add('selected'); // 첫 번째 영화 선택
    });

    // 큐레이션 버튼 클릭 시 큐레이션 리스트 보이기
    btnCuration.addEventListener('click', function() {
        movieList.style.display = 'none'; // 영화 리스트 숨기기
        curationList.style.display = 'block'; // 큐레이션 리스트 보이기
        // 선택된 상태 초기화
        curationItems.forEach(item => item.classList.remove('selected'));
        curationItems[0].classList.add('selected'); // 첫 번째 큐레이션 영화 선택
    });
});