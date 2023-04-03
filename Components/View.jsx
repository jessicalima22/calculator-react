

export default function View (props){
    return(
        <>
        <h2 className="h2">{props.view}{props.children}</h2>
        </>
    )
}