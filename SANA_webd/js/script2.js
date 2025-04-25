$(function () {
  const swiper = new Swiper(".main-visual", {
    // Optional parameters
    
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

  ///////////////////////////////////////
});




// $(function(){

//   // nav에 손을올려야 펼쳐지는 형태
//   $('.Hamburger').mouseenter(function(){
//       // 헤더의 높이가 길어지면서, 하위뎁스가 보이는 형태
//       $('.gnb').stop(true).animate({height: '500px'});
//   }).stop(true).mouseleave(function(){
//       // 헤더의 높이가 원래의 높이 '80px'로 돌아감
//       $('.gnb').stop(true).animate({height: '100px'});
//   });

// /////////fin///////////
// });
