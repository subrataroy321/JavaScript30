
// DOM elements
const player = document.querySelector('.player')
const video = document.querySelector('.viewer')
const playButton = document.querySelector('.toggle')
const skipButtons = document.querySelectorAll('[data-skip]')
const playbackSlider = document.querySelector('[name="playbackRate"]')
const sliders = document.querySelectorAll('.player__slider')
const progress = document.querySelector('.progress__filled')
const progressBar = document.querySelector('.progress')
const fullscreenButton = document.querySelector('.fullscreen__button')

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
    video.currentTime += parseFloat(time.skip) 
}

skipButtons.forEach(button => {
    button.addEventListener('click', () => skipVideo(button.dataset))
})

sliders.forEach(slider => {
    slider.addEventListener('change', () => {
        video[slider.name] = slider.value;
    } )
})

video.addEventListener('timeupdate', () => {
    const percent = (video.currentTime / video.duration) * 100 ;
    progress.style.flexBasis = `${percent}%`
})

progressBar.addEventListener('click', (e) => {
    const scrubTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
})

fullscreenButton.addEventListener('click', () => {
    video.requestFullscreen()
    console.log(requestFullscreen)
})