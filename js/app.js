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
  videoId: '0i3fUOtyKa8',
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
//    nav link Functions
//********************************************************************

$('#nav-item').on('click', function(){
        $("#navbar-expand").collapse();
        // $(".nav.navbar-expand-md").removeClass("active");
    });

    //********************************************************************
    //    Media Queries functions
    //*********************************************************

  // var mql = window.matchMedia('(max-width: 600px)');

  //   function screenTest(e) {
  //     if (e.matches) {
  //       /* the viewport is 600 pixels wide or less */
  //       // para.textContent = 'This is a narrow screen — less than 600px wide.';
  //       // document.body.style.backgroundColor = 'red';
  //
  //
  //         }
  //       }
  //
  //     } else {
  //       /* the viewport is more than than 600 pixels wide */
  //       para.textContent = 'This is a wide screen — more than 600px wide.';
  //       document.body.style.backgroundColor = 'blue';
  //     }
  //   }
  //
  // mql.addListener(screenTest);
