"use client";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { GridGlobe } from "./GridGlobe";
import { techStack1 } from "@/data";
import { techStack2 } from "@/data";
import { useState } from "react";
import MagicButton from "./MagicButton";
import { FaRegCopy } from "react-icons/fa6";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  imgClassName,
  titleClassName,
  img,
  spareImg,
}: {
  id?: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  imgClassName?: string;
  titleClassName?: string;
  img?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("vinoth@vinothsiva.com");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white-100/5",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={img}
              height={500}
              width={500}
              priority
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
              height={500}
              width={500}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl" /> */}
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover:/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] md:max-w-32 text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div
            className={`font-sans font-bold text-lg lg:text-3xl max-w-96 z-10`}
          >
            {title}
          </div>
          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-7">
                {techStack1.map((item: string) => (
                  <span
                    key={item}
                    className="py-1 px-2 lg:py-2 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-7">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                {techStack2.map((item: string) => (
                  <span
                    key={item}
                    className="py-1 px-2 lg:py-2 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <MagicButton
                title={copied ? "Email Copied" : "Copy My Email"}
                icon={<FaRegCopy />}
                position="left"
                otherClasses={
                  copied ? "bg-stone-100 text-[#161A31]" : `bg-[#161A31]!`
                }
                handleClick={handleCopy}
              />

              <div className={`absolute -bottom-5 right-0`}>
                {copied && (
                  <div
                    style={{
                      width: 150,
                      height: 150,
                      background: "url('confetti.gif')",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      position: "relative",
                    }}
                  ></div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
