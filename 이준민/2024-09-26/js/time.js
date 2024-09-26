function adjustMinutes() {
    const hourInput = document.getElementById('releaseHour');
    const minuteInput = document.getElementById('releaseMinute');

    const hourValue = parseInt(hourInput.value, 10);

    if (hourValue === 21) {
        minuteInput.max = 50; // 21시인 경우 분의 최대값을 50으로 설정
    } else {
        minuteInput.max = 59; // 그 외의 경우에는 최대값을 59로 설정
    }

    // 현재 입력된 분이 최대값보다 크면, 최대값으로 설정
    if (parseInt(minuteInput.value, 10) > minuteInput.max) {
        minuteInput.value = minuteInput.max;
    }
}

function calculateTotalTime() {
    const startHour = parseInt(document.getElementById('releaseHour').value, 10);
    const startMinute = parseInt(document.getElementById('releaseMinute').value, 10);
    const endHour = parseInt(document.getElementById('endHour').value, 10);
    const endMinute = parseInt(document.getElementById('endMinute').value, 10);

    // 총 분으로 변환
    const totalStartMinutes = startHour * 60 + startMinute;
    const totalEndMinutes = endHour * 60 + endMinute;

    // 총 상영 시간 계산
    const totalTime = totalEndMinutes - totalStartMinutes;

    // 결과 표시
    const totalTimeDisplay = document.getElementById('totalTimeDisplay');
    if (totalTime < 0) {
        totalTimeDisplay.innerText = "종영 시간이 상영 시작 시간보다 빨라야 합니다.";
    } else {
        const hours = Math.floor(totalTime / 60);
        const minutes = totalTime % 60;
        totalTimeDisplay.innerText = `총 상영 시간: ${hours}시간 ${minutes}분`;
    }
}
