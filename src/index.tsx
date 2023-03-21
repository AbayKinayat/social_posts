import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'shared/ui';
import { PageError } from 'widgets/PageError';
import { StoreProvider } from 'app/providers/StoreProvider';

import { App } from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider/index';
import 'shared/config/i18n';

render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary component={<PageError />}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root'),
);
