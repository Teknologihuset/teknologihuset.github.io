import * as query from "react-query";
import FrontPage from "../components/frontpage/FrontPage";
import { RecoilRoot } from "recoil";
import React from "react";

const queryClient = new query.QueryClient({
  defaultOptions: {
    queries: {
      retryDelay: 500,
      retry: 1,
      refetchOnWindowFocus: false,
      //cacheTime: 0,
      cacheTime: 1000 * 60 * 60, // 1 hour, add * xx for more
    },
  },
});

export default function () {
  return (
    <RecoilRoot>
      <query.QueryClientProvider client={queryClient}>
        <FrontPage />
      </query.QueryClientProvider>
    </RecoilRoot>
  );
}
