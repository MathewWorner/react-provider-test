import React from "react";
import { NewComp } from "../components/newComp";
import { Page, usePageDataContext } from "../providers/pageProvider";

export default function Page1() {
  const { pageData, setPageData, getNum } = usePageDataContext();
  return (
    <>
      page 1{getNum()}
      <div
        onClick={() => {
          setPageData({
            ...pageData,
            page: Page.page2,
          });
        }}
        style={{ backgroundColor: "red" }}
      >
        click
      </div>
      <NewComp productId="PS10WF"></NewComp>
    </>
  );
}
