// For Random Start Play Button
let randomStart = document.querySelector("#start-song-random");
randomStart.addEventListener('click', () => {
    if(music.play){
        music.play();
        masterPlay.classList.add('fa-pause');
        masterPlay.classList.remove('fa-play');
    }else{
        music.pause();
        masterPlay.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
    }
});






// For Follow Button
let followBtn = document.querySelector(".f-btn");
followBtn.addEventListener('click', () => {
    if(followBtn.innerText === 'Follow'){
        followBtn.innerText = 'Following';
        followBtn.style.width = '75px';
        followBtn.style.backgroundColor = 'transparent';
        followBtn.style.border = '1.8px solid white';
    }else{
        followBtn.innerText = 'Follow';
        followBtn.style.border = '1px solid rgba(255, 255, 255, 0.411)';
        followBtn.style.backgroundColor = 'transparent';
        followBtn.style.width = '65px';
    }
});







// AUDIO
const music = new Audio('assets/songs/1.mp3');

const listsongs = [
    {
        id: '1',
        songName: `<a href="#">Timeless(feet Playboi Carti)</a>`,
        poster: "assets/1.jpg",
    },
    {
        id: '2',
        songName: `<a href="#">One Of The Girls(with JENNIE,Lily Rose Depp)</a>`,
        poster: "assets/2.jpg",
    },
    {
        id: '3',
        songName: `<a href="#">Starboy</a>`,
        poster: "assets/3.jpg",
    },
    {
        id: '4',
        songName: `<a href="#">Call Out My Name</a>`,
        poster: "assets/4.jpg",
    },
    {
        id: '5',
        songName: `<a href="#">I Was Never There(The Weeknd, Gesaffelstein)</a>`,
        poster: "assets/5.jpg",
    },
    {
        id: '6',
        songName: `<a href="#">After Hours</a`,
        poster: "assets/6.jpg",
    },
    {
        id: '7',
        songName: `<a href="#">Dancing In The Flames</a>`,
        poster: "assets/7.jpg",
    },
]




// For img change according to the selected song
Array.from(document.getElementsByClassName('row1')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = listsongs[i].poster;
});






//For Music, Play and Pause in Progress Bar
let masterPlay = document.querySelector("#playBtn");
masterPlay.addEventListener('click', () => {
    if(music.paused || music.currentTime <= 0){
        music.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }else{
        music.pause();
        masterPlay.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
    }
})





// For Music Play on Hover, Poster Change and Title as well
let index = 0;
let posterImgBar = document.getElementById('mp1');
let s_title = document.getElementById('title');
let bi_pauseIcon = document.getElementById('1');
Array.from(document.getElementsByClassName('bi-play-fill')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        music.src = `assets/songs/${index}.mp3`;
        posterImgBar.src = `assets/${index}.jpg`;
        music.play();
        if(music.play){
            music.play();
            masterPlay.classList.add('fa-pause');
            masterPlay.classList.remove('fa-play');

        }else{
            music.pause();
            masterPlay.classList.add('fa-play');
            masterPlay.classList.remove('fa-pause');
        }

        let songTitle = listsongs.filter((els) => {
            return els.id == index;
        });

        songTitle.forEach(elss => {
            let {songName} = elss;
            s_title.innerHTML = songName;
        });

    });
});






// For run minute, seconds and progress seek as well 
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let progress = document.getElementById('progress');
let bar2 = document.getElementById('bar2');
let dot = document.querySelector('.dot');

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if(sec2 < 10){
        sec2 = `0${sec2}`; 
    }
    currentStart.innerText = `${min2}: ${sec2}`;


    let progressBar = parseInt((music_curr / music_dur) * 100);
    progress.value = progressBar;

    let seekbar = progress.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`

});
// For progress touch to skip
progress.addEventListener('change', () => {
    music.currentTime = progress.value * music.duration / 100;
});










// For Volume Bar
let vol_icon = document.getElementById('volumeBtn');
let vol_input = document.getElementById('vol_input');
let vol_bar = document.getElementsByClassName('vol_bar')[0];


vol_input.addEventListener('change', () => {
    if(vol_input.value > 50){
        vol_icon.classList.add('fa-volume-high');
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.remove('fa-volume-xmark');
    }

    if(vol_input.value < 50){
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.add('fa-volume-low');
        vol_icon.classList.remove('fa-volume-xmark');
    }

    if(vol_input.value == 0){
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.add('fa-volume-xmark');
    }

    

    let vol_a = vol_input.value;
    vol_bar.style.width = `${vol_a}%`;
    music.volume = vol_a / 100;
});







// Next and Previous Song Play Button
let back = document.getElementById('backward');
let next = document.getElementById("forward");

back.addEventListener('click', () => {
    index -= 1;
    if(index < 1){
        index = Array.from(document.getElementsByClassName('row1')).length;
    }
    music.src = `assets/songs/${index}.mp3`;
    posterImgBar.src = `assets/${index}.jpg`;
    music.play();
    if(music.play){
        music.play();
        masterPlay.classList.add('fa-pause');
        masterPlay.classList.remove('fa-play');
    }else{
        music.pause();
        masterPlay.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
    }

    let songTitle = listsongs.filter((els) => {
        return els.id == index;
    });

    songTitle.forEach(elss => {
        let {songName} = elss;
        s_title.innerHTML = songName;
    });    
});

next.addEventListener('click', () => {
    index ++;
    if(index > Array.from(document.getElementsByClassName('row1')).length){
        index =1;
    }
    music.src = `assets/songs/${index}.mp3`;
    posterImgBar.src = `assets/${index}.jpg`;
    music.play();
    if(music.play){
        music.play();
        masterPlay.classList.add('fa-pause');
        masterPlay.classList.remove('fa-play');
    }else{
        music.pause();
        masterPlay.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
    }

    let songTitle = listsongs.filter((els) => {
        return els.id == index;
    });

    songTitle.forEach(elss => {
        let {songName} = elss;
        s_title.innerHTML = songName;
    });   
});






// For Shuffle and Repeat button
let music_shuffle = document.getElementById('shuffle');
let music_repeat = document.getElementById('repeat');

music_shuffle.addEventListener('click', () => {
    index ++;
    if(index > Array.from(document.getElementsByClassName('row1')).length){
        index =1;
    }
    music.src = `assets/songs/${index}.mp3`;
    posterImgBar.src = `assets/${index}.jpg`;
    music.play();
    if(music.play){
        music.play();
        masterPlay.classList.add('fa-pause');
        masterPlay.classList.remove('fa-play');
        music_shuffle.style.color = 'green';
    }else{
        music.pause();
        masterPlay.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
        music_shuffle.style.color = 'rgb(143, 143, 143);';
    }

    let songTitle = listsongs.filter((els) => {
        return els.id == index;
    });

    songTitle.forEach(elss => {
        let {songName} = elss;
        s_title.innerHTML = songName;
    });   
});

music_repeat.addEventListener('click', () => {
    if(music.currentTime = 0){
        music.play();
        masterPlay.classList.add('fa-pause');
        masterPlay.classList.remove('fa-play');
        music_repeat.style.color = 'green';
    }else{
        music_shuffle.style.color = 'rgb(143, 143, 143);';
    }
});







// For Favourate List
// let heart = document.getElementById('music-heart');
// let f_list = document.getElementsByClassName('f-list');

// let count = 1;
// heart.addEventListener('click', () => {
//     if(count = 1){
//         let newEle = document.createElement('ul');
//         newEle.innerHTML = `${}`
//     }
// })