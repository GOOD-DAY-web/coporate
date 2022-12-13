// campaignページのみ独立したページにする
import React from "react";
import "nprogress/nprogress.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import NextNprogress from "nextjs-progressbar";
// HeaderとFooterを別途作成する

import Script from "next/script";
import * as gtag from "../lib/gtag";

export default function campaignView({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouterChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouterChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouterChange);
    };
  }, [router.events]);
  if (router.pathname == "/campaign") {
    return (
      <>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', '${gtag.GA_MEASUREMENT_ID}');
            `,
          }}
        />
        <NextNprogress
          color="aqua"
          startPosition={0.3}
          stopDelayMs={200}
          height={4}
          showOnShallow={true}
        />
        {/* 専用のHeaderを作成する */}
        <Component key={router.asPath} {...pageProps} />
        {/* 専用のFooterを作成する */}
      </>
    );
  }
}
