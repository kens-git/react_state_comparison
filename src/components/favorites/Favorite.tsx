import Product from 'src/types/Product';

interface FavoriteProps {
  onRemove(id: number): void;
  product: Product;
}

const Favorite = (props: FavoriteProps) => {
  return (
    <div className="flex items-center justify-between p-item rounded-item bg-list-item dark:bg-list-item-dark">
      <span className="">
        {props.product.name} - ${props.product.price}
      </span>
      <button
        onClick={() => {
          props.onRemove(props.product.id);
        }}
        className="p-button rounded-button text-sm bg-button dark:bg-button-dark hover:bg-button-hover dark:hover:bg-button-hover-dark"
      >
        Remove
      </button>
    </div>
  );
};

export default Favorite;
