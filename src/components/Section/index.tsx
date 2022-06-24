import "./style.css";

interface sectionProps {
    image: string;
    text: string
}

export default function Section(props: sectionProps) {
    return (
    <div className="section-card">
        <img src={props.image} alt="category"></img>
        <a><p>{props.text}</p></a>
    </div>

    );
}

