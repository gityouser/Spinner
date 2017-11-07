var ics = document.querySelector('.ics');
var moverWidth = 0;
var moverHeight = 0;
var spinner = 0;
var width = document.body.offsetWidth - 150;
var height = document.body.offsetHeight - 150;
var swichTrack1;
var swichTrack2;
var swichTrack3;


function moveIcs() {
  var spin = `rotate(${-spinner}deg)`;
  spinner+=10;
  ics.style.transform = spin;

  if ((moverWidth <= 0) && (moverHeight <= 0)) {
    swichTrack1 = false;
  }
  if (moverWidth >= width) {
      swichTrack1 = true;
  }
  if (moverHeight <= height) {
      swichTrack2 = false;
  }
  if (moverHeight >= height) {
      swichTrack1 = false;
      swichTrack2 = true;
  }

  if (moverWidth >= 0) {
    swichTrack3 = false;
  }

  if ((moverWidth <= 0) && (moverHeight >= 0)) {
      swichTrack2 = false;
      swichTrack3 = true;
  }

  if ((swichTrack1 == false) && (swichTrack2  == false)) {
    if ( swichTrack3 == false){
    ics.style.left = `${moverWidth}px`;
    moverWidth+=10;
    console.log(`Increasing left ${moverWidth}px`);
    }
  }
  if (swichTrack1 == true) {
    ics.style.top = `${moverHeight}px`
    moverHeight+=10;
    console.log(`Increasing top ${moverHeight}px`);
  }
  if (swichTrack2 == true) {
    // ics.style.left = width;
    ics.style.left = `${moverWidth}px`;
    moverWidth-=10;
    console.log(`Reducing left ${moverWidth}px`);
  }

  if (swichTrack3 == true) {
    ics.style.top = `${moverHeight}px`
    moverHeight-=10;
    console.log(`Reducing top ${moverHeight}px`);
  }

  requestAnimationFrame(moveIcs);
}

  requestAnimationFrame(moveIcs);
