import { Story } from '@storybook/api';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

export const RouterDecorator = ({
  initialEntries = ['/test/1'],
  path = '/test/:id',
}) => (story: () => Story) => (
  <MemoryRouter initialEntries={initialEntries}>
    <Routes>
      <Route path={path} element={story()} />
    </Routes>
  </MemoryRouter>
);
