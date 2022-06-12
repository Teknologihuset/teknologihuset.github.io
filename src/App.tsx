import React from 'react'
import { createRoot } from 'react-dom/client';
import FrontPage from './pages/frontpage/FrontPage'
import '../public/assets/sass/main.scss'
import * as query from 'react-query'
import {RecoilRoot} from "recoil";

//import dotenv from "dotenv"
//dotenv.config()

const queryClient = new query.QueryClient({
    defaultOptions: {
        queries: {
            retryDelay: 500,
            retry: 1,
            refetchOnWindowFocus: false,
            //cacheTime: 0,
            cacheTime: 1000 * 60 * 60 // 1 hour, add * xx for more
        },
    },
})

const container = document.getElementById('root');
// @ts-ignore
const root = createRoot(container);
root.render(
  <React.StrictMode>
      <RecoilRoot>
          <query.QueryClientProvider client={queryClient}>
              <FrontPage />
          </query.QueryClientProvider>
      </RecoilRoot>
  </React.StrictMode>);
