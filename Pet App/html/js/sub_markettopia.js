$(function(){
  
  // 스와이퍼
  var swiper = new Swiper(".main-visual", {
    // Optional parameters
    direction: "horizontal", //슬라이드 방향 가로방향이 디폴트
        loop: true, //반복여부
        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

    
  });
  // //스와이퍼

  // 스와이퍼2
  var swiper = new Swiper(".main-visual2", {
    // Optional parameters
    direction: "horizontal", //슬라이드 방향 가로방향이 디폴트
    
        slidesPerView: 2.5,
        spaceBetween: 10,
  });
  // //스와이퍼2

   // 스와이퍼3
   var swiper = new Swiper(".main-visual3", {
    // Optional parameters
    direction: "horizontal", //슬라이드 방향 가로방향이 디폴트
    
        slidesPerView: 2.5,
        spaceBetween: 10,
  });
  // //스와이퍼3

  // 스와이퍼4
  var swiper = new Swiper(".main-visual4", {
    // Optional parameters
    direction: "horizontal", //슬라이드 방향 가로방향이 디폴트
    
        slidesPerView: 3.5,
        spaceBetween: 20,
  });
  // //스와이퍼4

  const trigger = document.querySelector('.tip-trigger');
  const modal = document.querySelector('.tip-modal');

  trigger.addEventListener('click', () => {
    modal.classList.add('active');
  });

  modal.addEventListener('click', (e) => {
    // 모달 바깥쪽 클릭하면 닫힘
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });












///////////////
});