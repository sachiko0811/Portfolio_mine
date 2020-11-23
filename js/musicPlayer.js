/*
 * Icons by:
 * Font Awesome – http://fontawesome.io/
 * Those Icons – https://www.flaticon.com/authors/those-icons
 * EpicCoders – https://www.flaticon.com/authors/epiccoders
 * Smashicons – https://www.flaticon.com/authors/smashicons
 */

// $(document).ready(function () {
// 	var songs = [
// 		{
// 			title: "rockstar",
// 			artist: "Post Malone, 21 Savage",
// 			cover: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/rockstar-album-cover.jpg",
// 			audioFile: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/Post%20Malone%20-%20rockstar%20ft.%2021%20Savage%20(1).mp3",
// 			color: "#c3af50"
// 		},
// 		{
// 			title: "Let You Down",
// 			artist: "NF",
// 			cover: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/perception-album-cover.png",
// 			audioFile: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/NF%20-%20Let%20You%20Down.mp3",
// 			color: "#25323b"
// 		},
// 		{
// 			title: "Silence",
// 			artist: "Marshmello, Khalid",
// 			cover: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/silence-album-cover.jpg",
// 			audioFile: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/Marshmello%20-%20Silence%20ft.%20Khalid.mp3",
// 			color: "#c1c1c1"
// 		},
// 		{
// 			title: "I Fall Apart",
// 			artist: "Post Malone",
// 			cover: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/stoney-cover-album.jpg",
// 			audioFile: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/Post%20Malone%20-%20I%20Fall%20Apart.mp3",
// 			color: "#cd4829"
// 		},
// 		{
// 			title: "Fireproof",
// 			artist: "VAX, Teddy Sky",
// 			cover: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/fireproof-album-cover.jpeg",
// 			audioFile: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/VAX%20-%20Fireproof%20Feat%20Teddy%20Sky.mp3",
// 			color: "#5d0126"
// 		}
// 	];
	
// 	for (let song of songs) {
// 		$("#songs").append('<li class="song" data-audio="' + song.audioFile + '" data-color="'+ song.color +'">' + 
// 			'<img src="' + song.cover + '">' +
// 			'<p class="song-title">' + song.title + '</p>' +
// 			'<p class="song-artist">' + song.artist + '</p>' + 
// 			'</li>');
// 	}
	
// 	$('.jcarousel').jcarousel({
// 			wrap: 'circular'
// 	});
// });

// /*
//  * Replace all SVG images with inline SVG
//  */
// jQuery('img[src$=".svg"]').each(function(){
// 	var $img = jQuery(this);
// 	var imgID = $img.attr('id');
// 	var imgClass = $img.attr('class');
// 	var imgURL = $img.attr('src');

// 	jQuery.get(imgURL, function(data) {
// 		// Get the SVG tag, ignore the rest
// 		var $svg = jQuery(data).find('svg');

// 		// Add replaced image's ID to the new SVG
// 		if(typeof imgID !== 'undefined') {
// 			$svg = $svg.attr('id', imgID);
// 		}
// 		// Add replaced image's classes to the new SVG
// 		if(typeof imgClass !== 'undefined') {
// 			$svg = $svg.attr('class', imgClass+' replaced-svg');
// 		}

// 		// Remove any invalid XML tags as per http://validator.w3.org
// 		$svg = $svg.removeAttr('xmlns:a');

// 		// Replace image with new SVG
// 		$img.replaceWith($svg);

// 	}, 'xml');

// });

// // Current slide
// $('.jcarousel').on('jcarousel:visiblein', 'li', function(event, carousel) {
// 	let cover = $(this).find("img").attr("src");
// 	let songTitle = $(this).find("p.song-title").html();
// 	let songArtist = $(this).find("p.song-artist").html();
// 	let audioSrc = $(this).attr("data-audio");
// 	let backgroundColor = $(this).attr("data-color");
// 	$("body").css('background', backgroundColor)
// 	$("#background").css('background-image', 'url('+cover+')');
// 	$("audio").find("source").attr("src", ""+audioSrc+"");
// 	player.load();
// 	player.currentTime = 0;
// 	$("#song-info").find("img").attr("src", cover);
// 	$("#song-info .artist-wrap p").find("span.title").html(songTitle);
// 	$("#song-info .artist-wrap p").find("span.artist").html(songArtist);
// });

// // Previous slide
// $('#previous-btn').click(function() {
// 	$('.jcarousel').jcarousel('scroll', '-=1');
// 	$('#play-btn i').removeClass('fa-pause');
// 	player.pause();
// });

// // Next slide
// $('#next-btn').click(function() {
// 	if ($(".fa-random").hasClass('active')) {
// 		let songs = $("#songs li").length - 1;
// 		let randomSong = Math.floor(Math.random() * songs) + 1;
// 		$('.jcarousel').jcarousel('scroll', '+=' + randomSong);
// 	} else {
// 		$('.jcarousel').jcarousel('scroll', '+=1');
// 	}
// 	$('#play-btn i').removeClass('fa-pause');
// 	player.pause();
// });

// // Play Icon Switcher
// $('#play-btn').click(function() {
// 	$(this).find('i').toggleClass('fa-pause');
// });

// // Menu
// $("#menu-btn").click(function() {
// 	$("#content-wrap").addClass('inactive');
// 	$("#sidemenu").addClass('active');
// });

// // Home Button
// $("#home-btn").click(function() {
// 	$("#home-screen").addClass('active');
// 	$(".menu").removeClass('active');
// 	$("#content-wrap").addClass('minimized');
// });

// // App
// $(".app-icon").click(function() {
// 	$("#content-wrap").removeClass('minimized');
// 	setTimeout(function(){ $("#home-screen").removeClass('active'); }, 300);
// });

// // Overlay
// $("#overlay").click(function () {
// 	$("#content-wrap").removeClass('inactive');
// 	$("#sidemenu").removeClass('active');
// });

// // Options
// $("#options-btn").click(function() {
// 	$("#song-options").addClass('active');
// });

// // Bluetooth
// $("#bluetooth-btn").click(function() {
// 	$("#bluetooth-devices").addClass('active');
// });

// // Bluetooth Menu
// $("#bluetooth-devices ul li").click(function() {
// 	$(this).toggleClass('connected');
// 	$(this).siblings().removeClass('connected');
	
// 	if ($("#bluetooth-devices ul li").hasClass('connected')) {
// 		$("#sub-controls i.fa-bluetooth-b").addClass('active');
// 	} else {
// 		$("#sub-controls i.fa-bluetooth-b").removeClass('active');
// 	}
// });

// // Close Menu
// $(".close-btn").click(function() {
// 	$(".menu").removeClass('active');
// });

// $('#sub-controls i').click(function () {
// 	if(!$(this).hasClass('fa-bluetooth-b')) {
// 		$(this).toggleClass('active');
// 	}
	
// 	if ($("#heart-icon").hasClass('active')) {
// 		$("#heart-icon").removeClass('fa-heart-o');
// 		$("#heart-icon").addClass('fa-heart');
// 	} else {
// 		$("#heart-icon").removeClass('fa-heart');
// 		$("#heart-icon").addClass('fa-heart-o');
// 	}
// });

// /*
//  * Music Player
//  * By Greg Hovanesyan
//  * https://codepen.io/gregh/pen/NdVvbm
//  */

// var audioPlayer = document.querySelector('#content');
// var playpauseBtn = audioPlayer.querySelector('#play-btn');
// var progress = audioPlayer.querySelector('.progress');
// var sliders = audioPlayer.querySelectorAll('.slider');
// var player = audioPlayer.querySelector('audio');
// var currentTime = audioPlayer.querySelector('#current-time');
// var totalTime = audioPlayer.querySelector('#total-time');

// var draggableClasses = ['pin'];
// var currentlyDragged = null;

// window.addEventListener('mousedown', function(event) {
  
//   if(!isDraggable(event.target)) return false;
  
//   currentlyDragged = event.target;
//   let handleMethod = currentlyDragged.dataset.method;
  
//   this.addEventListener('mousemove', window[handleMethod], false);

//   window.addEventListener('mouseup', () => {
//     currentlyDragged = false;
//     window.removeEventListener('mousemove', window[handleMethod], false);
//   }, false);  
// });

// playpauseBtn.addEventListener('click', togglePlay);
// player.addEventListener('timeupdate', updateProgress);
// player.addEventListener('loadedmetadata', () => {
//   totalTime.textContent = formatTime(player.duration);
// });
// player.addEventListener('ended', function(){
//   player.currentTime = 0;
	
// 	if ($(".fa-refresh").hasClass('active')) {
// 		togglePlay();
// 	} else {
// 		if ($(".fa-random").hasClass('active')) {
// 			let songs = $("#songs li").length - 1;
// 			let randomSong = Math.floor(Math.random() * songs) + 1;
// 			$('.jcarousel').jcarousel('scroll', '+=' + randomSong);
// 		} else {
// 			$('.jcarousel').jcarousel('scroll', '+=1');
// 		}
// 		togglePlay();
// 	}
// });

// sliders.forEach(slider => {
//   let pin = slider.querySelector('.pin');
//   slider.addEventListener('click', window[pin.dataset.method]);
// });

// function isDraggable(el) {
//   let canDrag = false;
//   let classes = Array.from(el.classList);
//   draggableClasses.forEach(draggable => {
//     if(classes.indexOf(draggable) !== -1)
//       canDrag = true;
//   })
//   return canDrag;
// }

// function inRange(event) {
//   let rangeBox = getRangeBox(event);
//   let direction = rangeBox.dataset.direction;
// 	let screenOffset = document.querySelector("#screen").offsetLeft + 26;
// 	var min = screenOffset - rangeBox.offsetLeft;
// 	var max = min + rangeBox.offsetWidth;   
// 	if(event.clientX < min || event.clientX > max) { return false };
//   return true;
// }

// function updateProgress() {
//   var current = player.currentTime;
//   var percent = (current / player.duration) * 100;
//   progress.style.width = percent + '%';
  
//   currentTime.textContent = formatTime(current);
// }

// function getRangeBox(event) {
//   let rangeBox = event.target;
//   let el = currentlyDragged;
//   if(event.type == 'click' && isDraggable(event.target)) {
//     rangeBox = event.target.parentElement.parentElement;
//   }
//   if(event.type == 'mousemove') {
//     rangeBox = el.parentElement.parentElement;
//   }
//   return rangeBox;
// }

// function getCoefficient(event) {
//   let slider = getRangeBox(event);
// 	let screenOffset = document.querySelector("#screen").offsetLeft + 26;
//   let K = 0;
// 	let offsetX = event.clientX - screenOffset;
// 	let width = slider.clientWidth;
// 	K = offsetX / width;
//   return K;
// }

// function rewind(event) {
//   if(inRange(event)) {
//     player.currentTime = player.duration * getCoefficient(event);
//   }
// }

// function formatTime(time) {
//   var min = Math.floor(time / 60);
//   var sec = Math.floor(time % 60);
//   return min + ':' + ((sec<10) ? ('0' + sec) : sec);
// }

// function togglePlay() {
// 	player.volume = 0.5;
	
//   if(player.paused) {
//     player.play();
//   } else {
//     player.pause();
//   }  
// }


$(function()
{
    var playerTrack = $("#player-track"), bgArtwork = $('#bg-artwork'), bgArtworkUrl, albumName = $('#album-name'), trackName = $('#track-name'), albumArt = $('#album-art'), sArea = $('#s-area'), seekBar = $('#seek-bar'), trackTime = $('#track-time'), insTime = $('#ins-time'), sHover = $('#s-hover'), playPauseButton = $("#play-pause-button"),  i = playPauseButton.find('i'), tProgress = $('#current-time'), tTime = $('#track-length'), seekT, seekLoc, seekBarPos, cM, ctMinutes, ctSeconds, curMinutes, curSeconds, durMinutes, durSeconds, playProgress, bTime, nTime = 0, buffInterval = null, tFlag = false, albums = ['Day dream','Me & You','Electro Boy','Hallman','Blue sky - someone'], trackNames = ['Jaded In Tokyo','Flower Shower - Me & You','Kaaze - Electro Boy','Starfields - Hallman','Somebody'], albumArtworks = ['_1','_2','_3','_4','_5'], trackUrl = ['https://github.com/sachiko1995/Player/blob/main/Jaded%20In%20Tokyo%20-%20%E7%99%BD%E6%98%BC%E5%A4%A2%EF%BC%88Day%20Dream%EF%BC%89high.mp3?raw=true','https://raw.githubusercontent.com/sachiko1995/Player/main/%E3%83%95%E3%83%A9%E3%83%AF%E3%83%BC%E3%82%B7%E3%83%A3%E3%83%AF%E3%83%BC.mp3','https://raw.githubusercontent.com/sachiko1995/Player/main/%E6%B5%B7%E3%81%A8%E5%A4%AA%E9%99%BD%E3%82%B5%E3%82%A4%E3%82%B3%E3%83%BC%EF%BC%81.mp3','https://raw.githubusercontent.com/sachiko1995/Player/main/ES_Starfields%20-%20Hallman.mp3','https://raw.githubusercontent.com/sachiko1995/Player/main/%E9%9D%92%E7%A9%BA%E7%A9%BA%E6%B8%AF.mp3'], playPreviousTrackButton = $('#play-previous'), playNextTrackButton = $('#play-next'), currIndex = -1;

    function playPause()
    {
        setTimeout(function()
        {
            if(audio.paused)
            {
                playerTrack.addClass('active');
                albumArt.addClass('active');
                checkBuffering();
                i.attr('class','fas fa-pause');
                audio.play();
            }
            else
            {
                playerTrack.removeClass('active');
                albumArt.removeClass('active');
                clearInterval(buffInterval);
                albumArt.removeClass('buffering');
                i.attr('class','fas fa-play');
                audio.pause();
            }
        },300);
    }

    	
	function showHover(event)
	{
		seekBarPos = sArea.offset(); 
		seekT = event.clientX - seekBarPos.left;
		seekLoc = audio.duration * (seekT / sArea.outerWidth());
		
		sHover.width(seekT);
		
		cM = seekLoc / 60;
		
		ctMinutes = Math.floor(cM);
		ctSeconds = Math.floor(seekLoc - ctMinutes * 60);
		
		if( (ctMinutes < 0) || (ctSeconds < 0) )
			return;
		
        if( (ctMinutes < 0) || (ctSeconds < 0) )
			return;
		
		if(ctMinutes < 10)
			ctMinutes = '0'+ctMinutes;
		if(ctSeconds < 10)
			ctSeconds = '0'+ctSeconds;
        
        if( isNaN(ctMinutes) || isNaN(ctSeconds) )
            insTime.text('--:--');
        else
		    insTime.text(ctMinutes+':'+ctSeconds);
            
		insTime.css({'left':seekT,'margin-left':'-21px'}).fadeIn(0);
		
	}

    function hideHover()
	{
        sHover.width(0);
        insTime.text('00:00').css({'left':'0px','margin-left':'0px'}).fadeOut(0);		
    }
    
    function playFromClickedPos()
    {
        audio.currentTime = seekLoc;
		seekBar.width(seekT);
		hideHover();
    }

    function updateCurrTime()
	{
        nTime = new Date();
        nTime = nTime.getTime();

        if( !tFlag )
        {
            tFlag = true;
            trackTime.addClass('active');
        }

		curMinutes = Math.floor(audio.currentTime / 60);
		curSeconds = Math.floor(audio.currentTime - curMinutes * 60);
		
		durMinutes = Math.floor(audio.duration / 60);
		durSeconds = Math.floor(audio.duration - durMinutes * 60);
		
		playProgress = (audio.currentTime / audio.duration) * 100;
		
		if(curMinutes < 10)
			curMinutes = '0'+curMinutes;
		if(curSeconds < 10)
			curSeconds = '0'+curSeconds;
		
		if(durMinutes < 10)
			durMinutes = '0'+durMinutes;
		if(durSeconds < 10)
			durSeconds = '0'+durSeconds;
        
        if( isNaN(curMinutes) || isNaN(curSeconds) )
            tProgress.text('00:00');
        else
		    tProgress.text(curMinutes+':'+curSeconds);
        
        if( isNaN(durMinutes) || isNaN(durSeconds) )
            tTime.text('00:00');
        else
		    tTime.text(durMinutes+':'+durSeconds);
        
        if( isNaN(curMinutes) || isNaN(curSeconds) || isNaN(durMinutes) || isNaN(durSeconds) )
            trackTime.removeClass('active');
        else
            trackTime.addClass('active');

        
		seekBar.width(playProgress+'%');
		
		if( playProgress == 100 )
		{
			i.attr('class','fa fa-play');
			seekBar.width(0);
            tProgress.text('00:00');
            albumArt.removeClass('buffering').removeClass('active');
            clearInterval(buffInterval);
		}
    }
    
    function checkBuffering()
    {
        clearInterval(buffInterval);
        buffInterval = setInterval(function()
        { 
            if( (nTime == 0) || (bTime - nTime) > 1000  )
                albumArt.addClass('buffering');
            else
                albumArt.removeClass('buffering');

            bTime = new Date();
            bTime = bTime.getTime();

        },100);
    }

    function selectTrack(flag)
    {
        if( flag == 0 || flag == 1 )
            ++currIndex;
        else
            --currIndex;

        if( (currIndex > -1) && (currIndex < albumArtworks.length) )
        {
            if( flag == 0 )
                i.attr('class','fa fa-play');
            else
            {
                albumArt.removeClass('buffering');
                i.attr('class','fa fa-pause');
            }

            seekBar.width(0);
            trackTime.removeClass('active');
            tProgress.text('00:00');
            tTime.text('00:00');

            currAlbum = albums[currIndex];
            currTrackName = trackNames[currIndex];
            currArtwork = albumArtworks[currIndex];

            audio.src = trackUrl[currIndex];
            
            nTime = 0;
            bTime = new Date();
            bTime = bTime.getTime();

            if(flag != 0)
            {
                audio.play();
                playerTrack.addClass('active');
                albumArt.addClass('active');
            
                clearInterval(buffInterval);
                checkBuffering();
            }

            albumName.text(currAlbum);
            trackName.text(currTrackName);
            albumArt.find('img.active').removeClass('active');
            $('#'+currArtwork).addClass('active');
            
            bgArtworkUrl = $('#'+currArtwork).attr('src');

            bgArtwork.css({'background-image':'url('+bgArtworkUrl+')'});
        }
        else
        {
            if( flag == 0 || flag == 1 )
                --currIndex;
            else
                ++currIndex;
        }
    }

    function initPlayer()
	{	
        audio = new Audio();

		selectTrack(0);
		
		audio.loop = false;
		
		playPauseButton.on('click',playPause);
		
		sArea.mousemove(function(event){ showHover(event); });
		
        sArea.mouseout(hideHover);
        
        sArea.on('click',playFromClickedPos);
		
        $(audio).on('timeupdate',updateCurrTime);

        playPreviousTrackButton.on('click',function(){ selectTrack(-1);} );
        playNextTrackButton.on('click',function(){ selectTrack(1);});
	}
    
	initPlayer();
});