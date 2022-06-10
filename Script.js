console.log('hello');
console.log('world')

document.getElementById('button').addEventListener('click' , addItem);


function addItem() {
    var chunk = document.createElement('div');
    chunk.classList.add('chunk');

    var img = document.createElement('img');
    img.src="600x600-2_p1g3e4vs7t8lq1uag1q1l1sc61dd03.jpg"
    img.classList.add('image');
    
    var overlay = document.createElement('div');
    overlay.classList.add('overlay')

    var content = document.createElement('div');
    content.classList.add('content');
    content.innerHTML = `Friday Brands`;

    overlay.appendChild(content);
    
    document.getElementById('main-body').appendChild(chunk);
    chunk.appendChild(img);
    chunk.appendChild(overlay);
    
    const model = document.createElement('div');
    model.classList.add('modal')
    model.setAttribute("id" , "myModal");

    var model_content = document.createElement('div')
    model_content.classList.add('modal_content');

    var top = document.createElement('div')
    top.classList.add('top');

    var p = document.createElement('p')
    p.classList.add("content_title")
    p.innerHTML = `Title of the project!`
    console.log(p.innerHTML)

    var span = document.createElement('span');
    span.classList.add('close');
    span.innerHTML = `&times;`
    console.log(span.innerHTML)

    model_content.appendChild(top);
    top.appendChild(p)
    top.appendChild(span)

    model.innerHTML = `<div class="modal-content">
    <div class="top">
        <p class="content_title">Heeloo this is modal! </p>
        <span class="close">&times;</span>
    </div>
    <div class="content_description">
        <span class="content_leftside">Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. Alias ab sit ipsa, consequatur 
            voluptas itaque culpa perferendis non tempore quam.</span>
        <div class="content_rightside">
            <span class="date">
                Date: 21st November 2021 
            </span>
            <br>
            <span class="client">
                Client: Friay Brands
            </span>
            <br>
            <span class="role">
                Role:  Designer
            </span>
            <br>
            <span class="url">
                URL: <a href="#" >brandsbyfriday.com</a>
            </span>
            <br>
        </div>
    </div>
    <br>
    <br>
    <div class="portfolio_images">
        <img class="images" src="Cyberpunk-4K-Wallpaper.jpg">
        <img class="images" src="space_planet_surface_shadow_46631_3840x2160.jpg">
        <img class="images" src="4k-desktop-wallpaper.-2560×1440.jpg">
    </div>
</div>`
document.getElementById('main-body').appendChild(model);
}

//Open and close Modal
var modal = document.getElementById("myModal");
var modalContent = document.querySelector("modal_content")
var body = document.querySelector("body");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  body.style.overflowY = "hidden";
//   modalContent.classList.add("animate")

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
