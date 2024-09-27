
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


// 초기화 함수
function initialize() {
    // 극장 선택 비활성화
    document.querySelectorAll('.theater-itemS, .theater-itemI, .theater-itemB').forEach(item => {
        item.classList.add('disabled');
    });

    // 영화 선택 리스너
    const movieItems = document.querySelectorAll('.movie-item');
    movieItems.forEach(item => {
        item.addEventListener('click', function() {
            // 강조 효과 추가
            movieItems.forEach(i => i.classList.remove('selected'));
            this.classList.add('selected');

            // 극장 선택 활성화
            document.querySelectorAll('.theater-itemS, .theater-itemI, .theater-itemB').forEach(item => {
                item.classList.remove('disabled');
            });
        });
    });

    // 극장 선택 리스너
    const theaterItems = document.querySelectorAll('.theater-itemS, .theater-itemI, .theater-itemB');
    theaterItems.forEach(item => {
        item.addEventListener('click', function() {
            // 강조 효과 추가
            theaterItems.forEach(i => i.classList.remove('selected'));
            this.classList.add('selected');

            // 모든 리스트 숨기기
            document.querySelector('.theater-list2').style.display = 'none';
            document.querySelector('.theater-list3').style.display = 'none';
            document.querySelector('.theater-list4').style.display = 'none';

            // 선택된 극장에 맞는 리스트만 표시
            const theaterType = this.classList.contains('theater-itemS') ? 2 :
                                this.classList.contains('theater-itemI') ? 3 :
                                4;

            // 해당 리스트 활성화
            document.querySelector('.theater-list' + theaterType).style.display = 'block';

            // 시간 리스트 비활성화
            document.querySelector('.time-select').style.display = 'none';
        });
    });

    // 리스트 클릭 시 시간 선택 활성화
    const theaterLists = document.querySelectorAll('.theater-list2, .theater-list3, .theater-list4');
    theaterLists.forEach(list => {
        list.querySelectorAll('.theater-item2').forEach(item => {
            item.addEventListener('click', function() {
                // 리스트에서 선택된 아이템 강조
                theaterLists.forEach(l => l.querySelectorAll('.theater-item2').forEach(i => i.classList.remove('selected')));
                this.classList.add('selected');

                // 시간 리스트 활성화 조건 확인
                if (document.querySelector('.theater-itemS.selected') || 
                    document.querySelector('.theater-itemI.selected') || 
                    document.querySelector('.theater-itemB.selected')) {
                    document.querySelector('.time-select').style.display = 'block';
                }
            });
        });
    });
}

// 페이지 로드 시 초기화
window.onload = initialize;





// 영화 제목 클릭 리스너 추가
const movieTitles = document.querySelectorAll('.movie-title');
movieTitles.forEach(title => {
    title.addEventListener('click', function() {
        window.location.href = '../html/select_seat.html'; // 선택된 페이지로 이동
    });
});





























