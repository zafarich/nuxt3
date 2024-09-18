export interface IResponse<T> {
  success: boolean;
  message: string;
  code: number;
  data: T[] | T;
}
