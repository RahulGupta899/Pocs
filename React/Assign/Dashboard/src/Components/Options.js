import './Styles/Options.css'
import EachOption from './EachOption'
function Options(){
    return(
        <div className="options shadow-2xl">
            <EachOption name="DashBoard" icon="speed"/>
            <EachOption name="Inventory" icon="loyalty"/>
            <EachOption name="Orders" icon="breaking_news_alt_1"/>
            <EachOption name="Shipping" icon="local_shipping"/>
            <EachOption name="Channel" icon="share"/>
        </div>
    )
}
export default Options;