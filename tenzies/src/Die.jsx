export default function Die(props){
    let classes = ["die"];
    if(props.isHeld){
        classes.push("held");
    }
    return (
        <button className={classes.join(" ")}>{props.value}</button>
    )
}