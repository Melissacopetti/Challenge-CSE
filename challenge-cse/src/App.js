import { CroctProvider } from "@croct/plug-react";
import React from "react";
import { GlobalStyle } from "./GlobalStyled";

import InitialPage from "./InitialPage/InitialPage";

const App = () => {
  const noAccountId = "00000000-0000-0000-0000-000000000000";

  return (
    <CroctProvider appId={noAccountId}>
      <GlobalStyle/>
      <InitialPage />
    </CroctProvider>
  );
};

export default App;
