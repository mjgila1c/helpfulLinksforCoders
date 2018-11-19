

const $secureLinks = $('a[href^="https://"]');
const $nonscureLinks = $('a[href^="http://"]');
const $imgTextCenter = $('section_list--img--text');


$secureLinks.attr('target', '_blank');
$nonscureLinks.attr('target', '_blank');
$imgTextCenter.addClass('text-center');

// /**********************************************************************
// **  YouTube Video Control
//************************************************************************

function openYT(){
    $("#player").fadeIn();
    $("#YTbox").fadeIn();
    $("#YTplaybutton").fadeIn();
    $("#YTpausebutton").fadeIn();
    $("#YTmutebutton").fadeIn();
    player.playVideo();
    $('#YTbutton').fadeOut();
}
//This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
  videoId: 'A-qZ2h3guuE',
  // this creates an autoplay and also removes the controls from the YT display
  playerVars: { 'autoplay': 1, 'controls': 0},
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange,
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}
// this fuction fades the buttons out and back in as the useer plays and replays the video
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
        mute_toggle.text('Mute Video');
    }
    else{
        player.mute();
        mute_toggle.text('Unmute Video');
    }
});

//********************************************************************
//   Sticky Navbar Function
//*********************************************************


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//***************************************************************************
//         Facebook Like code
//***************************************************************************

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
