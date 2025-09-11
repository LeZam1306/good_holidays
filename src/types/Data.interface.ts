export interface DataInterface<T = object> {
  error: boolean;
  message: string;
  data: T;
}
