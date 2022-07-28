import './Styles/Pagination.css'
function Pagination(props){
    let totalItems = props.totalItems;
    let limit = props.limit;
    let currentPageCallParent = props.updateCurrentPage;

    let pages = Math.ceil(totalItems/limit);
    let pagesArr = [];
    for(let i=1;i<=pages; i++){
        pagesArr.push(i);
    }

    const updateCurrentPage = function(pageNo){
        currentPageCallParent(pageNo);
    }
    


    return(
        <div className=" w-44 ml-auto">
            {
                pagesArr.map(function(pg,idx){
                    return (
                        <span className="page" onClick={()=>{
                            updateCurrentPage(pg);
                        }} key={idx}>{pg}</span>
                    )
                })
            }
            
        </div>
    )
}

export default Pagination;