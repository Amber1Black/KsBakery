function WithDotsSlider(sliderId) {
  let slideIndex = 1;
  showSlides(slideIndex, sliderId);

  function plusDotsSlides(n) {
      showSlides(slideIndex += n, sliderId);
  }

  function currentDotsSlide(n, sliderId) {
      showSlides(slideIndex = n, sliderId);
  }

  function showSlides(n, sliderId) {
      const slides = document.querySelectorAll(`#${sliderId} .slide`);
      const dots = document.querySelectorAll(`#${sliderId}-dots .dot`);
      if (n > slides.length) { slideIndex = 1; }
      if (n < 1) { slideIndex = slides.length; }

      slides.forEach(slide => { slide.style.display = "none"; });
      dots.forEach(dot => { dot.classList.remove('active-dot'); });

      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].classList.add('active-dot');
  }

  // Expose the plusDotsSlides and currentDotsSlide functions to be called from HTML
  window.plusDotsSlides = plusDotsSlides;
  window.currentDotsSlide = currentDotsSlide;
}
