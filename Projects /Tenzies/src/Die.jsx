export default function Die(props){
      const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return(
        <button
        className="die-btn"
        style={styles}
        onClick={props.hold}
        arial-pressed={props.isHeld}
        aria-label={`Dies with value ${props.value},
        ${props.isHeld ? "held":"not held"}`}
        > {props.value} </button>
    )
}