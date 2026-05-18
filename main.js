const screen = document.getElementById('screen')
const ctx = screen.getContext('2d')

let scale;
let zoomLevel = window.devicePixelRatio;
let isFullScreen = window.matchMedia('(display-mode: fullscreen)').matches;

function resizeScreen(GAME_WIDTH, GAME_HEIGHT) {
	const windowWidth = window.innerWidth;
	const windowHeight = window.innerHeight;

	// Calculate scale to fit screen
	scale = Math.min(windowWidth / GAME_WIDTH, windowHeight / GAME_HEIGHT);

	// Set the displayed size (CSS pixels)
	screen.style.width = GAME_WIDTH * scale + 'px';
	screen.style.height = GAME_HEIGHT * scale + 'px';

	// Set the internal resolution (game logic size)
	screen.width = GAME_WIDTH;
	screen.height = GAME_HEIGHT;
}

resizeScreen(1080, 2400)

function draw(){
    // Clear Screen
    ctx.clearRect(0, 0, 1080, 2400)
    // Screen Resize
    if(zoomLevel != window.devicePixelRatio){
        resizeScreen(1080, 2400)
        zoomLevel = window.devicePixelRatio
    }
    if(isFullScreen != window.matchMedia('(display-mode: fullscreen)').matches){
        setTimeout(() => resizeScreen(1080, 2400), 100)
        isFullScreen = window.matchMedia('(display-mode: fullscreen)').matches
    }
    // Frame Update
    requestAnimationFrame(draw)
}
draw()