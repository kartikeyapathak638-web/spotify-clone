console.log("hello world");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let audioElement = new Audio("Song1.mp3");
let songIndex = 0;
let songsItems = Array.from(document.getElementsByClassName("songItem"));
let songs = [ {songName: "Lutt Le Gya", filePath: "Song1.mp3", coverPath: "cover1.webp"}, {songName: "Spain", filePath: "Song2.mp3", coverPath: "cover2.webp"}, {songName: "White Brown Black", filePath: "Song3.mp3", coverPath: "cover3.webp"}, {songName: "Brown Munde", filePath: "Song4.mp3", coverPath: "cover4.webp"}, {songName: "WE Rollin", filePath: "Song5.mp3", coverPath: "cover5.webp"}, {songName: "8 Parche", filePath: "Song6.mp3", coverPath: "cover6.webp"}, {songName: "Yaar Na Miley", filePath: "Song7.mp3", coverPath: "cover7.webp"}, {songName: "Cheques", filePath: "Song8.mp3", coverPath: "cover8.webp"}, {songName: "Jalebi", filePath: "Song9.mp3", coverPath: "cover9.webp"}, ];

songsItems.forEach((element, i) => {
    console.log(element, i);
        element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    });

     masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.add("fa-play-circle");
        masterPlay.classList.remove("fa-pause-circle");
        gif.style.opacity = 1;

   
    }else{
      audioElement.pause();
      masterPlay.classList.add("fa-pause-circle");
      masterPlay.classList.remove("fa-play-circle");
      gif.style.opacity = 0;
    }
});

audioElement.addEventListener("timeupdate", ()=>{
   
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
});
audioElement.addEventListener("ended", ()=>{
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
});

myProgressBar.addEventListener("change", ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
});
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    });
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click", (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src = `Song${songIndex }.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();    
        gif.style.opacity = 1;
    masterPlay.classList.add("fa-pause-circle");
        masterPlay.classList.remove ("fa-play-circle");
    });
});