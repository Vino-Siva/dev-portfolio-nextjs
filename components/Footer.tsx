// import Link from "next/link";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import MagicButton from "./ui/MagicButton";
import { FaArrowRight } from "react-icons/fa6";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer
      className="w-full pt-20 pb-10 bg-[url('/footer-grid.svg')]"
      id="contact"
    >
      <div className="flex flex-col items-center">
        <h2 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> project to the
          next level?
        </h2>
        <p className="text-center md:mt-10 my-5 text-white-200">
          Reach out to me today. Let&apos;s work together to build something
          great.
        </p>
        <Link href="mailto:vinoth@vinothsiva.com">
          <MagicButton
            title="Get in Touch"
            position="right"
            icon={<FaArrowRight />}
          />
        </Link>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="text-sm md:text-base md:font-normal font-light">
          Copyright &copy; {new Date().getFullYear()} Vinoth. All rights
          reserved.
        </p>
        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map(({ id, img }) => (
            <div
              key={id}
              className="cursor-pointer size-10 flex justify-center items-center backdrop-blur-lg backdrop-filter saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image
                src={img}
                alt={`${id}_icon`}
                width={0}
                height={0}
                className="h-auto w-5"
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
