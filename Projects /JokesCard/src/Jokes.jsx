import './index.css'
import React from 'react'
export default function Jokes(props){

const [isShow , setIsShow] = React.useState(false)
function toggleShow(){
    setIsShow(preShow => !preShow)
}

    {/*console.log(!props.isPun)*/}
    console.log(props.comments)
    return(
        <>
      {/*  <p className="setup"> Setup{props.setup}</p>*/}
     {/*   { props.setup &&<p className="setup"> Setup{props.setup}</p>}*/}
         <p style={{display:props.setup? "block":"none"}}   className="setup"> Setup{props.setup}</p>

        {isShow && <p className="punchline">{props.punchline}</p>}
        <button onClick={toggleShow}>{isShow ? "hide" :"show" } punchline</button>
        <hr className="line"></hr>
        </>
    )
}