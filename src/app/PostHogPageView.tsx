'use client'

import { usePathname, useSearchParams } from "next/navigation";
import { usePostHog } from 'posthog-js/react';
import { Suspense, useEffect } from "react";

function PostHogPageViewInner(): null {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const posthog = usePostHog();
  useEffect(() => {
    if (pathname && posthog) {
      let url = window.origin + pathname
      if (searchParams.toString()) {
        url = url + `?${searchParams.toString()}`
      }
      posthog.capture(
        '$pageview',
        {
          distinctId: posthog.get_distinct_id(),
          '$current_url': url,
        }
      )
    }
  }, [pathname, searchParams, posthog])

  return null
}

export default function PostHogPageView() {
  return (
    <Suspense fallback={null}>
      <PostHogPageViewInner />
    </Suspense>
  )
}
