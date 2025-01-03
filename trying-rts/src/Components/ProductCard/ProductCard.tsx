import "./ProductCard.css";

interface ProductProps {
  title: string;
  price: number;
  thumbnail: string;
  discountPercentage: number;
}

const ProductCard: React.FC<ProductProps> = ({
  title,
  price,
  thumbnail,
  discountPercentage,
}) => {
  return (
    <div className="productCard">
      <div className="productCard-container">
        <div className="card-image">
          <img src={thumbnail} alt={title} />
        </div>
        <div className="card-details">
          <h3>{title}</h3>
          <div className="card-price">
            <p> {discountPercentage}</p>
            <p>{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
