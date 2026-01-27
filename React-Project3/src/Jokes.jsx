import './index.css'
export default function Jokes(props){
    {/*console.log(!props.isPun)*/}
    console.log(props.comments)
    return(
        <>
      {/*  <p className="setup"> Setup{props.setup}</p>*/}
     {/*   { props.setup &&<p className="setup"> Setup{props.setup}</p>}*/}
         <p style={{display:props.setup? "block":"none"}}   className="setup"> Setup{props.setup}</p>

        <p className="punchline">{props.punchline}</p>
        <hr className="line"></hr>
        </>
    )
}