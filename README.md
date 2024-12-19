# Tapsi-Food-Challenge

## See docs folder for more details of bundleSize and performance

### Project Overview

In this project, I utilized the following technologies to build an efficient and scalable frontend application:

- **React**: For building the core UI components and implementing a reactive user interface.  
- **Material-UI (MUI)**: To create a modern, responsive, and visually appealing design system with pre-built components.  
- **React Query**: For managing API caching and ensuring efficient data fetching, synchronization, and state management. The caching duration is configurable via the `.env` file, allowing flexibility in controlling data freshness.  
- **Zustand**: To handle user actions and manage the application state seamlessly, including responses from API calls.  
- **TypeScript**: For adding static typing to the project, improving code reliability, maintainability, and developer experience.  
- **Vite**: Used as the build tool to streamline development and significantly reduce the bundle size, offering faster build times and a leaner output.  

The application is structured using the **Atomic Design methodology**, which categorizes components into reusable layers (Atoms, Molecules, Organisms, Templates, and Pages). While the project currently consists of a single page, this architecture makes scaling the application straightforward and efficient.  

Additionally, the API integration is designed with a dedicated **apis** folder for managing all API-related logic. This includes a clear separation of concerns:
- **`config/`**: For managing interceptors, endpoints configurations, and shared settings.  
- **`controller/`**: Where services and API call logic are implemented.  
- **`dto/`**: For documenting and standardizing request and response objects.  

The API integration supports **request cancellation** to handle rapid user interactions and prevent unnecessary network calls.  
For detailed insights into the project's configuration and optimizations, please refer to the **`docs` folder**.

---

## Features

- **Atomic Design Architecture**: Ensures a modular, reusable, and scalable structure.  
- **API Management**: A dedicated `apis/` folder for organized API logic.  
  - `config/`: Manages endpoints, interceptors, and shared configuration.  
  - `controller/`: Implements service functions for API calls.  
  - `dto/`: Documents and standardizes request and response objects.  
- **API Caching with React Query**: Configurable via `.env`, offering flexibility in data management.  
- **Request Cancellation**: Improves performance by preventing redundant API calls.  
- **TypeScript**: Adds type safety and enhances developer productivity.  
- **Material-UI Integration**: For a consistent and visually appealing user interface.  
- **Vite Configuration**: Provides faster builds and smaller bundles, optimized for modern frontend applications.  
- **Git Flow**: A robust branching strategy for streamlined collaboration and deployment.

---

## Folder Structure

```
src/
├── apis/               // API-related logic
│   ├── config/         // Endpoints, interceptors, and configuration
│   │   ├── endpoints/
│   │   │     └──index.ts
│   │   └── interceptors.ts
│   ├── controller/     // API service implementations
│   │   ├── auth/
│   │   │     └──index.ts
│   │   └── product/
│   │         └──index.ts
│   ├── dto/            // DTOs for requests and responses
│   │   ├── auth/
│   │   │     ├── req.ts
│   │   │     ├── res.ts
│   │   │     └──index.ts
│   │   └── product
│   │         ├── req.ts
│   │         ├── res.ts
│   │         └──index.ts
├── components/         // Atomic Design components
│   ├── atoms/          
│   ├── molecules/
│   ├── organisms/
│   └── templates/
├── hooks/               // Custom hooks
├── stores/              // Zustand state management
├── utils/               // Helper functions and utilities
├── themes/              // Manage theme mui
├── pages/               // Pages
├── app.tsx              // Secondary app entry point for improving react-tree shaking and accessing lazy  loading app
└── main.tsx             // Main app entry point
```

---

## Example: APIs Folder

### 1. **Config**

#### File: `endpoints/index.ts`
```ts
const endpoints = {
  product: '/products.json',
} as const;

export default endpoints;

```

#### File: `interceptors.ts`
```ts
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

```

---

### 2. **Controller**

#### File: `product/index.ts`
```ts
import apis from '@/apis';
import endpoints from '@/apis/config/endpoints';
import { IProductResponseAction } from '@/apis/dto/product';

const productController = {
  // get product list
  getProductList: async () => {
    const response = await apis.get<ApiResponse<IProductResponseAction[]>>(endpoints.product);

    return response.data;
  },
  // get product by id

  // create product

  // update product

  // delete product
};
export default productController;

```

---

### 3. **DTO**

#### File: `product/req.ts`
```ts
interface IProductRequestAction {}

export type { IProductRequestAction };

```

#### File: `product/res.ts`
```ts
interface IProductResponseAction {
  id: string;
  base64Image: string;
  description: string;
  price: number;
  strikePrice: number;
  title: string;
}

export type { IProductResponseAction };
;

```

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mohammadgarmabi/tapsi-food-challenge.git
   cd tapsi-food-challenge
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Configure environment variables in `.env`:
   ```env
   VITE_APIS_API_URL=https://api.example.com
   VITE_APIS_REQUEST_TIMEOUT=50000
   VITE_APIS_CACHE_APIS=60 * 60 * 1000
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

5. Build for production:
   ```bash
   pnpm build
   ```

---

## Scalability

With a modular **`apis/`** folder structure and **Atomic Design methodology**, this project is designed to scale efficiently. Adding new APIs, endpoints, or features can be achieved with minimal refactoring, making it suitable for larger applications.

---

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the application as per the license terms.