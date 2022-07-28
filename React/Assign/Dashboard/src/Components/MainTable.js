import './Styles/MainTable.css'
import Status from './Status'
import Information from './Information';

function MainTable(){
    return(
        <div className="maintable pt-24 ">
            <Status/>
            <Information/>
        </div>
    )
}
export default MainTable;