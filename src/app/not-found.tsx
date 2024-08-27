import * as Sentry from "@sentry/nextjs";
import { ErrorDisplay } from "./ErrorDisplay";

const NotFound = () => {
  Sentry.captureMessage("Page non trouvée");
  return (
    <>
      <ErrorDisplay code="404" />
    </>
  )
};
export default NotFound;
