import React from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CookiesProvider } from "react-cookie";
import { CustomProvider } from "rsuite";
import router from "./routes";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
        <CustomProvider theme="dark">
            <CookiesProvider>
                <QueryClientProvider client={queryClient}>
                    {/* <UserContextProvider> */}
                        <RouterProvider router={router} />
                    {/* </UserContextProvider> */}
                    <ReactQueryDevtools />
                </QueryClientProvider>
            </CookiesProvider>
        </CustomProvider>
    </React.StrictMode>
)
