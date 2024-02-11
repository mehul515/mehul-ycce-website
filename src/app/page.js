"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeaderMenu } from "@/components/ui/HeaderMenu";
import Header from "@/components/Header";
import AboutMegheGroup from "@/components/AboutMegheGroup";
import Departments from "@/components/Departments";
import Footer from "@/components/Footer";
const logo = require("../../public/ycce_logo.png");

export default function Home() {
  return (
    <>
      <Header />
      <Departments />
      <AboutMegheGroup />
      <Footer />
      {/* New Components will add here */}
    </>
  );
}
