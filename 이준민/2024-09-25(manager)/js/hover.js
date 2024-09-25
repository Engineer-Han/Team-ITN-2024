document.addEventListener('DOMContentLoaded', function() {
    var defaultImages = {
        menu1: '../img/default_home.png',  // 메뉴1 기본 이미지
        menu2: '../img/default_announcement.png',  
        menu3: '../img/default_person.png', 
        menu4: '../img/default_movie.png',   
        menu5: '../img/default_inquiry.png',   
        menu6: '../img/default_comment.png'   
    };
    
    var clickImages = {
        menu1: '../img/click_home.png',    // 메뉴1 클릭 이미지
        menu2: '../img/click_announcement.png',     
        menu3: '../img/click_person.png',  
        menu4: '../img/click_movie.png',    
        menu5: '../img/click_inquiry.png',     
        menu6: '../img/click_comment.png'     
    };

    var menuLinks = document.querySelectorAll('.nav-link');

    // 각 메뉴에 대한 상태를 저장할 객체
    var menuStates = {
        menu1: false,
        menu2: false,
        menu3: false,
        menu4: false,
        menu5: false,
        menu6: false
    };

    menuLinks.forEach(function(menu) {
        menu.addEventListener('click', function() {
            // 클릭한 메뉴의 배경 색 초기화
            menuLinks.forEach(function(link) {
                link.style.backgroundColor = ''; // 모든 메뉴 배경 색 초기화
            });

            // 클릭한 메뉴의 배경 색 변경
            this.style.backgroundColor = 'lightblue';

            // 클릭한 메뉴에 따른 이미지 변경
            var menuId = this.id;

            // 해당 메뉴의 이미지 태그 찾기
            var img = this.querySelector('img');
            
            // 클릭 시 이미지 변경
            if (!menuStates[menuId]) {
                img.src = clickImages[menuId]; // 클릭 이미지로 변경
                menuStates[menuId] = true; // 상태 변경
            } else {
                img.src = defaultImages[menuId]; // 기본 이미지로 변경
                menuStates[menuId] = false; // 상태 초기화
            }

            // 클릭한 메뉴 외의 상태 초기화
            for (var key in menuStates) {
                if (key !== menuId) {
                    menuStates[key] = false; // 상태 초기화
                    var otherImg = document.getElementById(key).querySelector('img');
                    otherImg.src = defaultImages[key]; // 기본 이미지로 변경
                }
            }
        });
    });
});
