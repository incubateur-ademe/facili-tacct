"use client";

import { LoaderText } from "@/components/ui/loader";
import { useEffect } from "react";

const Loading = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <LoaderText text="Chargement de l'article" />
  )
}

export default Loading;
