export default function Count(props){
    console.log("count render")
    return(
        <h2 className="count">{props.number}</h2>
    )
}
