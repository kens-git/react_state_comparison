import { atomWithStorage } from 'jotai/utils';
import Theme from '../types/Theme';

const themeAtom = atomWithStorage('siteTheme', Theme.LIGHT);

export default themeAtom;
