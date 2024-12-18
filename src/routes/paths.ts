const paths = {
  home: () => '/',
  products: () => '/products',
  notFound: () => '/404',
  server500: () => '/500',
} as const;

export default paths;
