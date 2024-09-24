let isCreditCardVisible = false;
let isCreditbank_bookVisible = false;
function getViewportSize() {
    const vw = window.innerWidth / 100; // 1vw 값
    const vh = window.innerHeight / 100; // 1vh 값
    return { vw, vh };
}

document.getElementById('card_bt').addEventListener('click', function() {
    if (isCreditCardVisible) {
        // 신용카드 섹션이 보이면 다시 숨기고 무통장 입금 버튼을 다시 표시
        document.getElementById('creditCardSection').style.display = 'none';
        document.getElementById('bank_book_bt').style.display = 'inline-block';
        isCreditCardVisible = false;
    } else {
        // 신용카드 버튼을 클릭하면 무통장 입금 버튼 숨기고 신용카드 내용 표시
        document.getElementById('bank_book_bt').style.display = 'none';
        document.getElementById('creditCardSection').style.display = 'block';
        isCreditCardVisible = true;
    }
});


document.getElementById('bank_book_bt').addEventListener('click', function() {
    if (isCreditbank_bookVisible) {
        // 신용카드 섹션이 보이면 다시 숨기고 무통장 입금 버튼을 다시 표시
        document.getElementById('creditbank_bookSection').style.display = 'none';
        document.getElementById('card_bt').style.display = 'inline-block';
        isCreditbank_bookVisible = false;
    } else {
        // 신용카드 버튼을 클릭하면 무통장 입금 버튼 숨기고 신용카드 내용 표시
        document.getElementById('card_bt').style.display = 'none';
        document.getElementById('creditbank_bookSection').style.display = 'block';
        isCreditbank_bookVisible = true;
    }
});

document.getElementById('bank_book_bt').addEventListener('click', function() {
    // 무통장 버튼의 마진을 동적으로 변경
    function toggleMargin() {
        const bankButton = document.getElementById('bank_book_bt'); // 계좌결제 버튼 선택
        const { vw, vh } = getViewportSize(); // 뷰포트 크기 가져오기
    
        // 마진 값이 특정 값이면 새로운 값으로 변경, 아니면 원래 상태로 복원
        if (bankButton.style.marginLeft === `${38 * vw}px`) { // 740px -> 7.4vw로 변경
            bankButton.style.marginTop = `${2 * vh}px`; // 20px -> 2vh로 변경
            bankButton.style.marginLeft = `${5 * vw}px`; // 100px -> 1vw로 변경
        } else {
            bankButton.style.marginTop = `${2 * vh}px`; // 20px -> 2vh로 변경
            bankButton.style.marginLeft = `${38 * vw}px`; // 740px -> 7.4vw로 변경
        }
    }
    toggleMargin(); // 함수 호출
});