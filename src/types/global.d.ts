type ApiResponse<T> = {
  products: T;
};

type ApiErrorHandler<T> = (response: ApiResponse<T>) => void;
