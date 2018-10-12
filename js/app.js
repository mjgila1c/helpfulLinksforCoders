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

<<<<<<< HEAD
// const $secureLinks = $('a[href^="https://"]');


// $secureLinks.attr('target', 'blank');
=======
const $secureLinks = $('a[href^="https://"]');
const $nonscureLinks = $('a[href^="http://"]');


$secureLinks.attr('target', '_blank');
$nonscureLinks.attr('target', '_blank');
>>>>>>> f2da693da3d272308b18113ab2cf469dfc6a1de1
