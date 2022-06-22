// Generate 16x16 grid of divs  

let canvasSize = 10;

// div.canvas -> div with class canvas
// div#canvas -> div with id canvas
const canvas = document.querySelector("div#canvas");

function generateCanvas(size)
{

  for (let j = 0; j < size; j++)
  {
    for (let i = 0; i < size; i++)
    {
      // Create a bunch of pixel divs
      pixel = document.createElement("div");
      pixel.classList.add("pixel");
      pixel.style.background = "white";
      pixel.style.gridColumn = i + 1;
      canvas.appendChild(pixel);
    }
  }
};


// Stores HTMLcollection of all elements with "pixel" class in hover
const hover = document.getElementsByClassName("pixel");
// Iterate through hover as if it was an array and assign mouseover function
function reset(){
for (let element of hover)
{
  element.addEventListener("mouseenter", function( event )
  {
    // highlight mouseover target  
    event.target.style.background = "black";
  });
};
}

generateCanvas(canvasSize);
reset();

// Function to change canvas size
function resizeCanvas() {
  canvasSize = prompt();
  generateCanvas(canvasSize);
  reset();
};
