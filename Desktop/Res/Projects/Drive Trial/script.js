(function(){
    let addFolderBtn = document.querySelector("#addFolder");
    let addFileBtn = document.querySelector("#addFile");
    let mainContainer = document.querySelector("#container");
    let breadCrumb = document.querySelector("#breadCrumb");
    let myTemplates = document.querySelector("#myTemplates");

    addFolderBtn.addEventListener("click",addFolder);
    addFileBtn.addEventListener("click",addFile);


    function addFolder(){
        let fName = prompt("Enter folder name");
        let foldertemp = myTemplates.content.querySelector(".folder");
        let folder = document.importNode(foldertemp,"true");
        let spanRename = folder.querySelector("[action='rename']");
        let spanView = folder.querySelector("[action='view']");
        let spanDelete = folder.querySelector("[action='delete']");
        let folderName = folder.querySelector("div[purpose='name']");
        folderName.textContent = fName;
        mainContainer.appendChild(folder);


        spanRename.addEventListener("click",handleRename);
        spanView.addEventListener("click",handleView);
        spanDelete.addEventListener("click",handleDelete);
    }

    function addFile(){
        let fName = prompt("Enter file name");
        alert("folder name "+fName);
    }

    function handleView(){
        alert("click view");
    }

    function handleRename(){
        alert("click Rename");
    }
    function handleDelete(){
        alert("click Delete");
    }

})();