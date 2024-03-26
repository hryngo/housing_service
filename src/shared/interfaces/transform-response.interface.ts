export interface TransformResponse<T> {
  data: T | { results: T[] };
}
