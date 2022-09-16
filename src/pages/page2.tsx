import { Page, usePageDataContext } from "../providers/pageProvider";

export default function Page2() {
  const { pageData, setPageData } = usePageDataContext();
  return (
    <>
      page 2
      <div
        onClick={() => {
          setPageData({
            ...pageData,
            page: Page.page1,
          });
        }}
        style={{ backgroundColor: "yellow" }}
      >
        click
      </div>
    </>
  );
}
