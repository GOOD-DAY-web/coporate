import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import Application from "./Application";
import Introduction from "./Introduction";
import Benefits from "./Benefits";
import Message from "./Message";
import ChooseUs from "./ChooseUs";
import FAQ from "./FAQ";
import Stylists from "./Layouts/stylists";
import { FramerMotion } from "../../../components/layouts/FramerMotion";
import StylistsGallery from "./Layouts/StylistsGallery";
import styles from "./styles/campaign.module.scss";

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
      <div className={styles.adjustment_01}>
        <StylistsGallery />
      </div>
      <Application />
      <Benefits />
      <Application />
      <Message />
      <Application />
      <ChooseUs />
      <Application />
      <FAQ />
      <Stylists />
    </>
  );
}
