"use client";

import { teamList } from "@/lib/lists";
import Image from "next/image";
import ScrollMagic from "scrollmagic";
import { useEffect } from "react";

export default function Team() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const controller = new ScrollMagic.Controller();

      const revealElements = document.getElementsByClassName("tim");

      for (let i = 0; i < revealElements.length; i++) {
        new ScrollMagic.Scene({
          triggerElement: revealElements[i],
          offset: 50,
          triggerHook: 0.9,
        })
          .setClassToggle(revealElements[i], "visible")
          .addTo(controller);
      }

      new ScrollMagic.Scene({
        triggerElement: "#btn-bantu",
        offset: 50,
        triggerHook: 0.9,
      })
        .setClassToggle("#btn-bantu", "visible")
        .addTo(controller);
    }
  }, []);

  return (
    <section id="team">
      <div className="container">
        <div>
          <h2>Our team</h2>
          <p>consists of completely different people who are united by a common desire - to help</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-6">
          {teamList.map((item, i) => (
            <div key={i} className="tim relative">
              <div className="bg-kuning absolute inset-0" />
              <div className="z-10 relative border-[3px] border-black hover:scale-90 p-8 h-full transition ease-linear">
                <Image
                  src={`${item?.photoUrl}`}
                  width={200}
                  height={200}
                  alt={item.name || "photo url"}
                  className="object-center object cover"
                />
                <div className="text-center flex items-center justify-center flex-col gap-2 mt-8">
                  <h3>{item.name}</h3>
                  <p className="card">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
