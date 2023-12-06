import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { Example } from './doc/Example';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

root.render(
    <React.StrictMode>
        {/* <RouterProvider router={router} /> */}
        <Example />
    </React.StrictMode>,
);
