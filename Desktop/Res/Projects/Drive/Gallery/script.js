let body = document.querySelector("body");
let addIamge = document.querySelector("#add");
let fullScreen = document.querySelector("#fullScreen");
let deleteImage = document.querySelector("#delete");


let imgListContainer = document.querySelector(".img-list-container");
let imgPreviewContainer = document.querySelector(".img-preview-container");
let arr = [];
let imgId = -1;

loadFromStorage();
addIamge.addEventListener("click",handleAddImage);
deleteImage.addEventListener("click",handleDeleteImage);
fullScreen.addEventListener("click",openFullscreen);


function handleAddImage(){
    let url = prompt("Enter Image url");
    if(url == "" || url == null){
        return;
    }
    let obj = {
        id: ++imgId,
        link:url
    }
    arr.push(obj);
    addNewImgToListAndPrev(url,imgId);
    saveToStorage();
}

function handleDeleteImage(){
    if(arr.length == 0) return;
    let img = imgPreviewContainer.querySelector("img");
    let id = img.getAttribute("iid");

    let idx = arr.findIndex(function(e){
        return e.id == id;
    })
    arr.splice(idx,1);
    imgListContainer.innerHTML = "";
    saveToStorage();
    loadFromStorage();
    
}

function handleLeftImage(){
    if(arr.length == 0) return;
    let img = imgPreviewContainer.querySelector("img");
    let id = img.getAttribute("iid");

    let idx = arr.findIndex(function(e){
        return e.id == id;
    })
    idx--;
    if(idx==-1){
        idx = arr.length-1;
    }
    
    let pid = arr[idx].id; // preview image id
    previewImage(pid);
}

function handleRightImage(){
    if(arr.length == 0) return;
    let img = imgPreviewContainer.querySelector("img");
    let id = img.getAttribute("iid");

    let idx = arr.findIndex(function(e){
        return e.id == id;
    })
    idx++;
    idx = idx%arr.length;
    
    let pid = arr[idx].id; // preview image id
    previewImage(pid);
}

function openFullscreen() {
    if (body.requestFullscreen) {
      body.requestFullscreen();
    } else if (body.webkitRequestFullscreen) { /* Safari */
      body.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      body.msRequestFullscreen();
    }
}

function addNewImgToListAndPrev(link,id){

    // Add to list container
    let newImg = document.createElement("img");  // To Create HTML Element using JS
    newImg.setAttribute("src",link);
    newImg.setAttribute("iid",id);
    imgListContainer.appendChild(newImg);
    newImg.addEventListener("click",function(e){   // If clicked on Image - preview it
        previewImage(id);
    });

    // Preview
    previewImage(id);
}

function previewImage(id){
    
    let idx = arr.findIndex(e=> e.id==id);
    let link = arr[idx].link;

    let html = `<span class="material-icons-outlined " id="left">keyboard_double_arrow_left</span>
                <img class="img-on-preview" src=${link} iid=${id}  alt="">
                <span class="material-icons-outlined hell " id="right" >keyboard_double_arrow_right</span>`

    imgPreviewContainer.innerHTML = html;  

    let leftImage = imgPreviewContainer.querySelector("#left");
    let rightImage = imgPreviewContainer.querySelector("#right");

    leftImage.addEventListener("click",handleLeftImage);
    rightImage.addEventListener("click",handleRightImage);
    
}

function saveToStorage(){
    let arrJson = JSON.stringify(arr);
    localStorage.setItem("gallery",arrJson);
}

function loadFromStorage(){
    imgPreviewContainer.innerHTML="";
    let arrJson = localStorage.getItem("gallery");
    if(arrJson == null || arrJson=="") return;

    arr = JSON.parse(arrJson);
    let mxid = -1;
    arr.forEach(element => {
        addNewImgToListAndPrev(element.link,element.id);
        mxid = (element.id>mxid)?element.id:mxid;
    });
    imgId = mxid;
}