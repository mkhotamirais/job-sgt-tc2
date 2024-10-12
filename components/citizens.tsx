"use client";

import { citizenList } from "@/lib/lists";
import Image from "next/image";

export default function Citizens() {
  return (
    <section className="bg-ping">
      <div className="container">
        <div>
          <h2>Socially active citizens</h2>
          <p>support us</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {citizenList.map((item, i) => (
            <div key={i} className="h-full mt-4">
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
