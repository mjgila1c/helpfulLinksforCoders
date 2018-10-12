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
