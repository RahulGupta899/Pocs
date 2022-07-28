function EachOption(props){
    let icon = props.icon;
    let name = props.name;
    return(
        <div className="flex align-center eachOption h-10 items-center">
            <span Style="font-size:15px;" className="material-symbols-outlined mx-4">{icon}</span>
            <span>{name}</span>
        </div>
    )
}
export default EachOption;