import { createSelector } from 'reselect';


export const selectMd = state => state.Md;

export const selectMdData = createSelector(
  [selectMd],
  Md => Md.MdData.data
);






