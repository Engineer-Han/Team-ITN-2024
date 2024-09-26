document.addEventListener('DOMContentLoaded', function() {
    var defaultImages = {
        menu1: '../img/default_home.png',
        menu2: '../img/default_announcement.png',
        menu3: '../img/default_person.png',
        menu4: '../img/default_movie.png',
        menu5: '../img/default_inquiry.png',
        menu6: '../img/default_comment.png'
    };

    var clickImages = {
        menu1: '../img/click_home.png',
        menu2: '../img/click_announcement.png',
        menu3: '../img/click_person.png',
        menu4: '../img/click_movie.png',
        menu5: '../img/click_inquiry.png',
        menu6: '../img/click_comment.png'
    };

    var menuLinks = document.querySelectorAll('.nav-link');
    var currentPage = window.location.href;

    // 현재 URL을 확인하여 활성화된 메뉴 설정
    menuLinks.forEach(function(menu) {
        var linkHref = menu.getAttribute('href');
        if (currentPage.includes(linkHref)) {
            menu.style.backgroundColor = 'yellow'; // 메뉴 배경 색 설정
            menu.style.color = 'black'; // 활성화된 메뉴 글자 색 설정
            menu.classList.add('active'); // 활성화된 메뉴에 클래스 추가
            var img = menu.querySelector('img');
            img.src = clickImages[menu.id]; // 클릭 이미지로 변경
        }
    });

    // 메뉴 클릭 이벤트
    menuLinks.forEach(function(menu) {
        menu.addEventListener('click', function(event) {
            // 클릭한 메뉴의 배경 색 초기화 및 클래스 제거
            menuLinks.forEach(function(link) {
                link.style.backgroundColor = ''; // 모든 메뉴 배경 색 초기화
                link.style.color = ''; // 모든 메뉴 글자 색 초기화
                link.classList.remove('active'); // 모든 메뉴의 클래스 제거
                var img = link.querySelector('img');
                img.src = defaultImages[link.id]; // 기본 이미지로 변경
            });

            // 클릭한 메뉴의 배경 색 변경 및 클래스 추가
            this.style.backgroundColor = 'yellow';
            this.style.color = 'black'; // 클릭한 메뉴 글자 색 검은색으로 변경
            this.classList.add('active'); // 클릭한 메뉴에 클래스 추가

            // 클릭한 메뉴에 따른 이미지 변경
            var menuId = this.id;
            var img = this.querySelector('img');
            img.src = clickImages[menuId]; // 클릭 이미지로 변경

            // 현재 페이지 상태에 따라 다른 URL로 이동
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
                    window.location.href = ''; // 추가 페이지 URL
                    break;
                case 'menu6':
                    window.location.href = ''; // 추가 페이지 URL
                    break;
            }
        });
    });
});
