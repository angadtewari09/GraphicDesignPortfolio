console.log('hello');
console.log('world')

document.getElementById('button').addEventListener('click' , addItem);
// function showPoster() {
//     console.log('function running');
//     const element = document.createElement('div');
//     element.classList.add('image');
//     element.innerHTML = `
//     <img class="image" src="600x600-2_p1g3e4vs7t8lq1uag1q1l1sc61dd03.jpg">
//    `
//    document.body.appendChild(element);
//}

// function showPoster() {
//     var img = document.createElement('img');
//     img.src="600x600-2_p1g3e4vs7t8lq1uag1q1l1sc61dd03.jpg"
//     img.classList.add('image');
//     document.getElementById('main-body').appendChild(img);
//     console.log("Image tag added!");
// }
function addItem() {
    var chunk = document.createElement('div');
    chunk.classList.add('chunk');

    var img = document.createElement('img');
    img.src="600x600-2_p1g3e4vs7t8lq1uag1q1l1sc61dd03.jpg"
    img.classList.add('image');
    
    var overlay = document.createElement('div');
    overlay.classList.add('overlay')

    var content = document.createElement('content');
    content.classList.add('content');
    content.innerHTML = `Friday Brands`;

    overlay.appendChild(content);
    
    document.getElementById('main-body').appendChild(chunk);
    chunk.appendChild(img);
    chunk.appendChild(overlay);
}

//Open and close Modal
var modal = document.getElementById("myModal");
var body = document.querySelector("body");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  body.style.overflowY = "hidden";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  body.style.overflowY = "auto";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    body.style.overflowY = "auto";
  }
}