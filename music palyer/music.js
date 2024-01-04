const musicContainer = document.querySelector(".music-container");
const playbtn = document.querySelector("#play");
const prevbtn = document.querySelector("#prev");
const nextbtn = document.querySelector("#next");
const audio = document.querySelector("#audio");
let progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
const title = document.querySelector("#title");
const cover = document.querySelector("#cover");
let srcElement = document.querySelector(".src");

// songs title
let song = ["interstellar", "oppenheimer", "docking"];

// track of songs
let songIndex = 0;

loadSong(song[songIndex]);

function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpeg`;
  //   audio.play()
}

function pausesong() {
  musicContainer.classList.remove("play");
  playbtn.querySelector("i.fas").classList.add("fa-play");
  playbtn.querySelector("i.fas").classList.remove("fa-pause");
  audio.pause();
}

function playsong() {
  musicContainer.classList.add("play");
  playbtn.querySelector("i.fas").classList.remove("fa-play");
  playbtn.querySelector("i.fas").classList.add("fa-pause");
  audio.play();
}
function prevsong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = song.length - 1;
  }
  loadSong(song[songIndex]);

  if (pausesong == true) {
    pausesong();
  } else {
    playsong();
  }
}

function nextsong() {
  songIndex = songIndex + 1;
  if (songIndex > song.length - 1) {
    songIndex = 0;
  }
  loadSong(song[songIndex]);
  pausesong;

  if (pausesong == true) {
    pausesong();
  } else {
    playsong();
  }
}

function updateProgress() {
  let { duration, currentTime } = srcElement;
  let progressPercent = (currentTime / duration) * 100;
  console.log(progressPercent);
  progress.style.width = `${progressPercent}`;
}

//  event listerns
playbtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");

  if (isPlaying) {
    pausesong();
  } else {
    playsong();
  }
});

prevbtn.addEventListener("click", prevsong);
nextbtn.addEventListener("click", nextsong);
audio.addEventListener("timeupdate", updateProgress);
