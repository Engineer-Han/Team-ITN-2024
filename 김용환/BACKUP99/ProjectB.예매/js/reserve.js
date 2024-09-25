
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
        
    });

    // 큐레이션 버튼 클릭 시 큐레이션 리스트 보이기
    btnCuration.addEventListener('click', function() {
        movieList.style.display = 'none'; // 영화 리스트 숨기기
        curationList.style.display = 'block'; // 큐레이션 리스트 보이기
        // 선택된 상태 초기화
        curationItems.forEach(item => item.classList.remove('selected'));
        
    });
});








// DOMContentLoaded 이벤트가 발생하면 실행되는 함수
document.addEventListener('DOMContentLoaded', function () {
    const theaterButtons = document.querySelectorAll('input[name="theater-radio"]');
    const theaterListItems = document.querySelectorAll('.theater-item');
    const theaterList2Items = document.querySelectorAll('.theater-item2');
    const specialListItems = document.querySelectorAll('.theater-item3');
    const specialList2Items = document.querySelectorAll('.theater-item4');

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
            document.querySelector('.theater-list2').style.display = 'block';
        });
    });

    // 극장 리스트 2 항목 클릭 이벤트
    theaterList2Items.forEach(item => {
        item.addEventListener('click', function () {
            resetSelections(theaterList2Items); // 이전 선택 해제
            toggleSelected(item);
        });
    });

    // 특별관 리스트 항목 클릭 이벤트
    specialListItems.forEach(item => {
        item.addEventListener('click', function () {
            resetSelections(specialListItems); // 이전 선택 해제
            toggleSelected(item);
            document.querySelector('.theater-speacial2').style.display = 'block';
        });
    });

    // 특별관 리스트 2 항목 클릭 이벤트
    specialList2Items.forEach(item => {
        item.addEventListener('click', function () {
            resetSelections(specialList2Items); // 이전 선택 해제
            toggleSelected(item);
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
});















