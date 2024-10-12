"use client";

import "./hero.css";
import { FaChevronDown } from "react-icons/fa6";
import Socials from "./Socials";
import Image from "next/image";
import { useEffect } from "react";
import ScrollMagic from "scrollmagic";

const profilImage1 =
  "https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6265332e63b917130ca8d702_isa-logo-dog-clean.svg";

export default function Hero() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const controller = new ScrollMagic.Controller();
      const scene = new ScrollMagic.Scene({
        triggerElement: "#hero h1",
        triggerHook: 0.9,
        duration: "125%",
        offset: 50,
      });
      scene.setClassToggle("#hero #socials, #hero p, #hero h1, #hero #gambar", "visible"); // add class to reveal
      controller.addScene(scene);
    }
  }, []);

  return (
    <>
      {/* <div className="min-h-screen" /> */}
      <section id="hero" className="relative min-h-screen bg-kuning flex items-center justify-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="font-dm-sans flex items-center justify-center">
              <Image
                id="gambar"
                src={profilImage1}
                width={200}
                height={200}
                alt="profil image"
                className="object-center object-contain w-[16vw] h-auto"
                priority
              />
            </div>
            <h1 className="flex flex-col gap-0 leading-none font-bold">
              <span>Innovative</span>
              <span>Solutions</span>
              <span>for</span>
              <span>Animals</span>
            </h1>
          </div>
          <p className="mb-2">charity organization</p>
          <Socials />
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-0">
          <FaChevronDown className="animate-bounce" />
        </div>
      </section>
    </>
  );
}
