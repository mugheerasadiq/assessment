import { createContext, useContext } from "react";

export const LoaderContext = createContext<any>(undefined);

export function useLoaderContext() : any{
    return useContext(LoaderContext);
  }
  