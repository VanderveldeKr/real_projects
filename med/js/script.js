function rearrangeElements() {
    const a3 = document.querySelector('.js-bias-info');
    const a4 = document.querySelector('.js-clinic-table')
    const nado = document.querySelector('.js-bias-img');
    const nadoOne = document.querySelector('.js-clinic-container')
  
    if (window.innerWidth < 720) {
      nado.before(a3);
      nadoOne.after(a4);
    }
  }
  
  // Вызов функции при изменении размера окна
  window.addEventListener('resize', rearrangeElements);



  const slides = document.querySelectorAll('.form-slide');
  const progressBar = document.querySelector('.progress');
  const nextBtns = document.querySelectorAll('.next-btn');
  const backBtns = document.querySelectorAll('.back-btn');
//   const progressStatus = document.querySelector('.progress-status');
  
  let currentSlide = 0;
  
  const showSlide = (slideIndex) => {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
    slides[slideIndex].classList.add('active');
  };
  
//   const updateProgress = () => {
//     const progress = ((currentSlide + 1) / slides.length) * 100;
//     progressBar.style.width = `${progress}%`;
//     progressStatus.textContent = `${currentSlide + 1}/${slides.length}`;
//   };
  
  nextBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      currentSlide++;
      showSlide(currentSlide);
      updateProgress();
    });
  });
  
  backBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      currentSlide--;
      showSlide(currentSlide);
      updateProgress();
    });
  });
  
  jQuery(document).ready(function () {
       
       $(".phone").mask("+7 (999) 999-99-99"); 
      
     
      jQuery('.send-form').click( function() {
          var form = jQuery(this).closest('form');
          
          if ( form.valid() ) {
              form.css('opacity','.5');
              var actUrl = form.attr('action');
  
              jQuery.ajax({
                  url: actUrl,
                  type: 'post',
                  dataType: 'html',
                  data: form.serialize(),
                  success: function(data) {
                      // form.html(data);
                      form.css('opacity','1');
                      // form.find('.status').html('форма отправлена успешно');
                      alert("форма отправлена успешно")
                      //$('#myModal').modal('show') // для бутстрапа
                  },
                  error:	 function() {
                       form.find('.status').html('серверная ошибка');
                  }
              });
          }
      });
  
  
  });