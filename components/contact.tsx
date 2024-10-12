"use client";

import Image from "next/image";
import Socials from "./Socials";

export default function Contact() {
  return (
    <section className="bg-ijo">
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
        <div>
          <Image
            src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/62647f9fbe07235ba9b28d67_star-white-with-animals.svg"
            width={300}
            height={300}
            alt="last image"
            className=""
          />
        </div>
      </div>
    </section>
  );
}
