const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
//progress bar
const progressBar = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
//play toggle
const playToggle = document.querySelector('.toggle');
//volume
const volumeSlide =
document.querySelector('input[name="volume"]');
//speed slider
const playbackSlide =
document.querySelector('input[name="playbackRate"]');
// back 10s
const back10 =
document.querySelector('button[data-skip="-10"]');
//foward 25s
const foward25 =
document.querySelector('button[data-skip="25"]');

const controls = [
  playToggle,
  playToggle,
  volumeSlide,
  playbackSlide,
  back10,
  foward25
];

function playToggleFunc() {
  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton(e) {
  const icon = this.paused ? '►' : '❚ ❚';
  playToggle.textContent = icon
}

function skip() {
  video.currentTime += Number(this.dataset.skip);
}

function handleSlide() {
   video[this.name] = this.value;
}

function handleProgress() {

  const progress = (video.currentTime / video.duration) * 100;
  progressFilled.style.flexBasis = `${progress}%`;
}

function scrub(e) {
  const spot = (e.offsetX / progressBar.offsetWidth) * video.duration;
  console.log(  spot );
  video.currentTime = spot;
  // video.currentTime = (spot /video.duration )
  progressFilled.style.flexBasis = `${spot}%`;
}

video.addEventListener('click', playToggleFunc);
video.addEventListener('play', updateButton);
video.addEventListener('pause',  updateButton);
playToggle.addEventListener('click', playToggleFunc);

back10.addEventListener('click', skip);
foward25.addEventListener('click', skip);

volumeSlide.addEventListener('change', handleSlide);
playbackSlide.addEventListener('change', handleSlide);

video.addEventListener('timeupdate', handleProgress);
progressBar.addEventListener('click', scrub);
progressBar.addEventListener('click', scrub);

// Make Fullscreen work!!!


// console.log(controls);
//
// controls.forEach(control => control.addEventListener('click', onClick));
