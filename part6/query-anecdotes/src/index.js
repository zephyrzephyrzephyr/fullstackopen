import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "react-query";

import App from './App'
import NotificationProvider from './notificationContext';


const client = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={client}>
    <NotificationProvider>
      <App />
    </NotificationProvider>
  </QueryClientProvider>
)
