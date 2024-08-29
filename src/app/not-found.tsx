"use client"
import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";
import { ErrorDisplay } from "./ErrorDisplay";

const NotFound = () => {
  useEffect(() => {
    Sentry.captureMessage("Page non trouvée");
  }, []);
  return (
    <>
      <ErrorDisplay code="404" />
    </>
  )
};
export default NotFound;
