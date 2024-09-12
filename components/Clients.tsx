import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";
import Image from "next/image"; // Import the Image component from the appropriate library

const Clients = () => {
  return (
    <section className="py-20" id="testimonials">
      <h1 className="heading">
        Kind Words From <span className="text-purple">Satisfied Clients</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          speed="slow"
          direction="right"
        />
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map(({ id, name, img, nameImg }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              <Image
                src={img}
                alt={name}
                className="md:w-10 w-5 h-auto"
                width={0}
                height={0}
              />
              <Image
                src={nameImg}
                alt={name}
                className="md:w-24 w-20 h-auto"
                width={0}
                height={0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
