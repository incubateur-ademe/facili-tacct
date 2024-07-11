"use client";

import { type PropsWithChildren } from "react";

export const CookieConsentButton = ({ children }: PropsWithChildren) => (
  <button onClick={() => console.log("====== CLICK")}>{children}</button>
);
