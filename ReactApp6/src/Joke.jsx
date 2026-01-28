
import './index.css'
export default function Joke(props) {
    return(
        <>
        <p className="setup">{props.setup}</p>
        <p className="punchline">{props.punchline}</p>
        <hr className='line'></hr>
        </>
    )
}