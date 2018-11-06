// const listItems = document.getElementsByTagName('a');

// listItems.addEventListener('mouseover', () => {
//   listItems.textContent = listItems.textContent.toUpperCase();
// });

// listItems.addEventListener('mouseout', () => {
//   listItems.textContent = listItems.textContent.toLowerCase();
// });

// $('#AWS-vid').click(function(event){
//   console.log;
//   break;
// });



const $secureLinks = $('a[href^="https://"]');
const $nonscureLinks = $('a[href^="http://"]');


$secureLinks.attr('target', '_blank');
$nonscureLinks.attr('target', '_blank');

// /**********************************************************************
// **  YouTube Video Control
//************************************************************************

function openYT(){
    $("#player").fadeIn();
    player.playVideo();
    $('#YTbutton').fadeOut();
}
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
  videoId: '0i3fUOtyKa8',
  playerVars: { 'autoplay': 0, 'controls': 0},
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange,
    }
  });
}

function onPlayerReady(event) {
  $("#YTplaybutton").fadeIn();
  $("#YTpausebutton").fadeIn();
  $("#YTmutebutton").fadeIn();
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  if(event.data === 0){
    $("#player").fadeOut();
    $("#YTbox").fadeOut();
    $("#YTplaybutton").fadeOut();
    $("#YTpausebutton").fadeOut();
    $("#YTmutebutton").fadeOut();
    $("#YTbutton").fadeIn();

  }
}


// **************************************************************************
//        Button Functions
// **************************************************************************

$('#YTplaybutton').on('click', function () {
    player.playVideo();
});

$('#YTpausebutton').on('click', function () {
    player.pauseVideo();
});

$('#YTmutebutton').on('click', function() {
    var mute_toggle = $(this);

    if(player.isMuted()){
        player.unMute();
        mute_toggle.text('Mute video');
    }
    else{
        player.mute();
        mute_toggle.text('Unmute video');
    }
});

//********************************************************************
//    nav link Functions
//********************************************************************

$('#nav-item').on('click', function(){
        $("#navbar-expand").collapse();
        // $(".nav.navbar-expand-md").removeClass("active");
    });
