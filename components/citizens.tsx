"use client";

import { citizenList } from "@/lib/lists";
import Image from "next/image";
import ScrollMagic from "scrollmagic";
import { useEffect } from "react";

export default function Citizens() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const controller = new ScrollMagic.Controller();

      const revealElements = document.getElementsByClassName("citizen");

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
    <section id="citizens" className="bg-ping">
      <div className="container">
        <div>
          <h2>Socially active citizens</h2>
          <p>support us</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {citizenList.map((item, i) => (
            <div key={i} className="citizen h-full mt-4">
              <Image
                src={`${item?.photoUrl}`}
                width={200}
                height={200}
                alt={item.name || "photo url"}
                className="object-center object-cover w-full grayscale"
              />
              <div className="text-center flex items-center justify-center flex-col gap-2 mt-4">
                <h3>{item.name}</h3>
                <p className="card">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
