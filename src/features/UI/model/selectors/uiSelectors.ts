import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

export const getUiScroll = (state: StateSchema) => state.ui.scroll;

export const getUiScrollByPath = createSelector(
  getUiScroll,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);
