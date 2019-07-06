const track4 = document.querySelector('.track4');
const carousel4 = document.querySelector('.carousel4');

let moving4 = false;
let initialPosition4 = null;
let transform4 = 0;
let lastPosition4 = 0;

function gestureStart(e) {

  initialPosition4 =  e.pageX;
  moving4 = true;
  const matrix = window.getComputedStyle(track4).getPropertyValue('transform');
  if (matrix !== "none") {
    transform4 =  parseInt(matrix.split(',')[4].trim());
  }

}

function gestureMove(e) {

if(moving4) {
    const currentPosition = e.pageX;
    const diff = currentPosition - initialPosition4;
    if(e.pageX - lastPosition4 > 0) {
      if ((transform4 + diff) > 0) {
        return;
      }
    } else {
      if ((Math.abs(transform4 + diff)) > (track4.offsetWidth - carousel4.offsetWidth + 20) ){
        return;
      }
    }
    track4.style.transform = 'translateX(' + (transform4 + diff) + 'px)';
  }
  lastPosition4 = e.pageX;

}

function gestureEnd() {
  moving4 = false;
}




if(window.PointerEvent) {

  carousel4.addEventListener('pointerdown', gestureStart);
  carousel4.addEventListener('pointermove', gestureMove);
  carousel4.addEventListener('pointerup', gestureEnd);

} else {

  carousel4.addEventListener('touchdown', gestureStart);
  carousel4.addEventListener('touchmove', gestureMove);
  carousel4.addEventListener('touchup', gestureEnd);

  carousel4.addEventListener('mousedown', gestureStart);
  carousel4.addEventListener('mousemove', gestureMove);
  carousel4.addEventListener('mouseup', gestureEnd);

}
