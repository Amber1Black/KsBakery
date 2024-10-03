function ArrowImageSlider(sliderId) {
  let slideIndex = 1;
  showSlides(slideIndex, sliderId);

  function plusArrowSlides(n) {
      showSlides(slideIndex += n, sliderId);
  }

  function showSlides(n, sliderId) {
      const slides = document.querySelectorAll(`#${sliderId} .slide`);
      if (n > slides.length) { slideIndex = 1; }
      if (n < 1) { slideIndex = slides.length; }
      
      slides.forEach(slide => { slide.style.display = "none"; });
      slides[slideIndex - 1].style.display = "block";
  }

  // Expose the plusArrowSlides function to be called from HTML
  window.plusArrowSlides = plusArrowSlides;
}
