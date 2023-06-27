import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import './index.css';
import App from './App';
import Main from './Routes/Main.js';
import Profile from './Routes/UserProfile.js';
import Notifications from './Routes/Notifications.js';
import Messages from './Routes/Messages.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/main",
        element: <Main />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/notifications",
        element: <Notifications />
      },
      {
        path: "/messages",
        element: <Messages />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
