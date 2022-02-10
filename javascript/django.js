_slideCounter = 0;
_numSlides = 0;
_animating = false;

$(document).ready(function() {
  _numSlides = $('.slides .slide').length;
  
  _slideCounter = parseInt($('.slides .slide.current').data('index'));
  
  $('.carousel .arrow.prev').click(prevSlide);
  $('.carousel .arrow.next').click(nextSlide);
  
  $('html').keyup(function (e) {
    if (e.keyCode == 39) {
      nextSlide(e);
      return;
    }
    
    if (e.keyCode == 37) {
      prevSlide(e);
      return;
    }
  });
});

function prevSlide(e) {
  e.preventDefault();
  if (_animating) {
    return;
  }

  if (_slideCounter == 0) {
    var nextIdx = _numSlides - 1;
  } else {
    var nextIdx = (_slideCounter - 1) % _numSlides;
  }

  slideCarousel(nextIdx, false)
}

	function nextSlide(e) {
    if (_animating) {
      return;
    }
    
		var nextIdx =(_slideCounter+1)%_numSlides;

		slideCarousel(nextIdx, true);		
	}



function slideCarousel(nextIdx, left) {

  var duration = 10;

  var curSlide = $('.slides .slide.current');
  var slides = $('.slides .slide');
  var nextSlide = $(slides[nextIdx]);

  var screenWidth = $('.carousel').width();

  //the length the animation will be proportional to the width of the screen
  duration = duration * screenWidth * 0.1;

  //get next slide into position

  //set next slide off screen on the left side
  var rightOnScreen = screenWidth;
  if (!left) {
    //set next slide off screen on the right side
    rightOnScreen = screenWidth * -1;
  }

  nextSlide.css({
    'display': 'block',
    'left': rightOnScreen + 'px'
  });

  //slide curSlide off screen
  var rightOffScreen = $('.carousel').width();

  if (left) {
    rightOffScreen = rightOffScreen * -1;
  }

  _animating = true;
  //Initiate the animation for both slides
  curSlide.animate({
    left: rightOffScreen + 'px',
  }, {
    duration: duration,
    queue: false,
    complete: curSlideOutComplete
  });

  nextSlide.animate({
    left: '0px',
  }, {
    duration: duration,
    queue: false,
    complete: nextSlideInComplete
  });

  function curSlideOutComplete() {
    //remove the current class
    curSlide.removeClass('current');

    //clear the inline styles created by jquery animation
    curSlide.attr('style', '');
    _animating = false;
  }

  function nextSlideInComplete() {
    //remove the current class
    nextSlide.addClass('current');


    //clear the inline styles created by jquery animation
    nextSlide.attr('style', '');
  }
  
  _slideCounter = nextIdx;
}
