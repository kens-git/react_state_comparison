import INVENTORY from '../../test_data/data';
import Product from 'src/types/Product';
import ProductDisplay from './ProductDisplay';

const AvailableProducts = (props: any) => {
  return (
    <div
      className={
        props.className +
        ' flex flex-col gap-default p-section rounded-section bg-section dark:bg-section-dark'
      }
    >
      <h1 className="text-xl">Available Products</h1>
      {INVENTORY.map((product: Product) => {
        return <ProductDisplay product={product} />;
      })}
    </div>
  );
};

export default AvailableProducts;
