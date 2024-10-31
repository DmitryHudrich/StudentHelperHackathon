export type UniqueEntity<T = object> = T & {
  id: Guid;
};
