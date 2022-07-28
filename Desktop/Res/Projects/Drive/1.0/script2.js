(function(){
    let folderContainer = document.querySelector("#container");
    let btnAdd = document.querySelector("#btnAddFolder");
    let customTemplate = document.querySelector("template");
    let breadCrumbContainer = document.querySelector("#divBreadCrumb");
    let fid = -1;
    let cfid = -1;
    let folders = [];

    btnAdd.addEventListener("click",addFolder);

    function addFolder(){
        let fname = prompt("Enter folder Name").trim();
        if(!!fname){
            let genFname = fname[0].toUpperCase();
            genFname =  genFname + fname.slice(1).toLowerCase();
            fname = genFname;
            
            let alreadyExists = folders.filter(f=>f.pid == cfid).some(f=> f.name == fname);
            if(!alreadyExists){
                ++fid;
                folders.push({
                    fid:fid,
                    name:fname,
                    pid:cfid
                });
                addFolderInHTML(fname,fid,cfid);
                saveToLocalStorage();
            }
            else{
                alert("Folder "+fname+" already exists...");
            }
        }
        else{
            alert("Please enter valid folder name");
        }
        
    }

    function addFolderInHTML(fname,fid,cfid){
        let folderTemplate = customTemplate.content.querySelector(".folder");
        let divFolder = document.importNode(folderTemplate,"true");
        let divFname =  divFolder.querySelector("[purpose]");
        let spanEdit = divFolder.querySelector("span[action='edit']");
        let spanDelete = divFolder.querySelector("span[action='delete']");
        let spanView = divFolder.querySelector("span[action='view']");
        divFolder.setAttribute("fid",fid);
        console.log("in call",cfid);
        divFolder.setAttribute("pid",cfid);


        spanEdit.addEventListener("click",editFolder);
        spanDelete.addEventListener("click",deleteFolder);
        spanView.addEventListener("click",viewFolder);
        

        divFname.textContent = fname;
        folderContainer.appendChild(divFolder);
    }

    function editFolder(){                                          // Note1: If functions defined outside will have closure only the same level variables means only 
                                                                    // folderContainer, btnAdd, customtemplat can be the closure of editFolder
        let fname = prompt("Replace with");   
        if(!fname){
            return;
        }
        let genFname = fname[0].toUpperCase();
        genFname =  genFname + fname.slice(1).toLowerCase();
        fname = genFname;    
        
        let alreadyExists = folders.filter(f=>f.pid == cfid).some(f=>f.name == fname);
        if(!alreadyExists){
            let divFolder = this.parentNode;
            let divFname = divFolder.querySelector("[purpose='name']");
            let fldrId = parseInt( divFolder.getAttribute("fid") );    
            divFname.textContent = fname;

            let find = folders.find(f=> f.fid == fldrId);
            find.name = fname;
            saveToLocalStorage();
        }
        else{
            alert("Folder name "+fname+" already exists...");
        }  
    }

    function viewFolder(){
        let divFolder = this.parentNode;
        let fname = divFolder.querySelector("[purpose='name']").textContent;
        let fldrId = divFolder.getAttribute("fid");
        let anchorpath = customTemplate.content.querySelector(".path");
        let apath = document.importNode(anchorpath,true);
        apath.textContent = fname;
        apath.setAttribute("fid",fldrId);
        apath.addEventListener("click",navigateBreadCrumb);
        breadCrumbContainer.appendChild(apath);

        folderContainer.innerHTML ="";
        cfid = fldrId;
        folders.filter(f=>f.pid == cfid).forEach(function(fldr){
            addFolderInHTML(fldr.name,fldr.fid,fldr.pid);
        })
    }

    function navigateBreadCrumb(){
        let fldrId = this.getAttribute("fid");
        cfid = fldrId;
        folderContainer.innerHTML = "";
        folders.forEach(function(fldr){
            if(fldr.pid == cfid){
                addFolderInHTML(fldr.name,fldr.fid,fldr.pid);
            }
        })

        while(this.nextSibling){
            breadCrumbContainer.removeChild(this.nextSibling);
        }
    }

    function deleteFolder(){
        let divFolder = this.parentNode;
        let fname = divFolder.querySelector("[purpose='name']").textContent;
        let fldrId = parseInt( divFolder.getAttribute("fid") ); 
        let flag = confirm("Are you sure you want to delete "+fname+"?");
    

        if(flag == true){

            let isParent = folders.some(f=> f.pid == fldrId);
            if(isParent){
                alert("Cannot delete "+fname+" has sub folders...");
            }
            else{
                folderContainer.removeChild(divFolder);
                let fidx = folders.findIndex(f=> f.fid == fldrId) ;
                folders.splice(fidx,1);
                saveToLocalStorage();
            }
        }
        
    }

    function saveToLocalStorage(){
        console.log(folders);
        let fjson = JSON.stringify(folders);
        localStorage.setItem("drive",fjson);
    }

    function loaddataFromLocalStorage(){                        // Note2: This will help in making data persistant
        let fjson = localStorage.getItem("drive");
        if(!!fjson){
            folders = JSON.parse(fjson);
            let mfid = -1;
            folders.forEach(function(fldr){
                mfid = (fldr.fid>mfid)?fldr.fid:mfid;   
            })
            folders.filter(f=> f.pid == cfid).forEach(function(fldr){
                addFolderInHTML(fldr.name,fldr.fid,fldr.pid);
            })
            fid = mfid;
        }
    }

    loaddataFromLocalStorage();
})();                                                              



