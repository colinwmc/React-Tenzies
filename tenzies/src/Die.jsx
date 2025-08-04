export default function Die(props) {
    let classes = ["die"];
    if (props.isHeld) {
        classes.push("held");
    }
    return (
        <button
            onClick={() => props.hold(props.id)} className={classes.join(" ")}
            aria-label={`Die with value ${props.value}, 
            ${props.isHeld ? "held" : "not held"}`}
            aria-pressed={props.isHeld}>
            {props.value}
        </button>
    )
}