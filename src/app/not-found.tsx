"use client"
import * as Sentry from "@sentry/nextjs";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ErrorDisplay } from "./ErrorDisplay";

const NotFound = () => {
  const pathname = usePathname()
  useEffect(() => {
    Sentry.captureMessage("Page non trouvée : " + pathname);
  }, []);
  return (
    <>
      <ErrorDisplay code="404" />
    </>
  )
};
export default NotFound;
