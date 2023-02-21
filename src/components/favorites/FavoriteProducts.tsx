import { useAtom } from 'jotai';
import Favorite from './Favorite';
import favoritesAtom from '../../store/favorites';

import { PRODUCT1 } from '../../test_data/data';

const FavoriteProducts = (props: any) => {
  const [favorites, setFavorites] = useAtom(favoritesAtom);

  const onFavoriteRemoved = (id: number) => {
    console.log('removed', id);
    const updatedFavorites = favorites;
    updatedFavorites.delete(id);
    setFavorites(new Map(updatedFavorites));
  };
  console.log(favorites);
  return (
    <div
      className={
        props.className +
        ' flex flex-col gap-default p-section rounded-section bg-section dark:bg-section-dark'
      }
    >
      <h1 className="text-xl">Favorites</h1>
      {[...favorites].map((favorite) => {
        return (
          <Favorite
            key={favorite[0]}
            product={favorite[1]}
            onRemove={onFavoriteRemoved}
          />
        );
      })}
    </div>
  );
};

export default FavoriteProducts;
