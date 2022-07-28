import './Styles/Buttons.css'
function Buttons(){
    return(
        <div className=" flex border-black my-2 ml-4 mb-4 ">
            <button className="flex justify-center border hover:border-black w-36 h-8 pt-2 mr-2">
                <span className="material-symbols-outlined icon mr-2">app_shortcut</span>
                <span className="text-sm">Import Orders</span>
            </button>

            <button className="flex justify-center border hover:border-gray-400 w-32 h-8 pt-2 mr-2 iconBgLight">
                <span className="material-symbols-outlined icon mr-2">send</span>
                <span className="text-sm">Accept</span>
            </button>

            <button className="flex justify-center border hover:border-gray-400 w-32 h-8 pt-2 mr-2 iconBgLight">
                <span className="material-symbols-outlined icon mr-2">print</span>
                <span className="text-sm">Print</span>
                <span className="material-symbols-outlined ml-2 icon">expand_more</span>
            </button>

            <button className="flex justify-center ml-auto border hover:border-gray-400 w-32 h-8 pt-2 mr-2 iconBgRefresh">
                <span className="material-symbols-outlined icon mr-2 ">cached</span>
                <span className="text-sm">Refresh</span>
            </button>
            
        </div>
    )
}

export default Buttons;