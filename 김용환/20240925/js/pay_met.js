let isCreditCardVisible = false;
let isCreditbank_bookVisible = false;

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
    const bankButton = document.getElementById('bank_book_bt');
    
    if (bankButton.style.marginLeft === '400px') {
        // 원래 상태로 되돌리기
        bankButton.style.marginTop = '30px'
        bankButton.style.marginLeft = '100px';
        
        
    } else {
        // 새로운 마진 적용
         bankButton.style.marginTop = '30px'
        bankButton.style.marginLeft = '400px';
        

    }
});