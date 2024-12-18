import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';

const App = React.lazy(() => import('./app'));

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.Suspense
    fallback={
      <div
        style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Loading...
      </div>
    }
  >
    <App />
  </React.Suspense>
);
