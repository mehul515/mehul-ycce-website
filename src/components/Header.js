"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import { HeaderMenu } from "@/components/ui/HeaderMenu";
const logo = require("../../public/ycce_logo.png");

import { useMediaQuery } from "react-responsive";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/header-accordion";
import navigation from "@/components/navigations.json";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

function Header() {
  const isMobile = useMediaQuery({ query: "(max-width: 891px)" });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);
  // Return nothing at first render and force a re-render
  if (!hydrated) return null;

  return (
    <main className="bg-[#242E3B]">
      {!isMobile ? (
        <div>
          {/* Parent div */}
          <div className="flex flex-row justify-between">
            <div>
              <p className="text-[10px] ml-5 my-1 text-white">
                <span className="text-[#F6A61D]">APPLY NOW</span> for CUCET -
                2024
              </p>
            </div>
            <div className="text-white mr-40">
              <span className="text-[10px] border-l px-1 cursor-pointer">
                INTERNATIONAL
              </span>
              <span className="text-[10px] border-l px-1 cursor-pointer">
                LIBRARY
              </span>
              <span className="text-[10px] border-l px-1 cursor-pointer">
                STUDENT SERVICES
              </span>
              <span className="text-[10px] border-l px-1 cursor-pointer">
                CAREER
              </span>
              <span className="text-[10px] border-l px-1 cursor-pointer">
                ALUMNI
              </span>
              <span className="text-[10px] border-l border-r px-1 cursor-pointer">
                CONTACT US
              </span>
            </div>
          </div>
          <div className="flex flex-row justify-between mx-5">
            <div name="logo" className="cursor-pointer">
              <div className="flex flex-row">
                <Image src={logo} alt="YCCE logo" width={40} height={40} />
                <p className="text-5xl text-white font-semibold font-serif mx-3">
                  YCCE
                </p>
              </div>
              <p className=" text-white text-[9px] my-[-10px] mb-1">
                Yeshwantrao Chavan College of Engineering
              </p>
            </div>
            <div className="flex flex-row">
              <HeaderMenu />
              <div className="bg-slate-500 p-2 text-center rounded-md mb-2 mx-3 mt-3">
                <p className="text-xs text-white font-semibold">
                  Admission Helpline
                </p>
                <p className="text-xs text-white">07104-236031/32/33</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-5 px-3 flex flex-row justify-between items-center">
          <div name="logo" className="cursor-pointer">
            <div className="flex flex-row">
              <Image src={logo} alt="YCCE logo" width={40} height={40} />
              <p className="text-5xl text-white font-semibold font-serif mx-3">
                YCCE
              </p>
            </div>
            <p className=" text-white text-[9px] my-[-10px] mb-1">
              Yeshwantrao Chavan College of Engineering
            </p>
          </div>

          <Sheet>
            <SheetTrigger>
              <HamburgerMenuIcon className="text-white size-10" />
            </SheetTrigger>
            <SheetContent className="px-3">
              <SheetHeader>
                <SheetTitle className="mt-5">
                  <div className="bg-slate-500 p-2 text-center rounded-md mb-2 mx-3 my-3">
                    <p className="text-xs text-white font-semibold block">
                      Admission Helpline
                    </p>
                    <p className="text-xs text-white">07104-236031/32/33</p>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <Accordion type="single" collapsible>
                {navigation.map((nav, index) => {
                  return (
                    <AccordionItem
                      value={`item-${index}`}
                      key={index}
                      className="mt-2 text-xs"
                    >
                      <AccordionTrigger className="text-white bg-[#242e3b] hover:bg-[#f6a61d] px-5 border-l-8 border-[#f6a61d] focus:bg-[#f6a61d]">
                        {nav.name}
                      </AccordionTrigger>
                      <AccordionContent>
                        {nav.content.map((link, index) => (
                          <p key={index}>{link}</p>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </SheetContent>
          </Sheet>
        </div>
      )}
    </main>
  );
}

export default Header;
