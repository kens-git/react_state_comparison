import { useAtom } from 'jotai';
import Theme from '../../types/Theme';
import themeAtom from '../../store/theme';

const ThemeButton = () => {
  const [theme, setTheme] = useAtom(themeAtom);
  const onButtonClick = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  return (
    <button
      onClick={onButtonClick}
      className="p-button rounded-button bg-button dark:bg-button-dark hover:bg-button-hover dark:hover:bg-button-hover-dark"
    >
      Switch Theme
    </button>
  );
};

export default ThemeButton;
