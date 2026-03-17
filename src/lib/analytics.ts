const GOOGLE_TAG_ORIGIN = "https://www.googletagmanager.com/gtag/js";

export function initializeAnalytics(measurementId: string) {
  if (
    typeof window === "undefined" ||
    typeof document === "undefined" ||
    !measurementId
  ) {
    return;
  }

  if (document.querySelector(`script[data-analytics-id="${measurementId}"]`)) {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.gtag =
    window.gtag ??
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

  window.gtag("js", new Date());
  window.gtag("config", measurementId, { send_page_view: true });

  const script = document.createElement("script");
  script.async = true;
  script.src = `${GOOGLE_TAG_ORIGIN}?id=${measurementId}`;
  script.dataset.analyticsId = measurementId;
  document.head.appendChild(script);
}
