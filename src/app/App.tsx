import { Suspense, useState } from 'react';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar';
import { Navbar } from 'widgets/Navbar';
import { Theme } from 'app/providers/ThemeProvider/libs/ThemeContext';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider/libs/useTheme';
import { AppRouter } from './providers/ThemeProvider/router';
import './styles/index.scss';

export function App() {
  const { theme } = useTheme();

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1)
  }

  if (count > 5) {
    throw new Error("Test error");
  }

  return (
    <div className={classNames('app', {
      light: theme === Theme.LIGHT,
      dark: theme === Theme.DARK,
    })}
    >
      <Suspense fallback="Loading...">
        <button onClick={increment}>
          Error
        </button>
        <Navbar className="app__navbar" />
        <Sidebar />
        <AppRouter />
      </Suspense>
    </div>
  );
}
