export default function Die(props){
    let classes = ["die"];
    if(props.isHeld){
        classes.push("held");
    }
    return (
        <button onClick={() => props.hold(props.id)} className={classes.join(" ")}>{props.value}</button>
    )
}