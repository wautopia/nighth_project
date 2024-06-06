import './top_main_products.css';

export function TopMainProducts(props) {
    return (
        <div className="Products">
            <img src={props.img} className="products-img" alt=""></img>
            <p className="products-title">{props.title}</p>
        </div>
    )
    
}