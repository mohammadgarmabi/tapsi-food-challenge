/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_APIS_CACHE_APIS: string;
  VITE_APIS_API_URL: string;
  VITE_APIS_REQUEST_TIMEOUT: string;
}

interface ImportMeta {
  env: ImportMetaEnv;
}
