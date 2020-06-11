import React, {useState, useMemo} from 'react';

import Themes from 'global/themes';

export const ThemeContext = React.createContext();

export default function Provider({children}) {
  const [mode, setMode] = useState('dark');
  const [colors, setColors] = useState(Themes.dark);

  const value = useMemo(
    () => ({
      mode,
      setMode,
      colors,
      changeMode: () => {
        if (mode === 'dark') {
          setMode('light');
          setColors(Themes.light);
        } else {
          setMode('dark');
          setColors(Themes.dark);
        }
      },
    }),
    [mode, colors],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
