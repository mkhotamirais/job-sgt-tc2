"use client";

import Image from "next/image";
import Socials from "./Socials";
import ScrollMagic from "scrollmagic";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const controller = new ScrollMagic.Controller();

      new ScrollMagic.Scene({
        triggerElement: "#last-image",
        offset: 50,
        triggerHook: 0.9,
      })
        .setClassToggle("#last-image", "visible")
        .addTo(controller);
    }
  }, []);

  return (
    <section id="contact" className="bg-ijo">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-8">
          <div>
            <h2>Contact us</h2>
            <p>
              Kyiv, Ukraine
              <br />
              mail@isa.co.ua
            </p>
          </div>
          <Socials />
        </div>
        <div id="last-image">
          <Image
            src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/62647f9fbe07235ba9b28d67_star-white-with-animals.svg"
            width={300}
            height={300}
            alt="last image"
            className="object-cover object-center w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
