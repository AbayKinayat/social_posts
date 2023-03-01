import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'shared/ui';
import { PageError } from 'widgets/PageError';

import { App } from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider/index';
import 'shared/config/i18n';

render(
  <BrowserRouter>
    <ErrorBoundary component={<PageError />}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root'),
);
