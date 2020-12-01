
// DOM elements
const player = document.querySelector('.player')
const video = document.querySelector('.viewer')
const playButton = document.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')

const togglePlay = () => {
    if (video.paused) {
        video.play(); 
        //playButton.innerText = '❚❚'
    } else {
        video.pause();
        //playButton.innerText = '►'
    }
}

const updateButton = () => {
    video.paused ? playButton.innerText = '►' : playButton.innerText = '❚❚';
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

playButton.addEventListener('click', togglePlay);

const skipVideo = (time) => {
    video.currentTime += parseInt(time.skip) 
}

skipButtons.forEach(button => {
    button.addEventListener('click', () => skipVideo(button.dataset))
})