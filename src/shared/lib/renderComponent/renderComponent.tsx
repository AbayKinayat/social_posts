import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from '../../config/i18n/i18nForTests';

interface RenderComponentOption {
  route?: string
}

export const renderComponent = (
  component: any,
  { route = '/' }: RenderComponentOption = {},
) => render(
  <MemoryRouter initialEntries={[route]}>
    <I18nextProvider i18n={i18nForTests}>
      {component}
    </I18nextProvider>
  </MemoryRouter>,
);
