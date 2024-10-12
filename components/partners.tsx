"use client";

import { partnerList } from "@/lib/lists";
import Image from "next/image";
import ScrollMagic from "scrollmagic";
import { useEffect } from "react";

export default function Partners() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const controller = new ScrollMagic.Controller();

      const revealElements = document.getElementsByClassName("partner");

      for (let i = 0; i < revealElements.length; i++) {
        new ScrollMagic.Scene({
          triggerElement: revealElements[i],
          offset: 50,
          triggerHook: 0.9,
        })
          .setClassToggle(revealElements[i], "visible")
          .addTo(controller);
      }
    }
  }, []);
  return (
    <section id="partners">
      <div className="container">
        <div>
          <h2>Out partners</h2>
          <p>are take care of our fund and help us with many questions</p>
        </div>
        <div className="pt-4 grid grid-cols-2 md:grid-cols-3 place-items-center lg:grid-cols-4 gap-14">
          {partnerList.map((item, i) => (
            <Image
              key={i}
              src={`${item}`}
              width={200}
              height={200}
              alt={item || "image parter"}
              className="partner object-center object-contain h-24 w-72 grayscale"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
