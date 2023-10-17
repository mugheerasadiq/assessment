import React, { useState } from "react";
import { notification } from "antd";
import { LoaderContext } from "./context";
import FullPageLoader from "../../components/custom/loader";

export const LoaderProvider = ({ children }: any) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ setLoading, loading }}>
      <FullPageLoader loading={loading}>{children}</FullPageLoader>
    </LoaderContext.Provider>
  );
};
