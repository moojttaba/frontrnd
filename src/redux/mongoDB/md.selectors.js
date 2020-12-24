import { createSelector } from "reselect";

const selectMd = (state) => state.md;

export const selectCollections = createSelector(
  [selectMd],
  (md) => md.MDcollections.data
);

// export const selectCollectionsForPreview = createSelector(
//   [selectCollections],
//   (collections) =>
//     collections ? Object.keys(collections).map((key) => collections[key]) : []
// );

// export const selectCollection = (collectionUrlParam) =>
//   createSelector([selectCollections], (collections) =>
//     collections ? collections[collectionUrlParam] : null
//   );

// export const selectIsCollectionFetching = createSelector(
//   [selectShop],
//   (shop) => shop.isFetching
// );

// export const selectIsCollectionsLoaded = createSelector(
//   [selectShop],
//   (shop) => !!shop.collections
// );
