"use client";

import { partnerList } from "@/lib/lists";
import Image from "next/image";

export default function Partners() {
  return (
    <section>
      <div className="container">
        <div>
          <h2>Out partners</h2>
          <p>are take care of our fund and help us with many questions</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 place-items-center lg:grid-cols-4 gap-8">
          {partnerList.map((item, i) => (
            <Image
              key={i}
              src={`${item}`}
              width={200}
              height={200}
              alt={item || "image parter"}
              className="object-center object-contain grayscale h-24 w-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
