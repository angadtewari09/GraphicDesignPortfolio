console.log('hello');
console.log('world')


document.getElementById('button').addEventListener('click' , addItem);

function addItem() {
    console.log("woring")
    var chunk = document.createElement('div')
    chunk.classList.add('chunk')
    chunk.setAttribute("id" , "myBtn")
    chunk.innerHTML = `
    <img class="image" src="600x600-2_p1g3e4vs7t8lq1uag1q1l1sc61dd03.jpg">
        <div class="overlay">
            <div class="content">Friday Brands</div>
        </div>`;
    var model = document.createElement('div');
    model.classList.add('modal')
    model.setAttribute("id", "myModal")
    model.innerHTML = `
    <div class="modal_content">
                
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

</div>
    `
        document.getElementById('main-body').appendChild(chunk)
        document.getElementById('main-body').appendChild(model)
}


for (let i=0; i<3; i++) {
    addItem()
    
var modal = document.querySelector(".modal")
var modalContent = document.querySelectorAll(".modal_content")
var body = document.querySelector("body");

// Get the button that opens the modal
var btn = document.querySelectorAll("#myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

    btn.forEach(function(el) {
        el.onclick = function () {
            console.log("clicked!");
            modal.style.display = "block";
            body.style.overflowY = "hidden";
    
            //   modalContent.classList.add("animate")
        }
    })
   
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
}