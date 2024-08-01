import { PageHead } from "@components/PageHead/PageHead";
import { IFormPageLayout } from "./types";

export const FormPageLayout = ({
  lastBreadcrumbsText,
  pageTitle,
  isSubmitSuccessful,
  submitedFormPlacehoderText,
  children,
}: IFormPageLayout) => {
  return (
    <>
      <PageHead lastBreadcrumbsText={lastBreadcrumbsText} />
      {!isSubmitSuccessful ? (
        <>
          <h1>{pageTitle}</h1>
          {children}
        </>
      ) : (
        <h3>{submitedFormPlacehoderText}</h3>
      )}
    </>
  );
};
