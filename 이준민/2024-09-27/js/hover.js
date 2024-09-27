document.addEventListener('DOMContentLoaded', function() {
    var defaultImages = {
        menu1: '../img/default_home.png',
        menu2: '../img/default_announcement.png',
        menu3: '../img/default_person.png',
        menu4: '../img/default_movie.png',
        menu5: '../img/default_inquiry.png'
    };

    var clickImages = {
        menu1: '../img/click_home.png',
        menu2: '../img/click_announcement.png',
        menu3: '../img/click_person.png',
        menu4: '../img/click_movie.png',
        menu5: '../img/click_inquiry.png'
    };

    var menuLinks = document.querySelectorAll('.nav-link');
    var currentPage = window.location.href;

    // 현재 URL을 확인하여 활성화된 메뉴 설정
    menuLinks.forEach(function(menu) {
        var linkHref = menu.getAttribute('href');
        if (currentPage.includes(linkHref)) {
            menu.style.backgroundColor = 'yellow'; 
            menu.style.color = 'black'; 
            menu.classList.add('active'); 
            var img = menu.querySelector('img');
            img.src = clickImages[menu.id]; 
        }
    });

    // 메뉴 클릭 이벤트
    menuLinks.forEach(function(menu) {
        menu.addEventListener('click', function(event) {
            // 모든 메뉴 초기화
            menuLinks.forEach(function(link) {
                link.style.backgroundColor = ''; 
                link.style.color = ''; 
                link.classList.remove('active'); 
                var img = link.querySelector('img');
                img.src = defaultImages[link.id]; 
            });

            // 클릭한 메뉴 스타일 변경
            this.style.backgroundColor = 'yellow'; 
            this.style.color = 'black'; 
            this.classList.add('active'); 
            var menuId = this.id;
            var img = this.querySelector('img');
            img.src = clickImages[menuId]; 

            // 페이지 이동
            switch (menuId) {
                case 'menu1':
                    window.location.href = 'manager_main.html';
                    break;
                case 'menu2':
                    window.location.href = 'announcement.html';
                    break;
                case 'menu3':
                    window.location.href = 'member_list.html';
                    break;
                case 'menu5':
                    window.location.href = 'One-on-one_inquiry.html'; 
                    break;
            }
        });
    });
});

function resetForm(){
    window.location.href = 'announcement.html';
}