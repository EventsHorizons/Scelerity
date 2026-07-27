import Script from "next/script";
import { getPublicEnv } from "@/lib/env";

/** GA4 + GTM + Clarity + Sentry — loads only when env vars are set. */
export function Analytics() {
  const { NEXT_PUBLIC_GA4_ID: gaId, NEXT_PUBLIC_GTM_ID: gtmId, NEXT_PUBLIC_CLARITY_ID: clarityId, NEXT_PUBLIC_SENTRY_DSN: sentryDsn } =
    getPublicEnv();

  if (!gaId && !gtmId && !clarityId && !sentryDsn) return null;

  return (
    <>
      {sentryDsn ? (
        <>
          <Script
            src="https://browser.sentry-cdn.com/9.5.0/bundle.tracing.min.js"
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
          <Script id="sentry-init" strategy="afterInteractive">
            {`if(typeof Sentry!=='undefined'){Sentry.init({dsn:'${sentryDsn}',tracesSampleRate:0.1,environment:'${process.env.NODE_ENV}'});}`}
          </Script>
        </>
      ) : null}

      {gtmId ? (
        <>
          <Script id="gtm-init" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        </>
      ) : null}

      {gaId && !gtmId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
            gtag('js',new Date());gtag('config','${gaId}',{send_page_view:true});`}
          </Script>
        </>
      ) : null}

      {clarityId ? (
        <Script id="clarity-init" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window,document,"clarity","script","${clarityId}");`}
        </Script>
      ) : null}
    </>
  );
}

/** Push custom events to GA4/GTM dataLayer. */
export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean>,
) {
  if (typeof window === "undefined") return;
  const w = window as Window & { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: name, ...params });
}

/** Report errors to Sentry when configured. */
export function captureError(error: unknown, context?: Record<string, string>) {
  if (typeof window === "undefined") return;
  const w = window as Window & { Sentry?: { captureException: (e: unknown, o?: object) => void } };
  w.Sentry?.captureException(error, context ? { extra: context } : undefined);
}
