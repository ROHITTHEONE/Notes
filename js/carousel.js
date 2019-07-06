const track = document.querySelector('.track');
const carousel = document.querySelector('.carousel');

let moving = false;
let initialPosition = null;
let transform = 0;
let lastPosition = 0;

function gestureStart(e) {

  initialPosition =  e.pageX;
  moving = true;
  const matrix = window.getComputedStyle(track).getPropertyValue('transform');
  if (matrix !== "none") {
    transform =  parseInt(matrix.split(',')[4].trim());
  }

}

function gestureMove(e) {

if(moving) {
    const currentPosition = e.pageX;
    const diff = currentPosition - initialPosition;
    if(e.pageX - lastPosition > 0) {
      if ((transform + diff) > 0) {
        return;
      }
    } else {
      if ((Math.abs(transform + diff)) > (track.offsetWidth - carousel.offsetWidth + 20) ){
        return;
      }
    }
    track.style.transform = 'translateX(' + (transform + diff) + 'px)';
  }
  lastPosition = e.pageX;

}

function gestureEnd() {
  moving = false;
}




if(window.PointerEvent) {

  carousel.addEventListener('pointerdown', gestureStart);
  carousel.addEventListener('pointermove', gestureMove);
  carousel.addEventListener('pointerup', gestureEnd);

} else {

  carousel.addEventListener('touchdown', gestureStart);
  carousel.addEventListener('touchmove', gestureMove);
  carousel.addEventListener('touchup', gestureEnd);

  carousel.addEventListener('mousedown', gestureStart);
  carousel.addEventListener('mousemove', gestureMove);
  carousel.addEventListener('mouseup', gestureEnd);

}
