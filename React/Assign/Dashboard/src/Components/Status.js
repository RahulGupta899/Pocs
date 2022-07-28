import './Styles/Status.css'
function Status(){
    return(
        <div className=' w-2/3 py-2 mx-4 flex justify-between'>
            <span className=" makeup mx-4">Pending</span>
            <span className=" makeup mx-4">Accepted</span>
            <span className=" makeup mx-4">AWB Created</span>
            <span className=" makeup mx-4">Ready to Ship</span>
            <span className=" makeup mx-4">Shipped</span>
            <span className=" makeup mx-4">Completed</span>
            <span className=" makeup mx-4">Cancelled</span>
        </div>
    )
}
export default Status;