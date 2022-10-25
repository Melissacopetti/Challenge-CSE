import { CroctProvider } from "@croct/plug-react";
import React from "react";

import InitialPage from "./InitialPage/InitialPage";


const App = () => {
  const noAccountId = "00000000-0000-0000-0000-000000000000";

  return (
     <CroctProvider appId={noAccountId}>
      
     <InitialPage />
     </CroctProvider>
  );
};

export default App;
