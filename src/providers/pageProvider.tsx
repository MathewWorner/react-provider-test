import React, { createContext, useContext, useState } from "react";

export enum Page {
  page1,
  page2,
}

export interface IPageData {
  page: Page;
}

const initPageData: IPageData = {
  page: Page.page1,
};

interface IPageDataContext {
  pageData: IPageData;
  setPageData: (page: IPageData) => void;
  getNum: () => Number;
}

const PageDataContext = createContext<IPageDataContext>({
  pageData: initPageData,
  setPageData: () => {},
  getNum: () => 5,
});

export const PageDataProvider = (props: { children: React.ReactNode }) => {
  const [pageData, setPageData] = useState<IPageData>(initPageData);

  const getNum = () => {
    return 10;
  };

  return (
    <PageDataContext.Provider
      value={{
        pageData,
        setPageData,
        getNum,
      }}
    >
      {props.children}
    </PageDataContext.Provider>
  );
};

export const usePageDataContext = () => {
  return useContext(PageDataContext);
};
