$(document).ready(function(){

    $(window).on('scroll',function(){
  
      let link = $('.navbar a.dot');
      let top = $(window).scrollTop();
  
      $('.sec').each(function(){
        let id = $(this).attr('id');
        let height = $(this).height();
        let offset = $(this).offset().top - 150;
        if(top >= offset && top < offset + height){
          link.removeClass('active');
          $('.navbar').find('[data-scroll="' + id + '"]').addClass('active');
        }
      });
  
    });
  
  });
  
  let toggleMenu = document.querySelector(".toggleMenu");
  let navigation = document.querySelector(".navigation");
  
  toggleMenu.addEventListener("click", ()=>{
  navigation.classList.toggle('active');
  })
  