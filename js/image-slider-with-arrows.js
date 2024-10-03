function ArrowImageSlider(sliderId) {
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusArrowSlides(n) {
      showSlides(slideIndex += n);
  }

  function showSlides(n) {
      const slides = document.querySelectorAll(`#${sliderId} .slide`);
      if (n > slides.length) { slideIndex = 1; }
      if (n < 1) { slideIndex = slides.length; }
      
      slides.forEach(slide => { slide.style.display = "none"; });
      slides[slideIndex - 1].style.display = "block";
  }

  const prevArrow = document.querySelector(`#${sliderId} .prev-arrow`);
  const nextArrow = document.querySelector(`#${sliderId} .next-arrow`);

  if (prevArrow && nextArrow) {
    prevArrow.addEventListener('click', () => plusArrowSlides(-1));
    nextArrow.addEventListener('click', () => plusArrowSlides(1));
  }
}

// Initialize sliders based on class
document.querySelectorAll('.slider-container').forEach(slider => {
  const sliderId = slider.id;
  ArrowImageSlider(sliderId);
});
