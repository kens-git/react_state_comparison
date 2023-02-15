import Favorite from './Favorite';
import { PRODUCT1 } from '../../test_data/data';

const FavoriteProducts = (props: any) => {
  return (
    <div
      className={
        props.className +
        ' flex flex-col gap-default p-section rounded-section bg-section dark:bg-section-dark'
      }
    >
      <h1 className="text-xl">Favorites</h1>
      <Favorite product={PRODUCT1} />
    </div>
  );
};

export default FavoriteProducts;
