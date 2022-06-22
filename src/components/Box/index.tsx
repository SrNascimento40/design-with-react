import "./style.css"

interface boxProps {
    background: string;
}

export default function Box (props: boxProps) {
    return <section className={`box ${props.background}`}></section>
}
