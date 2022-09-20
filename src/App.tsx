import React from "react";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import { Page, usePageDataContext } from "./providers/pageProvider";

function App() {
  const { pageData, setPageData } = usePageDataContext();
  function pageSwitch() {
    switch (pageData.page) {
      case Page.page1:
        return <Page1 />;
      case Page.page2:
        return <Page2 />;
    }
  }
  return <div className="App">{pageSwitch()}</div>;
}

export default App;
