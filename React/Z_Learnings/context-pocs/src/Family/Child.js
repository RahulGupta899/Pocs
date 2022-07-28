import GrandChild from "./GrandChild";

function Child(){
    console.log("Child Rendered");
    return(
        <div>
            <h2>Child</h2>
            <h2>🔽</h2>
            <GrandChild/>
        </div>
       
    )
}

export default Child;