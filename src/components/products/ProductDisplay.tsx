import Product from 'src/types/Product';

interface ProductDisplayProps {
  isFavorited: boolean;
  onAddtoFavorites(product: Product): void;
  product: Product;
}

const ProductDisplay = (props: ProductDisplayProps) => {
  return (
    <div className="p-item rounded-item bg-list-item dark:bg-list-item-dark">
      <div className="flex justify-between">
        <h1>{props.product.name}</h1>
        <span>${props.product.price}</span>
      </div>
      <div className="mt-1 flex justify-between">
        <span className="italic text-sm">{props.product.category}</span>
        {!props.isFavorited && (
          <button
            onClick={() => {
              props.onAddtoFavorites(props.product);
            }}
            className="p-button bg-button rounded-button text-sm dark:bg-button-dark hover:bg-button-hover dark:hover:bg-button-hover-dark"
          >
            Favorite
          </button>
        )}
      </div>
      <p className="mt-default text-sm">Available: {props.product.inventory}</p>
      <div className="flex gap-input">
        <input
          className="w-input"
          type="number"
          step={1}
          min={0}
          max={10000}
          defaultValue={1}
        />
        <button className="p-button text-sm bg-button rounded-button dark:bg-button-dark hover:bg-button-hover dark:hover:bg-button-hover-dark">
          Add to cart
        </button>
      </div>
      <p className="mt-default">{props.product.description}</p>
    </div>
  );
};

export default ProductDisplay;
