let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
// let rectangle = document.querySelector("#rectangle");
// let line = document.querySelector("#line");

let colors = document.querySelectorAll(".colorSet");  // Three colors
let sizeboxs = document.querySelectorAll(".size-set");

let activeTool = "";

pencil.addEventListener("click",handleDrawPencil);
eraser.addEventListener("click",handleDrawEraser);

function handleDrawPencil(){
    if(activeTool == "pencil"){
        activeTool = "";
        pencil.classList.remove("active-icon");
        pencilSize.style.display = "none";
    }
    else{
        for(let i=0;i<sizeboxs.length;i++){
            sizeboxs[i].style.display="none";
        }
        activeTool = "pencil";
        pencil.classList.add("active-icon");
        pencilSize.style.display = "flex";
       
    }
}

function handleDrawEraser(){
    if(activeTool == "eraser"){
        activeTool = "";
        eraser.classList.remove("active-icon");
        eraserSize.style.display = "none";
    }
    else{
        for(let i=0;i<sizeboxs.length;i++){
            sizeboxs[i].style.display="none";
        }
        activeTool = "eraser";
        eraser.classList.add("active-icon");
        eraserSize.style.display = "flex";
    }
}
