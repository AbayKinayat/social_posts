import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from '../../config/i18n/i18nForTests';

interface RenderComponentOption {
  route?: string,
  initialState?: DeepPartial<StateSchema>
}

export const renderComponent = (
  component: any,
  { route = '/', initialState }: RenderComponentOption = {},
) => render(
  <StoreProvider initialState={initialState}>
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTests}>
        {component}
      </I18nextProvider>
    </MemoryRouter>
  </StoreProvider>,
);
