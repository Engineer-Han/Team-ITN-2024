fetch('header.html')
.then(response => response.text())
.then(data => {
    document.getElementById('header').innerHTML = data;
});
 // 풋터 불러오기
 fetch('footer.html')
 .then(response => response.text())
 .then(data => {
     document.getElementById('footer').innerHTML = data;
 });