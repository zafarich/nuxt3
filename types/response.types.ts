export interface IResponse {
  success: boolean;
  message: string;
  code: number;
  data?: {
    data?: object | [];
    [key: string]: object | null | [] | object | number | string | boolean;
  };
}
