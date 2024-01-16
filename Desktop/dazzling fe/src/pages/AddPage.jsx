import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

function AddPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Dazzling | Add Page</title>
      </Helmet>
    </HelmetProvider>
  );
}

export default AddPage;
