var swiper3 = new Swiper('.gallery_inner2', {
  //$('.gallery_inner2').fullpage({
    slidesPerView: 3,//보여지는 갤러리 수
    spaceBetween: 40,//갤러리 사이 간격
    speed: 1500,//버튼을 슬라이드가 넘어가는 시간

      loop: true,//슬라이드 무한반복
      navigation: {//화살표 버튼
        nextEl: '.gallery2 .swiper-button-next',
        prevEl: '.gallery2 .swiper-button-prev',
      },
	    pagination: {//블릿 버튼
        el: '.gallery2 .swiper-pagination',
        clickable: true,
      },
    });