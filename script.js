// Generate 16x16 grid of divs  

let canvasSize = 16;

// div.canvas -> div with class canvas
// div#canvas -> div with id canvas
const canvas = document.querySelector("div#canvas");

function generateCanvas(size)
{
  // Set set the canvas columns and rows 
  canvas.style.gridTemplateColumns = "50px " * size;
  canvas.style.gridTemplateRows = "50px " * size;

  for (let j = 0; j < size; j++)
  {
    for (let i = 0; i < size; i++)
    {
      // Create a bunch of pixel divs
      pixel = document.createElement("div");
      pixel.classList.add("pixel");
      pixel.textContent = "hi";
      pixel.style.background = "green";
      pixel.style.gridColumn = i + 1;
      canvas.appendChild(pixel);
      console.log(i);
    }
  }
}

generateCanvas(canvasSize);