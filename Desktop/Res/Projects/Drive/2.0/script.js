(function(){
    let btnAddFolder = document.querySelector("#header .btnAddFolder");
    let btnAddTextFile = document.querySelector("#header .btnAddTextFile");
    let breadCrumb = document.querySelector("#breadCrumb");
    let divContainer = document.querySelector("#container");
    let apps = document.querySelector("apps");
    let appTitle = document.querySelector("#app-title");
    let appMenu = document.querySelector("#app-menu-bar");
    let appBody = document.querySelector("#app-body");
    
    let myTemplates = document.querySelector("#myTemplates");



    let resource = [];
    let rid = -1;
    let cpid = -1;

    btnAddFolder.addEventListener("click",addFolder);
    btnAddTextFile.addEventListener("click",addTextFile);

    function addFolder(){
        let rname = prompt("Enter folder Name").trim();
        if(!!rname){
            let genRname = rname[0].toUpperCase();
            genRname =  genRname + rname.slice(1).toLowerCase();
            rname = genRname;
            
            // let filtered = resource.
            let alreadyExists = resource.some(res=> res.rname == rname && res.pid == cpid);
            if(!alreadyExists){
                rid++;
                resource.push({
                    rid:rid,
                    rname:rname,
                    rtype:"folder",
                    pid:cpid
                });
                addFolderToHTML(rname,rid,cpid);
                saveToStorage();
            }
            else{
                alert("Folder "+rname+" already exists...");
                return;
            }
        }
        else{
            alert("Please enter valid folder name");
            return;
        }   
    } 
    
    function addFolderToHTML(rname,rid,pid){
        let divFolderTemplate = myTemplates.content.querySelector(".folder");
        let divFolder = document.importNode(divFolderTemplate,true);
        let divName = divFolder.querySelector("div[purpose='name']");
        divName.textContent = rname;
        divFolder.setAttribute("rid",rid);
        divFolder.setAttribute("pid",pid);
        divContainer.appendChild(divFolder);

        let spanRename = divFolder.querySelector("span[action='rename']");
        let spanDelete = divFolder.querySelector("span[action='delete']");
        let spanView = divFolder.querySelector("span[action='view']");

        spanRename.addEventListener("click",renameResource);
        spanDelete.addEventListener("click",deleteResource);
        spanView.addEventListener("click",viewResource);
    }

    function viewResource(){
        let divFolder = this.parentNode;
        let rname = divFolder.querySelector("div[purpose='name']").textContent;
        cpid = parseInt(divFolder.getAttribute("rid"));
        divContainer.innerHTML = "";
        loadFromStorage();

        let pathTemplate = myTemplates.content.querySelector(".path");
        let anchorPath = document.importNode(pathTemplate,true);
        anchorPath.addEventListener("click",handleBreadCrumb);
        anchorPath.setAttribute("pid",cpid);
        anchorPath.textContent = rname;
        breadCrumb.appendChild(anchorPath);
    }

    function deleteResource(){
        let divFolder = this.parentNode;
        let rname = divFolder.querySelector("[purpose='name']").textContent;
        let resId = parseInt( divFolder.getAttribute("rid") ); 
        let flag = confirm("Are you sure you want to delete "+rname+"?");
    

        if(flag == true){
            let isParent = resource.some(f=> f.pid == resId);
            if(isParent){
                // alert("can't delete "+rname+"has sub folders...");
                let del = confirm(rname+" has sub folders,\nStill Do you want to Delete?");
                if(del){
                    deleteRecursive(resId);
                    divContainer.removeChild(divFolder);
                    saveToStorage();
                }
            }
            else{
                divContainer.removeChild(divFolder);
                let ridx = resource.findIndex(f=> f.rid == resId) ;
                resource.splice(ridx,1);
                saveToStorage();
            }
        }
    }

    function deleteRecursive(pid){
        let subdir = resource.filter(r=> r.pid==pid);
        subdir.forEach((r)=> deleteRecursive(r.rid));
        let idx = resource.findIndex(r=>r.rid == pid);
        resource.splice(idx,1);
    }

    function addTextFile(){
        let tfname = prompt("Enter Text-file Name").trim();
        if(!!tfname){
            let genRname = tfname[0].toUpperCase();
            genRname =  genRname + tfname.slice(1).toLowerCase();
            tfname = genRname;
            
            let alreadyExists = resource.some(res=> res.rname == tfname && res.pid == cpid);
            if(!alreadyExists){
                rid++;
                resource.push({
                    rid:rid,
                    rname:tfname,
                    rtype:"txt-file",
                    pid:cpid
                });
                addTextFileToHTML(tfname,rid,cpid);
                saveToStorage();
            }
            else{
                alert("Folder "+rname+" already exists...");
                return;
            }
        }
        else{
            alert("Please enter valid folder name");
            return;
        }   
    }

    function addTextFileToHTML(tfname,rid,pid){
        let divTextfileTemplate = myTemplates.content.querySelector(".txt-file");
        let divTextFile = document.importNode(divTextfileTemplate,true);
        let divName = divTextFile.querySelector("div[purpose='name']");
        divName.textContent = tfname;
        divTextFile.setAttribute("rid",rid);
        divTextFile.setAttribute("pid",pid);
        divContainer.appendChild(divTextFile);

        let spanRename = divTextFile.querySelector("span[action='rename']");
        let spanDelete = divTextFile.querySelector("span[action='delete']");
        let spanView = divTextFile.querySelector("span[action='view']");

        spanRename.addEventListener("click",renameResource);
        spanDelete.addEventListener("click",deleteTextFile);
        spanView.addEventListener("click",viewTextFile);
    }

    function deleteTextFile(){
        let divTxtFile = this.parentNode;
        let tfname = divTxtFile.querySelector("[purpose='name']").textContent;
        let resId = parseInt( divTxtFile.getAttribute("rid") ); 
        let flag = confirm("Are you sure you want to delete "+tfname+"?");
        if(flag){
            let idx = resource.findIndex(i=> i.rid == resId);
            resource.splice(idx,1);
            divContainer.removeChild(divTxtFile);
            saveToStorage();
        }
        
    }

    function renameResource(){
        let rname = prompt("Replace with");   
        if(!rname){
            return;
        }
        rname = rname[0].toUpperCase()+rname.slice(1).toLowerCase();
        let alreadyExists = resource.filter(f=>f.pid == cpid).some(f=>f.rname == rname);
        if(!alreadyExists){
            let divFolder = this.parentNode;
            let divFname = divFolder.querySelector("[purpose='name']");
            let fldrId = parseInt( divFolder.getAttribute("rid") );    
            divFname.textContent = rname;

            let find = resource.find(f=> f.rid == fldrId);
            find.rname = rname;
            saveToStorage();
        }
        else{
            alert("Folder name "+rname+" already exists...");
        }  
    }

    function viewTextFile(){
        let divTextFile = this.parentNode;
        let tfid = divTextFile.getAttribute("rid");
        let tfName = divTextFile.querySelector("[purpose='name']").textContent+".txt";

        appTitle.innerHTML = tfName;
        let notepadMenuTemplate = myTemplates.content.querySelector("[purpose=notepad-menu]");
        let notepadMenu = document.importNode(notepadMenuTemplate,true);
        appMenu.innerHTML="";
        appMenu.appendChild(notepadMenu);

        let notepadBodyTemplate = myTemplates.content.querySelector("[purpose=notepad-body]");
        let notepadBody = document.importNode(notepadBodyTemplate,true);
        appBody.innerHTML="";
        appBody.appendChild(notepadBody);

        let spanSave = appMenu.querySelector("[action='save']");
        let spanBold = appMenu.querySelector("[action='bold']");
        let spanUnderline = appMenu.querySelector("[action='underline']");
        let spanItalic = appMenu.querySelector("[action='italic']");
        let inputBGColor = appMenu.querySelector("[action='bgcolor']");
        let inputFGColor = appMenu.querySelector("[action='fgcolor']");
        let selectFontFamily = appMenu.querySelector("[action='font-family']");
        let selectFontSize = appMenu.querySelector("[action='font-size']");




        spanSave.addEventListener("click",notepadSave);
        spanBold.addEventListener("click",notepadBold);
        spanUnderline.addEventListener("click",notepadUnderline);
        spanItalic.addEventListener("click",notepadItalic);
        inputBGColor.addEventListener("change",notepadBGColor);
        inputFGColor.addEventListener("change",notepadFGColor);
        selectFontFamily.addEventListener("change",notepadFontFamily);
        selectFontSize.addEventListener("change",notepadFontSize);
    }

    function notepadSave(){
        alert("saved");
    }

    function notepadBold(){
        let textarea = appBody.querySelector("textarea");
        let isPressed = (this.getAttribute("pressed") == "true");
        if(isPressed == false){
            this.setAttribute("pressed","true");
            textarea.style.fontWeight = "bold";
        }else{
            this.setAttribute("pressed","false");
            textarea.style.fontWeight = "";
        }
    }

    function notepadUnderline(){
        let textarea = appBody.querySelector("textarea");
        let isPressed = (this.getAttribute("pressed") == "true");
        if(isPressed == false){
            this.setAttribute("pressed","true");
            textarea.style.textDecoration = "underline";
        }else{
            this.setAttribute("pressed","false");
            textarea.style.textDecoration = "none";
        }

    }
    function notepadItalic(){
        let textarea = appBody.querySelector("textarea");
        let isPressed = (this.getAttribute("pressed") == "true");
        if(isPressed == false){
            this.setAttribute("pressed","true");
            textarea.style.fontStyle = "italic";
        }else{
            this.setAttribute("pressed","false");
            textarea.style.fontStyle = "";
        }
    }
    function notepadBGColor(){
        let color = this.value;
        let textarea = appBody.querySelector("textarea");
        textarea.style.background = color;
    }
    function notepadFGColor(){
        let color = this.value;
        let textarea = appBody.querySelector("textarea");
        textarea.style.color = color;
    }
    function notepadFontFamily(){
        let fontfam = this.value;
        let textarea = appBody.querySelector("textarea");
        textarea.style.fontFamily = fontfam;
    }
    function notepadFontSize(){
        let fontsz = this.value;
        let textarea = appBody.querySelector("textarea");
        textarea.style.fontSize = fontsz+"px";
    }







    function handleBreadCrumb(){
        let anchor = this;
        while(this.nextSibling){
            breadCrumb.removeChild(this.nextSibling);
        }
        cpid = this.getAttribute("pid");
        divContainer.innerHTML = "";
        loadFromStorage();
    }

    function saveToStorage(){
        let data = JSON.stringify(resource);
        localStorage.setItem("drive 2.0",data);
    }

    function loadFromStorage(){
        let data = localStorage.getItem("drive 2.0");
        resource = JSON.parse(data);

        let mrid = -1;

        if(!!resource){ // Mal hai tab
            resource.forEach(function(res){
                mrid = (res.rid>mrid)?res.rid:mrid;
                if(res.pid == cpid){
                    if(res.rtype=="folder") addFolderToHTML(res.rname,res.rid,res.pid);
                    else addTextFileToHTML(res.rname,res.rid,res.pid);
                } 
            });
            rid = mrid; 
        }else{
            resource = [];
        }
                
    }

    loadFromStorage();
})();


