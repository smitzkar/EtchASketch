// Generate 16x16 grid of divs  

let canvasSize = 16;

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
      pixel.classList.add('pixel');
      pixel.textContent = "hi"
      canvas.appendChild(pixel);
      console.log(i);
    }
  }
}

generateCanvas(canvasSize);