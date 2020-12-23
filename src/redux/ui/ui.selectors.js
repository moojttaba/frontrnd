import { createSelector } from 'reselect';


const selectUi = state => state.ui;

export const selectUiValue = createSelector(
  [selectUi],
  ui => ui.value
);
