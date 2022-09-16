import { Page, usePageDataContext } from "../providers/pageProvider";

export default function Page1() {
  const { pageData, setPageData, getNum } = usePageDataContext();
  return (
    <>
      page 1 asada
      {getNum()}
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
    </>
  );
}
