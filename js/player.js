function openVideo(e) {
	var idAtual = e;
			player = new YT.Player('player', {
			  height: '630',
			  width: '1122',
			  videoId: idAtual,
			  playerVars: {rel: 0, modestbranding: 1, showinfo: 0, controls: 0},
			  events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
			  }
			});
	document.getElementById('playerfloat').style.visibility='visible';
	document.getElementById('playerfloat').style.zIndex="100";
}  


function hidePlayer(){
	document.getElementById('playerfloat').style.visibility='hidden';
	document.getElementById('playerfloat').style.zIndex="-100";
	setup();
	player.destroy();
}


// autoplay video
function onPlayerReady(event) {
	event.target.playVideo();
	pauseTimer();

}

// when video ends
function onPlayerStateChange(event) {        
	if(event.data === 0) {      
		setup();      
		hidePlayer();
	}
}