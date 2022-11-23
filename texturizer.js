const Area = document.querySelector(".area");
const Flags = document.querySelector(".flags");

Area.addEventListener("dragover", (e)=>{
  e.preventDefault();
});
Area.addEventListener("drop", (e)=>{
  let b;
  let n = e.dataTransfer.getData("flag");
  switch (n) {
    case "1":
      b = "data:image/png;base64,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";
      break;
    case "2":
      b = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAACqCAMAAABVlWm8AAAACVBMVEUAkkb////OKzdsRJOSAAAAxklEQVR4nO3PMQEAAAjAILV/aFPsgwbMFLZwhaTv7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v75/+HwW0qVdTeFEnAAAAAElFTkSuQmCC";
      break;
    case "3":
      b = "data:image/png;base64,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";
    break;
    case "4":
      b = "data:image/png;base64,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";
    break;
  }
  Area.style.background = `url(${b})`;
});

for (let i = 1; i < Flags.children.length + 1; i++) {
  document.querySelector(`.flag${i}`).addEventListener("dragstart", (e)=>{setFlag(i,e)})
}

const setFlag = (n,e)=>{
  e.dataTransfer.setData("flag",n);
}