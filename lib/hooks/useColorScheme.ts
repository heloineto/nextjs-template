import ColorScheme from '@lib/enums/ColorScheme';
import { useEffect } from 'react';

const useColorScheme = () => {
  const colorScheme = ColorScheme.Dark;

  useEffect(() => {
    if (colorScheme === ColorScheme.Dark) {
      document.querySelector('body')?.classList.add('dark');
      return;
    }

    document.querySelector('body')?.classList.remove('dark');
  }, [colorScheme]);

  return colorScheme;
};

export default useColorScheme;
