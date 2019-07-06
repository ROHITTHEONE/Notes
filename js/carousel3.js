const track3 = document.querySelector('.track3');
const carousel3 = document.querySelector('.carousel3');

let moving3 = false;
let initialPosition3 = null;
let transform3 = 0;
let lastPosition3 = 0;

function gestureStart(e) {

  initialPosition3 =  e.pageX;
  moving3 = true;
  const matrix = window.getComputedStyle(track3).getPropertyValue('transform');
  if (matrix !== "none") {
    transform3 =  parseInt(matrix.split(',')[4].trim());
  }

}

function gestureMove(e) {

if(moving3) {
    const currentPosition = e.pageX;
    const diff = currentPosition - initialPosition3;
    if(e.pageX - lastPosition3 > 0) {
      if ((transform3 + diff) > 0) {
        return;
      }
    } else {
      if ((Math.abs(transform3 + diff)) > (track3.offsetWidth - carousel3.offsetWidth + 20) ){
        return;
      }
    }
    track3.style.transform = 'translateX(' + (transform3 + diff) + 'px)';
  }
  lastPosition3 = e.pageX;

}

function gestureEnd() {
  moving3 = false;
}




if(window.PointerEvent) {

  carousel3.addEventListener('pointerdown', gestureStart);
  carousel3.addEventListener('pointermove', gestureMove);
  carousel3.addEventListener('pointerup', gestureEnd);

} else {

  carousel3.addEventListener('touchdown', gestureStart);
  carousel3.addEventListener('touchmove', gestureMove);
  carousel3.addEventListener('touchup', gestureEnd);

  carousel3.addEventListener('mousedown', gestureStart);
  carousel3.addEventListener('mousemove', gestureMove);
  carousel3.addEventListener('mouseup', gestureEnd);

}
