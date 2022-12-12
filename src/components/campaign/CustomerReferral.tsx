import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import Application from "./Application";
import Introduction from "./Introduction";
import FAQ from "./FAQ";

export default function CustomerReferral() {
  const campaignItems = {
    title: "STEP1",
    src: "/media/howToUse_00.png",
    alt: "STEP1の画像です",
    text: "サロン見学",
  };
  return (
    <>
      <Introduction />
      <Application />
      ・特典
      <Application />
      ・メッセージ
      <Application />
      ・選ばれる理由
      <Application />
      <FAQ />
    </>
  );
}
