(function(){

    let body = document.querySelector("body");
    let pencil = document.querySelector(".pencil");
    let rectangle = document.querySelector(".rectangle");
    let line = document.querySelector(".line");
    let colorRed = document.querySelector(".red");
    let colorPink = document.querySelector(".pink");
    let colorGreen = document.querySelector(".green");
    let colorBlue = document.querySelector(".blue");    

    let ctool = "";

    let canvasBoard = document.querySelector("canvas");
    // By default height and width of canvas is 300px
    canvasBoard.height = window.innerHeight;   
    canvasBoard.width =  window.innerWidth;

    // Gives Tools for the Canvas
    let tool = canvasBoard.getContext("2d");
    
    
    // To Draw a rectangle we need source and destination cordinates
    body.addEventListener("mousedown",handleMouseDown); // mouse clicked
    body.addEventListener("mousemove",handleMoveTrace);      // Move traces the path of cursor
    body.addEventListener("mouseup", handleMouseUp);    // mouse Realeased

    rectangle.addEventListener("click",function(){
        ctool = "rectangle";
    });
    line.addEventListener("click",function(){
        ctool = "line";
    });
    let pencilMode = false;
    pencil.addEventListener("click",function(){
        ctool = "pencil";
    })
 

    let ix,iy,fx,fy;
    let topSpace = canvasBoard.getBoundingClientRect().top;
    // let leftSpace = canvasBoard.getBoundingClientRect().left;
    tool.lineWidth = 5;
    function handleMouseDown(e){  // e is mouseDown event itself: all information about the mouseDown
        if(ctool == "pencil"){
            pencilMode = true;
        }
        console.log("Mouse was clicked");
        console.log(e);
        let xpos = e.clientX;
        let ypos = e.clientY;
        console.log(xpos+" "+ypos);
        ix=e.clientX;
        iy=e.clientY-topSpace;  // Substracted topSpace to balance the coordinates
    }

    function handleMouseUp(e){
        if(ctool == "pencil"){
            pencilMode =false;
        }
        console.log("Mouse is released");
        let xpos = e.clientX;
        let ypos = e.clientY;
        console.log(xpos+" "+ypos);
        fx = e.clientX;
        fy = e.clientY-topSpace;

        let width = fx-ix;
        let height = fy-iy;
        
        if(ctool == "rectangle"){
            tool.strokeRect(ix,iy,width,height);
        }
        else if(ctool == "line"){    // TO Draw a straight line
            tool.beginPath();       // Starts a drawing 
            tool.moveTo(ix, iy);    // source coridinates
            tool.lineTo(fx, fy);    //   Destination Cordinates
            tool.stroke();
        }
        
         
    }

    function handleMoveTrace(e){
        if(pencilMode){
            fx = e.clientX;
            fy = e.clientY-topSpace;
            tool.beginPath();
            tool.moveTo(ix,iy);
            tool.lineTo(fx,fy);
            tool.stroke();
            ix = fx;
            iy = fy;
        }
        
    }

    colorPink.addEventListener("click",function(){
        tool.strokeStyle = "pink";
        tool.fillStyle = "pink";
        rectangle.style.color = "pink";
        rectangle.style.background = "white";
        line.style.color = "pink";
        line.style.background = "white";
        pencil.style.color = "pink";
        pencil.style.background = "white";
    })

    colorRed.addEventListener("click",function(){
        tool.strokeStyle = "red";
        tool.fillStyle = "red";
        rectangle.style.color = "red";
        rectangle.style.background = "white";
        line.style.color = "red";
        line.style.background = "white";
        pencil.style.color = "red";
        pencil.style.background = "white";
    })

    colorBlue.addEventListener("click",function(){
        tool.strokeStyle = "blue";
        tool.fillStyle = "blue";
        rectangle.style.color = "blue";
        rectangle.style.background = "white";
        line.style.color = "blue";
        line.style.background = "white";
        pencil.style.color = "blue";
        pencil.style.background = "white";

    })

    colorGreen.addEventListener("click",function(){
        tool.strokeStyle = "green";
        tool.fillStyle = "green";
        rectangle.style.color = "green";
        rectangle.style.background = "white";
        line.style.color = "green";
        line.style.background = "white";
        pencil.style.color = "green";
        pencil.style.background = "white";
    })



})();