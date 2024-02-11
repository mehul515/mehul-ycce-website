"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeaderMenu } from "@/components/ui/HeaderMenu";
import Header from "@/components/Header";
import AboutMegheGroup from "@/components/AboutMegheGroup";
const logo = require("../../public/ycce_logo.png");

export default function Home() {
  return (
    <>
      <Header />
      <AboutMegheGroup />
    </>
  );
}
