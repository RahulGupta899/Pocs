(function(){
    let btn = document.querySelector("#btnAddFolder");
    let divContainer = document.querySelector("#container");
    let myTemplates = document.querySelector("template");
    let breadCrumb = document.querySelector("#divBreadCrumb");
    let cfid = -1; // Current folder id , in which we are 
    let fid = -1; // folder id
    let folders = [];

    btn.addEventListener("click",addFolder);

    function addFolder(){
        let fname = prompt("Enter file name").trim();

        if(!!fname){  // if Someting entered !!("") return true
            let exists = folders.some(f => f.name == fname);
            if(exists){
                alert("Folder "+fname+" Already exists !!");
            }
            else{
                ++fid;
                console.log("cfid",cfid)
                addFolderInPage(fname,fid,cfid);
                
                folders.push({
                    id:fid,
                    name:fname,
                    pfid:cfid,
                })
                persistFoldersToStorage();
            }
        }
        else{
            alert("Please enter a name");
        }

    }

    function addFolderInPage(fname,fid,pfid){  // pid : parent folder id
        let divFolderTemp = myTemplates.content.querySelector(".folder");  // Catching the template of folders
        let divFolderClone = document.importNode(divFolderTemp,true);       // Making copy of the folderTemplate 
        divFolderClone.setAttribute("fid",fid);
        divFolderClone.setAttribute("pfid",pfid);
        let spanEdit = divFolderClone.querySelector("span[purpose='edit']");
        let spanDelete = divFolderClone.querySelector("span[purpose='delete']");
        let spanView = divFolderClone.querySelector("span[purpose='view']");

        spanEdit.addEventListener("click",handleEdit);

        spanEdit.addEventListener("mouseover",function(){
            spanEdit.style.color = "pink";
        });

        spanEdit.addEventListener("mouseout",function(){
            spanEdit.style.color = "black";
        });

        

        spanDelete.addEventListener("click",handleDelete);

        spanDelete.addEventListener("mouseover",function(){
            spanDelete.style.color = "pink";
        });

        spanDelete.addEventListener("mouseout",function(){
            spanDelete.style.color = "black";
        });

        spanView.addEventListener("click",handleView);

        spanView.addEventListener("mouseover",function(){
            spanView.style.color = "pink";
        });

        spanView.addEventListener("mouseout",function(){
            spanView.style.color = "black";
        });

        let divName =   divFolderClone.querySelector(".name");
        divName.textContent = fname;
        divContainer.appendChild(divFolderClone);
    }

    function handleEdit(){
        let divFolderClone = this.parentNode;
        let divName =   divFolderClone.querySelector(".name");

        let newfname = prompt("Edit name as?")
        if(newfname.length == 0) return;
        divName.textContent = newfname;
        fname = newfname;

        let idx = folders.filter(f=>f.pfid == cfid).findIndex(f=> f.id == parseInt(divFolderClone.getAttribute("fid")));
        folders[idx].name = fname;
        persistFoldersToStorage();  
    }

    function handleDelete(){
        let divFolderClone = this.parentNode;
        let fname =   divFolderClone.querySelector(".name").textContent;
        let flag = confirm("Are you sure you want to delete "+fname+" ?");
        if(flag == true){
            divContainer.removeChild(divFolderClone);
            let idx = folders.filter(f=>f.pfid==cfid).findIndex(f=> f.id == parseInt(divFolderClone.getAttribute("fid")));
            folders.splice(idx,1);  // Remove the idx - 1 element only
            persistFoldersToStorage();
        }
        
    }

    function handleView(){
        let divFolder = this.parentNode;
        let divParentName = divFolder.querySelector(".name").textContent;
        let anchorTagTemplate = myTemplates.content.querySelector(".path");
        let anchorTag = document.importNode(anchorTagTemplate,true);

        cfid = parseInt(divFolder.getAttribute("fid"));

        anchorTag.textContent = divParentName;
        breadCrumb.appendChild(anchorTag);

        divContainer.innerHTML = "";
        folders.filter(f=> f.pid == cfid).forEach(f=>{
            addFolderInPage(f.name,f.fid,f.pid);
        })
    }

    function navigateBreadCrumb(){
        let fname = this.innerHTML;
        cfid = parseInt(this.getAttribute("fid"));

        divContainer.innerHTML = "";
        folders.filter(f=> f.fid == cfid).forEach(f=>{
            addFolderInPage(f.name,f.id,f.pid);
        })

        while(this.nextSibling){
            this.parentNode.removeChild(this.nextSibling);
        }
    }
    
    function persistFoldersToStorage(){                          // This is how we store data in local storage
        console.log(folders);
        let fjson = JSON.stringify(folders);
        localStorage.setItem("data",fjson);
    }

    function loadFoldersFromLocalStorage(){
        let fjson = localStorage.getItem("data");
        if(!!fjson){
            folders = JSON.parse(fjson);
            let mfid = -1;
            folders.forEach(f => {    
                mfid = (f.id>mfid)?f.id:mfid;
                if(f.pfid == cfid){
                addFolderInPage(f.name,f.fid,f.pfid);
                }
            });
            fid = mfid;
        }  
    }

    loadFoldersFromLocalStorage();          //  call onload

})();                                                                    



// whenever there is MULTIPLE js file - write codes within IIFEE
// Name space pollution
// say a html file may be using 2 js file both have same variables , so there will be collision, but if the variable and codes are wrapped then there is no Name Space collision
// saved data in google storage(preserve) - can't delete when we refresh page 
// Validataion : Folders should not of same name
