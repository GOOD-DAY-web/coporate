// このページでarticle, stylist(記事情報)を持ってきている
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "goodday-corporate", // service-domainとは https:// 以降、自分で設定した箇所を指す
  // null合体
  apiKey: process.env.API_KEY ?? " ",
});
