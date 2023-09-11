console.log("Welcome to spotify");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');

let myProgressBar = document.getElementById('myProgressBar');
let gift = document.getElementById('gift');
let MastersongName = document.getElementById('MastersongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [

    { songName: "  Duniya", filepath: "songs/1.mp3", coverPath: "cover/1.jpg" },

    { songName: "let me love you", filepath: "songs/2.mp3", coverPath: "cover/2.jpg" },

    { songName: " Peaky Blinder ", filepath: "songs/3.mp3", coverPath: "cover/0.jpg" },
    { songName: " Tum Hi Ho", filepath: "songs/4.mp3", coverPath: "cover/4.jpg" },
    { songName: " Safari", filepath: "songs/7.mp3", coverPath: "cover/5.jpg" },
    { songName: " Photo - Duniya ", filepath: "songs/1.mp3", coverPath: "cover/1.jpg" },
    { songName: " Chahun main ya na ", filepath: "songs/4.mp3", coverPath: "cover/4.jpg" },
    { songName: "  Bhula diya tujhe  ", filepath: "songs/1.mp3", coverPath: "cover/4.jpg" },

]

songItems.forEach((element, i) => {


    element.getElementsByTagName("img")[0].src = songs[i].coverPath;

    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

});


///listen to event

//handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {

        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gift.style.opacity = 1;
    }
    else {

        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gift.style.opacity = 0;

    }

})

audioElement.addEventListener('timeupdate', () => {

    //update seekbar

    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', () => {

    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;

})
const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {


        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })

}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlay();
        
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        MastersongName.innerText=songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gift.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {

        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime - 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');



})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {

        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    MastersongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');



})
