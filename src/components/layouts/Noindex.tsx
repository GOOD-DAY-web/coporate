// 意図的にインデックスさせたくないページに使用するSEO
import Head from "next/head";
import * as React from "react";

interface Props {
  title: string;
  description: string;
  keyword: string;
  image: string;
  url: string;
}

export default function Noindex({
  title,
  description,
  keyword,
  image,
  url,
}: Props): JSX.Element {
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="noindex,nofollow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="keywords" content={keyword} />
      <meta property="og:type" content="corporate-site" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@tcr_jp" />
      <meta name="twitter:url" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
      <link rel="shortcut icon" href={"/favicon.ico"} />
      <link rel="apple-touch-icon" href={"/GOOD-DAY_mainLogo.png"} />
      <meta
        name="google-site-verification"
        content="8sodVuZGRA7Hrp-x-sDmPF0V9skQAUC6b_52klP3tGw"
      />
    </Head>
  );
}
