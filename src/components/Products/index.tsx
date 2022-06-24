import "./style.css";

interface productProps {
    image: string;
    title: string;
    text: string;
    price: string;
}

export default function Product(props: productProps) {
    return (
        <div className="product-card">
            <div className="card-content">
            <img src={props.image} alt="product"/>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            </div>
            <div className="bottom-line">
                <p>{props.price}</p>
                <a href="#">See more</a>
            </div>
        </div>

    );
}