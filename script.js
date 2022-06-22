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

generateCanvas(canvasSize);

// Function to handle mouse hover  
const hover = document.getElementsByClassName("pixel");
for (let element of hover)
{
  element.addEventListener("mouseenter", function( event )
  {
    // highlight mouseover target  
    event.target.style.background = "black";
  });
}


