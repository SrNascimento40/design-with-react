import "./styles.css"

interface linkProps{
    text:string;
    redirect:string;
}

function Link (props: linkProps) {
    return (
        <a href={props.redirect} target="_blank" rel="noreferrer">
            {props.text}
        </a>
    )
}

export default Link;
