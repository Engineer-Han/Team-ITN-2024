
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


document.addEventListener("DOMContentLoaded", function() {
    const movieItems = document.querySelectorAll('.movie-item'); // 영화 아이템 선택
    const curationItems = document.querySelectorAll('.curation-item'); // 큐레이션 아이템 선택
    const movieList = document.querySelector('.movie-list'); // 영화 리스트
    const curationList = document.querySelector('.curation-list'); // 큐레이션 리스트
    const btnAll = document.getElementById('btnradio1'); // 전체 버튼
    const btnCuration = document.getElementById('btnradio2'); // 큐레이션 버튼
    const timeList = document.querySelector('.time-list'); // 시간 리스트

    resetTheaterSelections(); // 극장 선택 초기화
    initializeTheaterOptions(); // 극장 및 특별관 비활성화

    // 영화 아이템 클릭 이벤트
    movieItems.forEach((item) => {
        item.addEventListener('click', function() {
            resetSelections(movieItems);
            this.classList.add('selected');
            activateTheaterOptions(); // 극장 옵션 활성화
            checkTimeOptions(); // 시간 리스트 체크
        });
    });

    // 큐레이션 아이템 클릭 이벤트
    curationItems.forEach((item) => {
        item.addEventListener('click', function() {
            resetSelections(curationItems);
            this.classList.add('selected');
            activateTheaterOptions(); // 극장 옵션 활성화
            checkTimeOptions(); // 시간 리스트 체크
        });
    });

    // 전체 버튼 클릭 시 영화 리스트 보이기
    btnAll.addEventListener('click', function() {
        movieList.style.display = 'block';
        curationList.style.display = 'none';
        resetSelections(movieItems);
        resetTheaterSelections(); // 극장 선택 초기화
        timeList.style.display = 'none'; // 시간 리스트 숨기기
    });

    // 큐레이션 버튼 클릭 시 큐레이션 리스트 보이기
    btnCuration.addEventListener('click', function() {
        movieList.style.display = 'none';
        curationList.style.display = 'block';
        resetSelections(curationItems);
        resetTheaterSelections(); // 극장 선택 초기화
        initializeTheaterOptions(); // 극장 및 특별관 비활성화
        timeList.style.display = 'none'; // 시간 리스트 숨기기
    });

    // 극장 관련 로직
    const theaterButtons = document.querySelectorAll('input[name="theater-radio"]');
    const theaterListItems = document.querySelectorAll('.theater-item'); // 기본 극장 아이템
    const theaterList2Items = document.querySelectorAll('.theater-item2'); // 극장 item2
    const specialListItems = document.querySelectorAll('.theater-item3'); // 특별관 아이템
    const specialList2Items = document.querySelectorAll('.theater-item4'); // 특별관 item2

    theaterButtons.forEach(button => {
        button.addEventListener('change', function () {
            if (this.id === 'theater1') {
                document.querySelector('.theater-list').style.display = 'block';
                document.querySelector('.theater-speacial').style.display = 'none';
                document.querySelector('.theater-list2').style.display = 'none';
                document.querySelector('.theater-speacial2').style.display = 'none';
                resetSelections(specialListItems);
                resetSelections(specialList2Items);
            } else if (this.id === 'theater2') {
                document.querySelector('.theater-list').style.display = 'none';
                document.querySelector('.theater-speacial').style.display = 'block';
                document.querySelector('.theater-list2').style.display = 'none';
                document.querySelector('.theater-speacial2').style.display = 'none';
                resetSelections(theaterListItems);
                resetSelections(theaterList2Items);
            }
        });
    });

    // 극장 리스트 항목 클릭 이벤트
    theaterListItems.forEach(item => {
        item.addEventListener('click', function () {
            resetSelections(theaterListItems); // 이전 선택 해제
            toggleSelected(item);
            document.querySelector('.theater-list2').style.display = 'block'; // item2 보이기
            checkTimeOptions(); // 시간 리스트 체크
        });
    });

    // 극장 리스트 2 항목 클릭 이벤트
    theaterList2Items.forEach(item => {
        item.addEventListener('click', function () {
            resetSelections(theaterList2Items); // 이전 선택 해제
            toggleSelected(item);
            checkTimeOptions(); // 시간 리스트 체크
        });
    });

    // 특별관 리스트 항목 클릭 이벤트
    specialListItems.forEach(item => {
        item.addEventListener('click', function () {
            resetSelections(specialListItems); // 이전 선택 해제
            toggleSelected(item);
            document.querySelector('.theater-speacial2').style.display = 'block'; // 특별관 item2 보이기
            checkTimeOptions(); // 시간 리스트 체크
        });
    });

    // 특별관 리스트 2 항목 클릭 이벤트
    specialList2Items.forEach(item => {
        item.addEventListener('click', function () {
            resetSelections(specialList2Items); // 이전 선택 해제
            toggleSelected(item);
            checkTimeOptions(); // 시간 리스트 체크
        });
    });

    // 선택된 항목 강조 처리
    function toggleSelected(item) {
        item.classList.add('selected'); // 강조 효과 추가
    }

    // 선택 해제
    function resetSelections(items) {
        items.forEach(item => item.classList.remove('selected')); // 강조 효과 제거
    }

    // 극장 옵션 활성화
    function activateTheaterOptions() {
        const selectedMovie = document.querySelector('.movie-item.selected'); // 선택된 영화 확인
        const selectedCuration = document.querySelector('.curation-item.selected'); // 선택된 큐레이션 확인
        
        if (selectedMovie || selectedCuration) {
            const theaterItems = document.querySelectorAll('.theater-item, .theater-item3'); // 극장 및 특별관 아이템 선택
            theaterItems.forEach(item => {
                item.classList.remove('disabled'); // 비활성화 해제
                item.style.pointerEvents = 'auto'; // 클릭 가능하게 설정
            });
        } else {
            resetTheaterSelections(); // 선택된 항목이 없으면 초기화
        }
    }

    // 극장 선택 초기화
    function resetTheaterSelections() {
        const theaterItems = document.querySelectorAll('.theater-item, .theater-item3');
        theaterItems.forEach(item => {
            item.classList.add('disabled'); // 비활성화 효과 추가
            item.style.pointerEvents = 'none'; // 클릭 불가능하게 설정
            item.classList.remove('selected'); // 선택 해제
        });
        document.querySelector('.theater-list2').style.display = 'none'; // item2 숨기기
        document.querySelector('.theater-speacial2').style.display = 'none'; // 특별관 item2 숨기기

        // 기본값으로 극장 및 item 보여주기
        document.querySelector('.theater-list').style.display = 'block'; // 기본 극장 리스트 보이기
        document.querySelector('.theater-speacial').style.display = 'none'; // 특별관 숨기기
    }

    // 극장 및 특별관 비활성화 초기화
    function initializeTheaterOptions() {
        resetTheaterSelections();
    }

    // 시간 리스트 활성화 체크
    // 시간 리스트 활성화 체크
// 시간 리스트 활성화 체크
function checkTimeOptions() {
    const selectedMovie = document.querySelector('.movie-item.selected'); // 선택된 영화 확인
    const selectedCuration = document.querySelector('.curation-item.selected'); // 선택된 큐레이션 확인

    // 극장 그룹 1 (theater-item, theater-item2)
    const selectedTheaterGroup1 = document.querySelectorAll('.theater-item.selected');
    const selectedTheaterGroup2 = document.querySelectorAll('.theater-item2.selected');

    // 극장 그룹 2 (theater-item3, theater-item4)
    const selectedSpecialGroup1 = document.querySelectorAll('.theater-item3.selected');
    const selectedSpecialGroup2 = document.querySelectorAll('.theater-item4.selected');

    const timeList = document.querySelector('.time-select'); // time-select 요소 선택

    // 영화 또는 큐레이션 + 첫 번째 극장 그룹이 선택되었는지 확인
    const group1Selected = selectedTheaterGroup1.length > 0 && selectedTheaterGroup2.length > 0;

    // 영화 또는 큐레이션 + 두 번째 극장 그룹이 선택되었는지 확인
    const group2Selected = selectedSpecialGroup1.length > 0 && selectedSpecialGroup2.length > 0;

    // 조건에 맞춰 시간 리스트 표시
    if ((selectedMovie || selectedCuration) && (group1Selected || group2Selected)) {
        timeList.style.display = 'block'; // 시간 리스트 보이기
    } else {
        timeList.style.display = 'none'; // 시간 리스트 숨기기
    }
}


});


// 시간 리스트 항목 클릭 이벤트
const timeListItems = document.querySelectorAll('.time-select .list-group-item');

timeListItems.forEach(item => {
    item.addEventListener('click', function () {
        // 좌석 예매 페이지로 이동
        window.location.href = '../html/select_seat.html'; // 하드코딩된 URL로 이동
    });
});


























