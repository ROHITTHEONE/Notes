const track2 = document.querySelector('.track2');
const carousel2 = document.querySelector('.carousel2');

let moving2 = false;
let initialPosition2 = null;
let transform2 = 0;
let lastPosition2 = 0;

function gestureStart(e) {

  initialPosition2 =  e.pageX;
  moving2 = true;
  const matrix = window.getComputedStyle(track2).getPropertyValue('transform');
  if (matrix !== "none") {
    transform2 =  parseInt(matrix.split(',')[4].trim());
  }

}

function gestureMove(e) {

if(moving2) {
    const currentPosition = e.pageX;
    const diff = currentPosition - initialPosition2;
    if(e.pageX - lastPosition2 > 0) {
      if ((transform2 + diff) > 0) {
        return;
      }
    } else {
      if ((Math.abs(transform2 + diff)) > (track2.offsetWidth - carousel2.offsetWidth + 20) ){
        return;
      }
    }
    track2.style.transform = 'translateX(' + (transform2 + diff) + 'px)';
  }
  lastPosition2 = e.pageX;

}

function gestureEnd() {
  moving2 = false;
}




if(window.PointerEvent) {

  carousel2.addEventListener('pointerdown', gestureStart);
  carousel2.addEventListener('pointermove', gestureMove);
  carousel2.addEventListener('pointerup', gestureEnd);

} else {

  carousel2.addEventListener('touchdown', gestureStart);
  carousel2.addEventListener('touchmove', gestureMove);
  carousel2.addEventListener('touchup', gestureEnd);

  carousel2.addEventListener('mousedown', gestureStart);
  carousel2.addEventListener('mousemove', gestureMove);
  carousel2.addEventListener('mouseup', gestureEnd);

}
