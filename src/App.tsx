import { useEffect } from 'react';
import { useAtomValue } from 'jotai';
import AvailableProducts from './components/products/AvailableProducts';
import Cart from './components/cart/Cart';
import FavoriteProducts from './components/favorites/FavoriteProducts';
import Theme from './types/Theme';
import ThemeButton from './components/theme/ThemeButton';
import UserBalance from './components/account/UserBalance';
import themeAtom from './store/theme';

const App = () => {
  const theme = useAtomValue(themeAtom);

  /* 
    First, there's a known issue with the initial render where it
    won't have the correct theme from local storage because the
    themeAtom will have the default theme set to the initial value
    when it's delivered from the Webpack dev server.
    This causes an issue if the dark theme is stored in local storage
    where the light theme is rendered first then the application is quickly
    swapped to the dark theme. A loading component could be shown to mitigate
    this issue, but, it doesn't seem to add much value to a demo of state
    management.

    Second, putting the theme update here is less than ideal because it will
    cause a re-render of the entire application when the theme is changed,
    instead of just the CSS styling in the browser. Since this demo is focused
    on showing the features of Jotai it's put here for simplicity and easier
    discoverability.
  */
  useEffect(() => {
    if (theme === Theme.DARK) {
      document.documentElement.classList.add(Theme.DARK);
    } else {
      document.documentElement.classList.remove(Theme.DARK);
    }
  }, [theme]);

  return (
    <main className="w-screen h-max p-document bg-document dark:bg-document-dark flex flex-col gap-default">
      <ThemeButton />
      <h1 className="text-title py-default text-3xl text-txt-title dark:text-txt-title-dark">
        Best Deals™ online store!
      </h1>
      <UserBalance />
      <div className="flex gap-section">
        <AvailableProducts className="basis-2/6" />
        <FavoriteProducts className="basis-2/6" />
        <Cart className="basis-2/6" />
      </div>
    </main>
  );
};

export default App;
