import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { enqueueSnackbar } from 'notistack';

export const requestInterceptor = {
  onFulfilled: (config: InternalAxiosRequestConfig) => {
    // Add signal to cancel request after 50 seconds
    const controller = new AbortController();
    const newConfig = { ...config, signal: controller.signal };
    setTimeout(() => controller.abort(), Number(import.meta.env.VITE_APIS_REQUEST_TIMEOUT));

    return newConfig;
  },
  onRejected: (error: AxiosError) => {
    // Do something with request error
    return Promise.reject(error);
  },
};

export const responseInterceptor = {
  onFulfilled: (response: AxiosResponse) => {
    // Any status code that lie within the range of 2xx cause this function to trigger

    return response;
  },
  onRejected: (error: AxiosError) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger

    if (error.response) {
      // Request made and server responded
      // get handles in place of api call (some of them)
      // change to switch case
      if (error.response.status === 500) {
        enqueueSnackbar({
          variant: 'error',
          message: 'خطای سرور',
        });
      }
    } else if (error.request) {
      // The request was made but no response was received

      switch (error.message) {
        case 'Network Error':
          enqueueSnackbar({
            message: 'خطای دسترسی به شبکه',
            variant: 'error',
          });
          break;
        case 'canceled':
          enqueueSnackbar({
            message: 'درخواست به دلیل طولانی شدن زمان لغو شد',
            variant: 'error',
          });
          break;
        default:
          enqueueSnackbar({
            message: 'خطای ناشناخته',
            variant: 'error',
          });
          break;
      }
    } else {
      // Something happened in setting up the request that triggered an Error
      enqueueSnackbar({
        message: 'خطای ایجاد درخواست',
        variant: 'error',
      });
    }

    return Promise.reject(error);
  },
};
